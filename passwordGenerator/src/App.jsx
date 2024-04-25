import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCopy, setPasswordCopied] = useState("COPY");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let str = "";
      let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let num = "0123456789";
      let specialChar = "!@&()_";

      if (numberAllowed) {
        str += num;
      }
      if (charAllowed) {
        str += specialChar;
      }

      str += char;

      for (let i = 0; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length));
      }
      setPassword(pass);
      setPasswordCopied("COPY");
    },
    [length, numberAllowed, charAllowed, setPassword]
  );

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
    setPasswordCopied("Copied!");
  }, [password]);

  // function clearPasswordField() {
  //   setPassword("");
  // }

  useEffect(
    () => passwordGenerator(),
    [length, numberAllowed, charAllowed, passwordGenerator]
  );

  return (
    <>
      <h1 className="text-6xl text-center text-white mt-20">
        Password GeneratoR
      </h1>
      <div className="flex flex-wrap justify-center mt-20 bg-white p-5 rounded-lg mx-auto md:w-1/2">
        <div className="flex w-full items-center space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Password Generator"
            value={password}
            readOnly
            ref={passwordRef}
          ></input>
          <button
            type="button"
            onClick={copyPasswordToClipboard}
            className="rounded-md outline-none bg-black px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            {passwordCopy}
          </button>

          {/* <button
            type="button"
            onClick={clearPasswordField}
            className="rounded-md outline-none bg-red-700 px-9 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
          >
            Clear
          </button> */}
        </div>
        <div className="flex w-full items-center space-x-2 mt-5">
          <input
            className="h-1 bg-orange-500 rounded-md appearance-none cursor-pointer dark:bg-gray-700"
            type="range"
            id="rangeFor"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label
            className="ml-3 min-w-0 flex-1 text-gray-500"
            htmlFor="rangeInput"
          >
            length: {length}
          </label>

          <input
            id="numberCheckbox"
            defaultChecked={numberAllowed}
            onChange={(e) => setNumberAllowed(e.target.checked)}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="numberCheckbox"
            className="ml-3 min-w-0 flex-1 text-gray-500"
          >
            Number
          </label>

          <input
            id="charCheckbox"
            defaultChecked={charAllowed}
            onChange={(e) => setCharAllowed(e.target.checked)}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="charCheckbox"
            className="ml-3 min-w-0 flex-1 text-gray-500"
          >
            Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
