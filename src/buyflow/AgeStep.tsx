import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  return (
    <>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Math.abs(Number(value)));
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => props.cb("age", age)}>Next</button>
    </>
  );
};

export default AgeStep;
