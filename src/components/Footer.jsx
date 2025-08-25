import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";



const Footer = () =>{
    return(
        <div className="flex mt-15 text-2xl">
            <div className="flex items-center space-x-1">
                <BiLogoGmail className="text-red-700"></BiLogoGmail>
                <a href="mailto:kretzloff04@gmail.com" className="hover:text-umn-maroon hover:underline">kretzloff04@gmail.com</a>
            </div>
            <div className="flex text-blue-500 ml-5 items-center space-x-1">
                <BiLogoLinkedin className=""></BiLogoLinkedin>
                <a href="https://www.linkedin.com/in/kevin-retzloff-/" className="text-black hover:text-umn-maroon hover:underline">LinkedIn</a>
            </div>
            <div className="ml-5 flex items-center space-x-1">
                <FaGithub></FaGithub>
                <a href="https://github.com/kretzloff04" className="hover:text-umn-maroon hover:underline">GitHub</a>
            </div>


        </div>
        
    );
}
export default Footer;