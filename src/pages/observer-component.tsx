import React from "react";
import { Observer, useLocalStore } from "mobx-react-lite"; // 6.x or mobx-react-lite@1.4.0

export default function ObservePerson() {
  const person = useLocalStore(() => ({ name: "John" }));
  return (
    <div>
      {person.name} <i>I will never change my name</i>
      <div>
        <Observer>{() => <div>{person.name}</div>}</Observer>
        <button onClick={() => (person.name = "Mike")}>
          I want to be Mike
        </button>
      </div>
    </div>
  );
}
