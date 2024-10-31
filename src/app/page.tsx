"use client"
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("I am server side preserver change");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <h1 className="text-center text-5xl cursor-pointer text-red-500">Use State Hook Example</h1>

      <p
        onClick={() => {
          console.log("Event Fired");
          setName("State updated!"); // Example of updating the name state
        }}
        className="text-center text-lg cursor-pointer"
      >
        {name}
      </p>

      <h3 className="text-center text-2xl text-blue-500">
        useState lets functional components hold and manage data that can change over time. Updating a state variable with setStateFunction triggers a re-render of the component. This hook is key for adding interactivity, managing inputs, toggling elements, and handling any dynamic data.
      </h3>

      <button
       
        className="text-lg p-5 m-5 cursor-pointer bg-green-300 rounded-lg"
      >
        Click Me
      </button>

    </div>
  );
}
