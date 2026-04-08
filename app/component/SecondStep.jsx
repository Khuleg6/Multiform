"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Textfield } from "./Textfield";
import { isUserLandError } from "next/dist/server/app-render/create-error-handler";

export const SecondStep = ({
  handlePreviusStep,
  formData,
  handleChange,
  handleNextStep,
  currentStep,
  totalSteps,
  setFormData,
}) => {
  const { email, phonenumb, password, confirmpass } = formData;
  const [errors, setErrors] = useState({
    emailError: "",
    phonenumbError: "",
    passwordError: "",
    confirmpass: "",
  });

  let isValid = true;

  const isEmailValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        emailError: "Email cannot be emtpy...",
      }));
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        emailError: "Email is wrong",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, emailError: "" }));
      isValid = true;
    }
  };

  const isPhoneNumValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        phonenumbError: "Phone number cannot be empty...",
      }));
      isValid = false;
    } else if (!/^[987]\d{7}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        phonenumbError: "Phone number cannot contain special characters",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, phonenumbError: "" }));
      isValid = true;
    }
  };

  const isPasswordValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        passwordError: "Password cannot be empty...",
      }));
      isValid = false;
    } else if (value.length < 8) {
      setErrors((prev) => ({
        ...prev,
        passwordErrorError: "Phone number cannot contain special characters",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, passwordError: "" }));
      isValid = true;
    }
  };
  const isConfirmPassValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        confirmpass: "Password cannot be empty...",
      }));
      isValid = false;
    } else if (value !== password) {
      // State-д байгаа password-той харьцуулна
      setErrors((prev) => ({
        ...prev,
        confirmpass: "Passwords do not match.",
      }));
    } else {
      // Хэрэв таарч байвал алдааг арилгана
      setErrors((prev) => ({ ...prev, confirmpass: "" }));
    }
  };

  // const isPasswordValid = () => {
  //   // 1. Хоосон эсэхийг шалгах
  //   if (password === "") return "Password cannot be empty...";

  //   // 2. Уртыг шалгах (хамгийн багадаа 8 тэмдэгт)
  //   if (password.length < 8)
  //     return "Password must be at least 8 characters long.";

  //   // 3. Жижиг үсэг орсон эсэхийг шалгах
  //   if (!/[a-z]/.test(password))
  //     return "At least one lowercase letter is required.";

  //   // 4. Том үсэг орсон эсэхийг шалгах
  //   if (!/[A-Z]/.test(password))
  //     return "At least one uppercase letter is required.";

  //   // 5. Тоо орсон эсэхийг шалгах
  //   if (!/\d/.test(password)) return "At least one number is required.";

  //   // Хэрэв бүх нөхцөл биелсэн бол юу ч буцаахгүй (undefined)
  //   return null;
  // };

  const handleNext = () => {
    handleNextStep();
  };

  const isHavingError = () => {
    if (isValid) {
      handleNext();
    }
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
          name="email"
          value={email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            isEmailValid(e.target.value);
          }}
          error={errors.emailError}
          required={true}
          label="Email"
          placeholder="John@edu.mn"
        />
        <Textfield
          name="phonenumb"
          type="number"
          value={phonenumb}
          onChange={(e) => {
            setFormData({ ...formData, phonenumb: e.target.value });
            isPhoneNumValid(e.target.value);
          }}
          error={errors.emailError}
          required={true}
          label="Enter Phone Number"
          placeholder="88888888"
        />
        <Textfield
          name="password"
          value={password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
            isPasswordValid(e.target.value);
          }}
          error={errors.passwordError}
          required={true}
          label="Password"
          type="password"
          placeholder="********"
        />
        <Textfield
          name="confirmpass"
          value={confirmpass}
          onChange={(e) => {
            setFormData({
              ...formData,
              confirmpass: e.target.value,
            });
            isConfirmPassValid(e.target.value);
          }}
          error={errors.confirmpass}
          required={true}
          type="password"
          label="Confirm Password"
          placeholder="********"
        />
      </div>
      <div className="flex gap-2 my-10">
        <Button
          className="bg-white text-black border-gray-300"
          onClick={handlePreviusStep}
          disabled={false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
              fill="#202124"
            />
          </svg>{" "}
          Prev
        </Button>
        <Button
          onClick={() => {
            isEmailValid(email);
            isPhoneNumValid(phonenumb);
            isPasswordValid(password);
            isConfirmPassValid(confirmpass);
            isHavingError();
          }}
        >
          Continue {currentStep}/{totalSteps}
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
