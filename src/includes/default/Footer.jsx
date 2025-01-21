import React from 'react';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import image from '../../images/image.png';

const Footer = () => {
  return (
    <footer className=" text-white py-6 m-0"style={{ backgroundColor: '#043B64' }}>
      <div className=" mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className='ml-16 '>
        <div className="w-52 font-bold flex justify-between items-center ">
        <img src={image}alt="image"/>
        </div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
          </p>
        </div>

        {/* Middle Section */}
        <div className='mt-2 ml-28'>
          <h3 className="text-lg font-semibold mb-2">Important Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='mt-2'>
          <div className='space-y-2'>
          <h3 className="text-sm mb-2">Terms and Conditions</h3>
          <h3 className="text-sm mb-2">Contact Support</h3>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400 border-2 ">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400 border-2">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 border-2">
              <LinkedInIcon />
            </a>
            <a href="#" aria-label="Website" className="hover:text-yellow-400 border-2">
              <LanguageIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-gray-400 mt-6 pt-4 text-center text-sm mx-20">
        <p>Copyright &copy; 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
