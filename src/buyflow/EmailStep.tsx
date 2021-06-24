import React, { useState } from "react";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const validateEmail = (value: string) => {
    const pattern = new RegExp(/(.+)@(\w+)\.(\w+)$/);
    const validEmailValue = pattern.test(value);
    validEmailValue ? setValidEmail(true) : setValidEmail(false);
    !validEmailValue && alert("please enter a valid email");
  };
  return (
    <>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          value={email}
          onBlur={(e) => validateEmail(e.target.value)}
        ></input>
      </div>
      <button disabled={!validEmail} onClick={() => props.cb("email", email)}>
        Next
      </button>
    </>
  );
};

export default EmailStep;
