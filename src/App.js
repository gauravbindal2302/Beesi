import React from "react";
import "./App.css";

const steps = [
  "Set your goal",
  "Create or Join Group",
  "Pay amount on time",
  "Earn Rewards",
];

export default function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>How It Works</h1>
      </div>
      <div className="app-content">
        {steps.map((step, index) => (
          <div className="step-container" key={index}>
            <div className="ping"></div>
            <div className="steps">
              <img src={`${index + 1}.png`} alt="" />
              <p>Step {index + 1}:</p>
              <p>{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
