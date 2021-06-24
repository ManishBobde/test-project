import React, { useState } from "react";

interface BirthDateStepProps {
  cb: (field: string, value: string) => void;
}

const BirthDateStep: React.FC<BirthDateStepProps> = (props) => {
  const [birthDate, setBirthDate] = useState("");
  return (
    <>
      <div>
        <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          onChange={({ target: { value } }) => {
            console.log(value);
            setBirthDate(value);
          }}
          value={birthDate}
        ></input>
      </div>
      <button onClick={() => props.cb("birthDate", birthDate)}>Next</button>
    </>
  );
};

export default BirthDateStep;
