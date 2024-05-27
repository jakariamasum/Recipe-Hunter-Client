import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E8604C] text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/md.jakaria.masum.31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/jakariamasum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jakaria-masum-589494278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Recipe Hunter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
