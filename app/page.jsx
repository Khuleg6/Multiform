"use client";
import { useState } from "react";
import { FirstStep } from "./component/FirstStep";
import { SecondStep } from "./component/SecondStep";

export default function Home() {
  const [step, setStep] = useState(0);
  const steps = [FirstStep, SecondStep];
  const handleNextStep = () => {
    console.log("working");
    setStep(step + 1);
  };
  const handlePreviusStep = () => {
    setStep(step - 1);
  };
  const StepForm = steps[step];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        handleNextStep={handleNextStep}
        handlePreviusStep={handlePreviusStep}
      />
    </div>
  );
}
