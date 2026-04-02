"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Textfield } from "./Textfield";

export const SecondStep = (handlePreviusStep) => {
  const [email, setEmail] = useState("");
  const [phonenumb, setPhonenumb] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
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
          required={true}
          label="Email"
          placeholder="John@edu.mn"
        />
        <Textfield
          value={phonenumb}
          onChange={(e) => {
            setPhonenumb(e.target.value);
          }}
          required={true}
          label="Enter Phone Number"
          placeholder="88888888"
        />
        <Textfield
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
        <Button onClick={handlePreviusStep} disabled={true}>
          Next
        </Button>
      </div>
    </div>
  );
};
