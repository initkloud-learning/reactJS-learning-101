import { Account, Client, ID } from "appwrite";
import config from "../config.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //   Call another method
        return this.login({ email, password });
        return userAccount;
      } else {
        return userAccount;
        // throw new Error("Failed to create user account");
      }
    } catch (error) {
      console.error("Appwrite service :: createAccount() :: Error: ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Appwrite service :: login() :: Error: ", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite service :: getCuurentUser() :: Error: ", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions("current");
    } catch (error) {
      console.error("Appwrite service :: logout() :: Error: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
