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

      toast.success("আমি তোমার জন্য সবসময় প্রস্তুত, তুমি শুধু আসো আমার পাশে");
    }
  };

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
              সুমাইয়া, কালকে প্রাইভেট বাঙ্ক করো প্লিজ, চলো না কোথাও যাই শুধু
              তুমি আর আমি।
            </p>
          )}
          {showText2 && (
            <p
              className="mt-12 text-xl bg-gradient-to-r from-blue-400 via-red-400 to-blue-600 text-transparent bg-clip-text"
              data-aos="fade-left"
            >
              চলো না ঘুরে আসি অজানাতে, <br /> যেখানে নদী এসে থেমে গেছে।
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
                    কালকে পর্যন্ত অপেক্ষা করতে পারব না, এখনই চলো
                  </span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-red-500"
                    value="কালকে পর্যন্ত অপেক্ষা করতে পারব না, এখনই চলো"
                  />
                </label>
              </div>
              <div className="form-control mb-16">
                <label className="label cursor-pointer">
                  <span className="label-text">চলো না হারিয়ে যাই, দুজনে!</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    value="চলো না হারিয়ে যাই, দুজনে!"
                  />
                </label>
              </div>
              <button
                className="mt-6 font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-sm rounded-xl  text-white bg-teal-500 hover:bg-transparent hover:text-teal-400 border-0 border-b-4 border-teal-800 cursor-pointer"
                type="submit"
                data-aos="fade-up"
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
