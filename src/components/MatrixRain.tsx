import { useState, useEffect } from "react";

const MatrixRain = () => {
  const [chars, setChars] = useState<Array<{ char: string; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generateChars = () => {
      const newChars = [];
      const characters = '01アイウエオカキクケコサシスセソタチツテト';
      
      for (let i = 0; i < 30; i++) {
        newChars.push({
          char: characters[Math.floor(Math.random() * characters.length)],
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 5
        });
      }
      setChars(newChars);
    };

    generateChars();
    const interval = setInterval(generateChars, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-rain">
      {chars.map((item, idx) => (
        <span
          key={idx}
          className="matrix-char"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
};

export default MatrixRain;
