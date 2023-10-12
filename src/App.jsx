import { useState, useEffect } from "react";
import "./App.css";
import { Hearts } from "react-loader-spinner";
import toast from "react-hot-toast";

const App = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowText1(true);
    }, 3000);

    setTimeout(() => {
      setShowText2(true);
    }, 5000);
    setTimeout(() => {
      setShowText3(true);
    }, 8000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedRadio = document.querySelector(
      'input[name="radio-10"]:checked'
    );
    if (selectedRadio) {
      const selectedValue = selectedRadio.value;

      localStorage.setItem("selectedRadio", selectedValue);

      toast.success("ধন্যবাদ বাবুনি, আর আমি তো তোমাকে সবচেয়ে বেশি ভালোবাসি।");
    }
  };

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(null);
  useEffect(() => {
    localStorage.getItem(setValue("selectedRadio"));
  }, []);
  return (
    <div className="mt-[60%] md:mt-[20%]">
      {loading ? (
        <div className="">
          <Hearts
            height="80"
            width="800"
            color="#df1b1b"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {showText1 && (
            <p
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-blue-600 text-transparent bg-clip-text"
              data-aos="fade-right"
            >
              মেহেরুন, আমি চাই তুমি আমাকে তোমার সবটুকু দিয়ে আমাকে ভালবাসো। পারবে
              কি এতটা ভালবাসা দিতে পারতে?
            </p>
          )}
          {showText2 && (
            <p
              className="mt-12 text-xl bg-gradient-to-r from-blue-400 via-red-400 to-blue-600 text-transparent bg-clip-text"
              data-aos="fade-left"
            >
              এই ভালোবাসা তোমাকে পেতে চায়, <br /> ওই দুটি চোখ যেন কিছু বলে যায়।
            </p>
          )}
          {showText3 && (
            <form
              className="mt-32"
              onSubmit={handleSubmit}
              data-aos="fade-bottom"
            >
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    আমি তো তোমাকে আমার সবটুকু দিয়ে ভালোবাসি, আর কত বাসবো!
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-red-500"
                    value="আমি তো তোমাকে আমার সবটুকু দিয়ে ভালোবাসি, আর কত বাসবো!"
                  />
                </label>
              </div>
              <div className="form-control mb-6">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    ঠিক আছে বাবান, আমি তোমাকে আমার সবটুকু ভালোবাসা দিয়ে ভরিয়ে
                    দিব!
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    value="ঠিক আছে বাবান, আমি তোমাকে আমার সবটুকু ভালোবাসা দিয়ে ভরিয়ে দিব!"
                  />
                </label>
              </div>
              <button
                className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl  text-white bg-teal-500 hover:bg-transparent hover:text-teal-400 border-0 border-b-4 border-teal-800 cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default App;
