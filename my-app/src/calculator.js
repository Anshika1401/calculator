
import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        // Handle equals operation
        if (value === '=') {
            try {
                setResult(eval(input)); // Calculate result
            } catch (error) {
                setResult('Error'); // Handle invalid expressions
            }
            setInput(''); // Clear input after calculation
        } else if (value === 'C') {
            setInput(''); // Clear input
            setResult(''); // Clear result
        } else {
            setInput((prev) => prev + value); // Append clicked value to input
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['4', '5', '6', '*'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['1', '2', '3', '-'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['0', '.', '=', '+', 'C'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
