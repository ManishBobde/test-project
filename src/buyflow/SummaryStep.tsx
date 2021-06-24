import React from "react";
import { Link } from "react-router-dom";

interface SummaryStepProps {
  collectedData: {
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    age: number;
  };
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <div data-testid="summary">
      <div>First Name: {props.collectedData.firstName}</div>
      <div>Last Name: {props.collectedData.lastName}</div>
      <div>Birth Date: {props.collectedData.birthDate}</div>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </div>
  );
};

export default SummaryStep;
