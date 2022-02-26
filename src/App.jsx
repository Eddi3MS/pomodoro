import { useEffect, useState } from "react";
import { AppStyled } from "./App.styled";

const countdownStart = 25 * 60; // 25 minutos

function App() {
  const [countdownInSeconds, setCountdownInSeconds] = useState(countdownStart);
  const [paused, setPaused] = useState(true);
  const minutes = Math.floor(countdownInSeconds / 60);
  const seconds = countdownInSeconds % 60;

  useEffect(() => {
    if (countdownInSeconds === 0 || paused) {
      return;
    }
    const timer = setTimeout(() => {
      setCountdownInSeconds((currentState) => currentState - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [countdownInSeconds, paused]);

  const restartHandler = () => {
    setCountdownInSeconds(countdownStart);
    setPaused(true);
  };

  return (
    <AppStyled isPaused={paused}>
      <h1>Técnica pomodoro</h1>
      <div className="Timer">
        <span className="light"></span>
        <span>{String(minutes).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
      <div className="Buttons">
        <button onClick={() => setPaused((currentState) => !currentState)}>
          <span className="start">Start</span>
          <span className="pause">Pause</span>
        </button>

        <button onClick={restartHandler}>
          <span className="restart">Restart</span>
        </button>
      </div>
    </AppStyled>
  );
}

export default App;
