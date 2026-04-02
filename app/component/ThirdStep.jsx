import { useState } from "react";
import { Textfield } from "./Textfield";

export const ThirdStep = () => {
  const [dateandtime, SetDateandTime] = useState("");
  return (
    <div>
      <Textfield />
    </div>
  );
};
