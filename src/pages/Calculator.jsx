import { useState } from "react";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);

      let cat = "";
      if (bmiValue < 18.5) cat = "Underweight 🩻";
      else if (bmiValue < 24.9) cat = "Normal weight 💪";
      else if (bmiValue < 29.9) cat = "Overweight 🍔";
      else cat = "Obesity ⚠️";

      setCategory(cat);
    }
  };

  return (
    <div className="container">
      <h2>BMI Calculator 💙</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>

      {bmi && (
        <div className="result-box">
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
