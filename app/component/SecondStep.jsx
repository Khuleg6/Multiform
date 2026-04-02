"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Textfield } from "./Textfield";

export const SecondStep = ({ handlePreviusStep }) => {
  const [email, setEmail] = useState("");
  const [phonenumb, setPhonenumb] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const isEmailValid = () => {
    if (email === "") return "Email cannot be empty...";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return "Email is wrong.";
  };

  const isPhoneNumValid = () => {
    if (phonenumb === "") return "Phone number cannot be empty...";
    if (!/^[987]\d{7}$/.test(phonenumb))
      return "Phone number must be start with 7 or up to 9.";
  };
  const isPasswordValid = () => {
    if (password === "") return "Phone number cannot be empty...";
    if (!/^[987]\d{7}$/.test(password))
      return "Phone number must be start with 7 or up to 9.";
  };

  const isHavingError = () => {
    return isEmailValid() || isPhoneNumValid() || isPasswordValid();
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={isEmailValid}
          required={true}
          label="Email"
          placeholder="John@edu.mn"
        />
        <Textfield
          value={phonenumb}
          onChange={(e) => {
            setPhonenumb(e.target.value);
          }}
          error={isPhoneNumValid}
          required={true}
          label="Enter Phone Number"
          placeholder="88888888"
        />
        <Textfield
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error={isPasswordValid}
          required={true}
          label="Password"
        />
        <Textfield
          value={confirmpass}
          onChange={(e) => {
            setConfirmpass(e.target.value);
          }}
          required={true}
          label="Confirm Password"
        />
      </div>
      <div className="flex gap-2 my-10">
        <Button onClick={handlePreviusStep} disabled={false}>
          Prev
        </Button>
        <Button disabled={isHavingError()}>Next</Button>
      </div>
    </div>
  );
};
