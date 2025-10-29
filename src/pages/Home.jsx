import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-pink-700">Welcome to BMI Calculator</h1>
      <p className="mt-4 text-gray-700">
        Calculate your Body Mass Index to know your fitness category.
      </p>
      <Link
        to="/calculator"
        className="inline-block mt-6 bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500"
      >
        Go to Calculator
      </Link>
    </div>
  );
}

export default Home;
