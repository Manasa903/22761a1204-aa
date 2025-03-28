import { useState } from "react";
import NumberFetcher from "./NumberList";
import NumberList from "./NumberList";

const Home = () => {
  const [numbers, setNumbers] = useState([]);

  const updateNumbers = (newNumbers) => {
    const uniqueNumbers = [...new Set([...numbers, ...newNumbers])];
    setNumbers(uniqueNumbers.slice(-10));
  };

  return (
    <div className="home-container">
      <h1>Average Calculator</h1>
      <NumberFetcher onUpdate={updateNumbers} />
      <NumberList numbers={numbers} />
    </div>
  );
};

export default Home;