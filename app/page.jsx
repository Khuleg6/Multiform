"use client";
import { useState } from "react";
import { FirstStep } from "./component/FirstStep";
import { SecondStep } from "./component/SecondStep";
import { ThirdStep } from "./component/ThirdStep";
import { Complete } from "./component/Complete";

export default function Home() {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumb: "",
    password: "",
    confirmpass: "",
    birthday: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const finalValue = type === "file" ? URL.createObjectURL(files[0]) : value;
    setFormData((step) => ({
      ...step,
      [name]: finalValue,
    }));
  };
  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: "", // Зургийн утгыг хоосон болгоно
    }));
  };
  const steps = [FirstStep, SecondStep, ThirdStep, Complete];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviusStep = () => {
    setStep(step - 1);
  };
  const StepForm = steps[step];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleNextStep={handleNextStep}
        handlePreviusStep={handlePreviusStep}
        currentStep={step + 1}
        totalSteps={steps.length - 1}
      />
    </div>
  );
}
