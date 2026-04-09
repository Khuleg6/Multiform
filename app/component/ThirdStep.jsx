import { use, useState } from "react";
import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { Imgfield } from "./Imgfield";

export const ThirdStep = ({
  formData,
  handleChange,
  handlePreviusStep,
  handleRemoveImage,
  handleNextStep,
  currentStep,
  totalSteps,
  setFormData,
}) => {
  const { birthday, image } = formData;
  const [errors, setErrors] = useState({
    birthdayerror: "",
    imageerror: "",
  });
  let isValid = true;
  const isBirthdayErrorValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        birthdayerror: "Image cannot be empty",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, birthdayerror: "" }));
      isValid = true;
    }
  };
  const isimageErrorValid = (value) => {
    if (value === "") {
      setErrors((prev) => ({
        ...prev,
        imageerror: "Image cannot be empty",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, imageerror: "" }));
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
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => {
            setFormData({ ...formData, birthday: e.target.value });
          }}
          error={errors.birthdayerror}
          required={true}
          label="Date of Birth"
        />
        <Imgfield
          name="image"
          value={image}
          handleChange={handleChange}
          onChange={(e) => {
            setFormData({ ...formData, image: e.target.value });
          }}
          error={errors.imageerror}
          required={true}
          label="Profile image"
          handleRemoveImage={() => {
            // formData доторх image-ийг хоосон болгох
            handleChange({ target: { name: "image", value: "" } });
          }}
        />
      </div>

      <div className="flex gap-2 my-10 mt-[80px]">
        <Button
          className="bg-white text-black border border-gray-200 w-[128px] hover:bg-gray-200]"
          onClick={handlePreviusStep}
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
          className="text-white hover:bg-gray-600 w-[280px]"
          onClick={() => {
            isBirthdayErrorValid(birthday);
            isimageErrorValid(image);
            isHavingError();
          }}
        >
          Complete {currentStep}/{totalSteps}{" "}
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
