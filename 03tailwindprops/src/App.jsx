import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "initkloud",
  //   age: 25,
  // };
  // let newArray = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className=" text-white bg-black p-4 rounded-2xl mb-4">
        Tailwind Testing
      </h1>
      <Card username="initkloud" btnText="Click me" />
    </>
  );
}

export default App;
