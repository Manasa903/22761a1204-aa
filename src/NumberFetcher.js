import { useState } from "react";
import { fetchNumbers } from "./api";

const NumberFetcher = ({ onUpdate }) => {
  const [type, setType] = useState("prime");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    const numbers = await fetchNumbers(type);
    setLoading(false);
    onUpdate(numbers);
  };

  return (
    <div className="fetch-container">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="prime">Prime</option>
        <option value="fibonacci">Fibonacci</option>
        <option value="random">Random</option>
        <option value="even">Even</option>
      </select>
      <button onClick={handleFetch} disabled={loading}>
        {loading ? "Loading..." : "Fetch Numbers"}
      </button>
    </div>
  );
};

export default NumberFetcher;