import { useState } from "react";
import Lottie from "react-lottie";
import question from "./assets/question.json";
import accept from "./assets/accept.json";

const App = () => {
  const [yesButtonSize, setYesButtonSize] = useState(20);
  const [noButtonText, setNoButtonText] = useState("No!");
  const [accepted, setAccepted] = useState(false);

  const increaseYesButtonSize = () => {
    setYesButtonSize((size) => size + 10);
  };
  const handleAccepted = () => {
    setAccepted(true);
  };

  const changeNoButtonText = () => {
    const noButtonTextOptions = [
      "No!",
      "Please!",
      "Are you sure?",
      "Do you really want to say no!",
      "Think again!",
      "One time, for me!",
    ];
    const newIndex = Math.floor(Math.random() * noButtonTextOptions.length);
    setNoButtonText(noButtonTextOptions[newIndex]);
    increaseYesButtonSize();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: question,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: accept,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const padding = yesButtonSize;

  return (
    <section className="h-screen flex justify-center overflow-hidden">
      {accepted ? (
        <div>
          <div className="my-10">
            <Lottie options={defaultOptions2} height={400} width={400} />
          </div>
          <h1 className="text-3xl lg:text-5xl text-white font-bold text-center">
            Okay yay!
          </h1>
        </div>
      ) : (
        <div>
          <div className="my-10">
            <Lottie options={defaultOptions} height={400} width={400} />
            <h1 className="text-3xl lg:text-5xl text-primary font-bold text-center">
              Will you be my valentine?
            </h1>
          </div>
          <div
            className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-20 mt-4"
            style={{
              marginBottom: `${yesButtonSize}px`,
            }}
          >
            <button
              className="btn bg-green-gradient font-bold text-white text-xl"
              style={{
                fontSize: `${yesButtonSize}px`,
                padding: `${
                  padding / 2
                }px ${padding}px ${padding}px ${padding}px`,
              }}
              onClick={handleAccepted}
            >
              Yess!
            </button>
            <button
              className="btn bg-red-gradient font-bold text-white text-xl"
              onClick={changeNoButtonText}
            >
              {noButtonText}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
