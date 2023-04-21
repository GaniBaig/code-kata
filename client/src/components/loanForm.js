import React, { useState } from "react";
import styled from "styled-components";

const LoanForm = () => {
  // Initialize state variables for form fields and validation errors
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [provider, setProvider] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "Business name is required";
    }
    if (!year) {
      validationErrors.year = "Year established is required";
    }
    if (!loanAmount) {
      validationErrors.loanAmount = "Loan amount is required";
    } else if (isNaN(loanAmount) || parseInt(loanAmount) <= 0) {
      validationErrors.loanAmount = "Loan amount must be a positive number";
    }
    if (!provider) {
      validationErrors.provider = "Accounting software provider is required";
    }
    // Update validation errors state variable
    setErrors(validationErrors);
    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
        fetch('http://localhost:3001/loan-application', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, year, loanAmount, provider }),
        })
          .then((response) => {
            if (response.ok) {
              // Clear form fields and display success message
              setName('');
              setYear('');
              setLoanAmount('');
              setProvider('');
              setErrors({});
              setSuccess(true);
            } else {
              // Display error message if submission is unsuccessful
              throw new Error('Submission failed');
            }
          })
          .catch((error) => console.error(error));
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <LabelComponent htmlFor="name">Business Name</LabelComponent>
        <div>
          <TextInput
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your business name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </div>
      <div>
        <LabelComponent htmlFor="year">Year Established</LabelComponent>
        <div>
          <TextNumberInput
            type="number"
            id="year"
            name="year"
            value={year}
            placeholder="Enter year of business established"
            onChange={(event) => setYear(event.target.value)}
          />
        </div>
        {errors.year && <ErrorMessage>{errors.year}</ErrorMessage>}
      </div>
      <div>
        <LabelComponent htmlFor="loanAmount">
          Requested Loan Amount
        </LabelComponent>
        <div>
          <TextNumberInput
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={loanAmount}
            placeholder="Enter your loan amount"
            onChange={(event) => setLoanAmount(event.target.value)}
          />
        </div>
        {errors.loanAmount && <ErrorMessage>{errors.loanAmount}</ErrorMessage>}
      </div>
      <div>
        <LabelComponent htmlFor="provider">
          Accounting Software Provider
        </LabelComponent>
        <div>
          <SelectInput
            id="provider"
            name="provider"
            value={provider}
            onChange={(event) => setProvider(event.target.value)}
          >
            <option value="">Select provider</option>
            <option value="Xero">Xero</option>
            <option value="MYOB">MYOB</option>
          </SelectInput>
        </div>
        {errors.provider && <ErrorMessage>{errors.provider}</ErrorMessage>}
      </div>
      <FormButton type="submit">Submit</FormButton>
    </form>
  );
};

// Styles

const LabelComponent = styled.label`
  color: grey;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: bold;
`;

const TextInput = styled.input.attrs({
  type: "text",
})`
  padding: 5px;
  width: 225px;
  border: 1px solid #aaa;
  border-radius: 5px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #999;
  font-size: 15px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;

const TextNumberInput = styled.input.attrs({
  type: "number",
})`
  padding: 5px;
  width: 225px;
  border: 1px solid #aaa;
  border-radius: 5px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #999;
  font-size: 15px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;

const SelectInput = styled.select`
  padding: 5px;
  width: 225px;
  border: 1px solid #aaa;
  border-radius: 5px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #999;
  font-size: 15px;
  height: 50px;
  padding-left: 5px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`;
const FormButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  background-color: #0077ff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0059b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077ff;
  }
`;

export default LoanForm;
