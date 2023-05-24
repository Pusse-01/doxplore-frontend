import { Fragment } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");


  };
  return (
    <footer className="w-full bg-gray-900 pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-ful mx-auto px-4 flex-wrap sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-between">
          <div className="w-32 flex-shrink-0">
            {/* D:\Synacal\Projects\doxplore_frontned\doxplore-frontend\src\assets\logo.png
            D:\Synacal\Projects\doxplore_frontned\doxplore-frontend\src\views\components\footer.js */}
            <img className="" src={require("./../../assets/logo_wh.png")} alt="Synacal Logo" />
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-sm text-gray-400">
              Powered by Synacal
            </p>
            <div className="flex mt-4">
              {/* <a href="#" className="text-gray-400 hover:text-gray-300 mx-3" aria-label="Twitter">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a> */}
              <a href="https://www.facebook.com/profile.php?id=100091130751855" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-3" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/synacal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-3" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="mailto:hello@synacal.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mx-3" aria-label="Email">
                <span className="sr-only">Email</span>
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400 md:text-sm">
            &copy; 2023 Synacal. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 text-base text-gray-400 md:text-sm">
            <a href="#" className="underline">Terms of Service</a>
            {' '}
            &bull;
            {' '}
            <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
