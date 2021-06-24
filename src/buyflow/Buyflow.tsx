import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";
import FirstNameStep from "./FirstNameStep";
import LastNameStep from "./LastNameStep";
import BirthDateStep from "./BirthDateStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins",
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance",
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("firstName");
  const [collectedData, updateData] = useState({
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    email: "",
    age: 0,
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    if (!value) {
      alert(`Please enter ${field}`);
    } else {
      updateData({ ...collectedData, [field]: value });
      setStep(nextStep);
    }
  };
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "firstName" && (
        <FirstNameStep cb={getStepCallback("lastName")} />
      )) ||
        (currentStep === "lastName" && (
          <LastNameStep cb={getStepCallback("birthDate")} />
        )) ||
        (currentStep === "birthDate" && (
          <BirthDateStep cb={getStepCallback("email")} />
        )) ||
        (currentStep === "email" && (
          <EmailStep cb={getStepCallback("age")} />
        )) ||
        (currentStep === "age" && (
          <AgeStep cb={getStepCallback("summary")} />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  );
};

export default Buyflow;
