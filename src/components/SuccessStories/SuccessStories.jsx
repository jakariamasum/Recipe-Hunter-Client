import CountUp from "react-countup";
import { FaUtensils, FaUsers } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Success Stories
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Join thousands of happy users who have transformed their cooking
          experience with our system.
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <FaUtensils className="text-6xl text-white mb-4 animate-bounce" />
            <div className="text-5xl font-bold text-white">
              <CountUp end={1500} duration={3} />
            </div>
            <div className="mt-2 text-lg text-gray-100">Recipes</div>
          </div>
          <div className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <FaUsers className="text-6xl text-white mb-4 animate-bounce" />
            <div className="text-5xl font-bold text-white">
              <CountUp end={12000} duration={3} />
            </div>
            <div className="mt-2 text-lg text-gray-100">Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
