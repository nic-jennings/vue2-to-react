import React from "react";

type HelloWorldProps = {
  title: string;
  respondFunction: () => void;
};
export function HelloWorld({ title, respondFunction }: HelloWorldProps) {
  return (
    <div>
      <h2>Hello World Example</h2>

      {title}
      <br />
      <button onClick={() => respondFunction()}>Respond</button>
    </div>
  );
}
