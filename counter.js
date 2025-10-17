import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React Counter</h1>
      <p style={styles.countValue}>{count}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.incrementBtn} onClick={handleIncrement}>
          Increment
        </button>
        <button style={styles.decrementBtn} onClick={handleDecrement}>
          Decrement
        </button>
        <button style={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  countValue: {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#4A90E2",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  incrementBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  decrementBtn: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  resetBtn: {
    backgroundColor: "#555",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;
