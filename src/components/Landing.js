
import { useState, useEffect } from "react";

function TextDisplay() {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setShowText(true);
  };

  useEffect(() => {
    if (showText) {
      const timerId = setTimeout(() => {
        setShowText(false);
        setText("");
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [showText]);

  const slicedText = showText ? text.slice(0, Math.random() * text.length) : '';

  return (
    <div className="text-display-container">
      <input
        type="text"
        className="text-display-input"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "blue",
          color: " white",
          borderRadius: "50px",
          border: " none",
          padding: "5px",
        }}
      >
        Show Text
      </button>
      <div className={`text-display-text ${showText ? "show" : ""}`}>
        {slicedText}
      </div>
    </div>
  );
}

export default TextDisplay;