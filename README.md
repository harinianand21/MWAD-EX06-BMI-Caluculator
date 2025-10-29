# Ex06 BMI Calculator
## Date: 29/10/2025

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM
Home.jsx
```
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to BMI Buddy 💙</h1>
      <p>Calculate your Body Mass Index easily and know your health category!</p>
      <Link to="/calculator">
        <button>Start Now 🚀</button>
      </Link>
    </div>
  );
}

export default Home;
```
Calculator.jsx
```
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
```
index.css
```
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #cae9ff; /* soft sky blue */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

nav {
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  gap: 40px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

nav a {
  text-decoration: none;
  color: #0077cc;
  font-weight: 600;
  transition: color 0.3s;
}

nav a:hover {
  color: #005fa3;
}

.container {
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 320px;
  margin-top: 100px;
}

h1, h2 {
  color: #004c91;
}

button {
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
}

button:hover {
  background-color: #005fa3;
}

input {
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #bbb;
  margin: 10px 0;
  outline: none;
}

.result-box {
  background-color: #e6f4ff;
  border-radius: 15px;
  padding: 15px;
  margin-top: 15px;
}
```
Navbar.jsx
```
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">BMI Calculator</Link>
    </nav>
  );
}

export default Navbar;
```
main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## OUTPUT
https://harinianand21.github.io/calculator
<img width="1918" height="1028" alt="image" src="https://github.com/user-attachments/assets/1c6204b5-94e7-4680-8482-2acf6b06d008" />

## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
