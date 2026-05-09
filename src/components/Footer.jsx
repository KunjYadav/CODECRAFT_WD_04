import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter, 
  FaPhone, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 sm:px-16 px-6 border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Section: Brand & Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Left Column: Bio & Socials */}
          <div className="flex flex-col gap-5 md:max-w-sm">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Kunj Yadav.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate Full Stack Web Developer crafting innovative solutions across Frontend & Backend. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-5 mt-2">
              <a href="https://github.com/KunjYadav/" target="_blank" rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kunj-yadav/" target="_blank" rel="noreferrer" 
                className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300 text-2xl"
                aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/KunjYadavRox/" target="_blank" rel="noreferrer" 
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300 text-2xl"
                aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/kunj.yadav555/" target="_blank" rel="noreferrer" 
                className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300 text-2xl"
                aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              Get in Touch
            </h3>
            
            {/* Location */}
            <div className="flex items-start gap-4 text-gray-400">
              <FaMapMarkerAlt className="text-xl mt-1 text-white" />
              <div className="text-sm leading-relaxed">
                <p>Scheme No 78, Indore</p>
                <p>Madhya Pradesh, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300">
              <FaPhone className="text-xl text-white" />
              <a href="tel:+917000584374" className="text-sm font-medium tracking-wide">
                +91 7000584374
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300">
              <MdEmail className="text-xl text-white" />
              <a href="mailto:kunj.yadav555@gmail.com" className="text-sm font-medium tracking-wide">
                kunj.yadav555@gmail.com
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} Kunj Yadav. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;