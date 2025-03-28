const NumberList = ({ numbers }) => {
    const average = numbers.length
      ? (numbers.reduce((acc, num) => acc + num, 0) / numbers.length).toFixed(2)
      : 0;
  
    return (
      <div className="list-container">
        <h2>Numbers:</h2>
        <p>{numbers.join(",") || "No numbers yet"}</p>
        <h3>Average: {average}</h3>
      </div>
    );
  };
  
  export default NumberList;