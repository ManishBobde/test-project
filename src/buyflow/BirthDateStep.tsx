import React, { useState } from "react";

interface BirthDateStepProps {
  cb: (field: string, value: string) => void;
}

const BirthDateStep: React.FC<BirthDateStepProps> = (props) => {
  const [birthDate, setBirthDate] = useState("");
  console.log(new Date().toISOString().split("T")[0]);
  return (
    <>
      <div>
        <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          onChange={({ target: { value } }) => {
            setBirthDate(value);
          }}
          value={birthDate}
          max={new Date().toISOString().split("T")[0]}
        ></input>
      </div>
      <button onClick={() => props.cb("birthDate", birthDate)}>Next</button>
    </>
  );
};

export default BirthDateStep;
