import { FaCheckCircle } from "react-icons/fa";

const CoinCard = ({ title, price, features }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 transform hover:scale-105 transition-transform duration-300">
      <div className="px-6 py-8">
        <div className="font-bold text-2xl mb-4 text-center">{title}</div>
        <div className="text-center mb-4">
          <span className="text-4xl font-semibold">${price}</span>
          <span className="text-lg text-gray-500">/month</span>
        </div>
        <ul className="text-gray-700 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
