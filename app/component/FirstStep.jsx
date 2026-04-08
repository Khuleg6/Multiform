"use client";

import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { useState } from "react";

export const FirstStep = ({
  formData,
  setFormData,
  handleChange,
  handleNextStep,
  currentStep,
  totalSteps,
}) => {
  const { firstname, lastname, username } = formData;
  const [errors, setErrors] = useState({
    firstnameError: "",
    lastnameError: "",
    usernameError: "",
  });

  let isValid = true;

  const isFirstNameValid = (prev) => {
    if (prev === "") {
      setErrors((prev) => ({
        ...prev,
        firstnameError: "First name cannot be empty...",
      }));
      isValid = false;
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        firstnameError:
          "First name cannot contain special characters or numbers.",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, firstnameError: "" }));
      isValid = true;
    }
  };
  const isLastNameValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        lastnameError: "Last name cannot be empty...",
      }));
      isValid = false;
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        lastnameError:
          "Last name cannot contain special characters or numbers.",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, lastnameError: "" }));
      isValid = true;
    }
  };
  const isUserNameValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        usernameError: "Username cannot be empty...",
      }));
      isValid = false;
    } else if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9_]{1,18}[a-zA-Z0-9])?$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        usernameError: "username cannot start with special characters",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, usernameError: "" }));
      isValid = true;
    }
  };

  const isHavingError = () => {
    if (isValid) {
      handleNext();
    }
  };

  const handleNext = () => {
    handleNextStep();
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
          name="firstname"
          value={firstname}
          onChange={(e) => {
            setFormData({ ...formData, firstname: e.target.value });
            isFirstNameValid(e.target.value);
          }}
          error={errors.firstnameError}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <Textfield
          name="lastname"
          value={lastname}
          onChange={(e) => {
            setFormData({ ...formData, lastname: e.target.value });
            isLastNameValid(e.target.value);
          }}
          error={errors.lastnameError}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <Textfield
          name="username"
          value={username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
            isUserNameValid(e.target.value);
          }}
          error={errors.usernameError}
          required={true}
          label="User Name"
          placeholder="Johndoe..."
        />
      </div>
      <div className="flex gap-2 my-10">
        <Button
          className="text-white"
          onClick={() => {
            isFirstNameValid(firstname);
            isLastNameValid(lastname);
            isUserNameValid(username);
            isHavingError();
          }}
        >
          Continue {currentStep}/{totalSteps}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
