"use client";

import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { useState } from "react";

export const FirstStep = ({ handleNextStep }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const isHavingError = () => {
    return isFirstNameValid() || isLastNameValid() || isUserNameValid();
  };

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = () => {
    if (username === "") return "Username cannot be empty...";
    if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(username))
      return "username wrong";
  };
  return (
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <img src="logo.png" />
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>

        <Textfield
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          error={isFirstNameValid}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <Textfield
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          error={isLastNameValid}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <Textfield
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          error={isUserNameValid}
          required={true}
          label="User Name"
          placeholder="Johndoe..."
        />
      </div>
      <div className="flex gap-2 my-10">
        <Button onClick={handleNextStep} disabled={isHavingError()}>
          Next
        </Button>
      </div>
    </div>
  );
};
