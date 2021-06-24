import React, { useState } from "react";

interface LastNameStepProps {
  cb: (field: string, value: string) => void;
}

const LastNameStep: React.FC<LastNameStepProps> = (props) => {
  const [lastName, setLastName] = useState("");
  return (
    <>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
          value={lastName}
        ></input>
      </div>
      <button onClick={() => props.cb("lastName", lastName)}>Next</button>
    </>
  );
};

export default LastNameStep;
