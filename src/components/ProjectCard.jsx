import {useState} from 'react'

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Card from './Card.jsx';
import EnSubLogo from '../assets/EnSubLogo.png'
import riderReportLogo from '../assets/riderReportLogo.webp'





const imageMap = {
    'riderReportLogo' : riderReportLogo,
    'n/a' : EnSubLogo
}

const ProjectCard = ({children, project, className}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return(
        // <Card className={`bg-gray-100 shadow-xl/10 rounded-2xl p-5 mt-5 ${className}`}>
        //     <div className="flex-none">
        //         <a href={project.link} className="flex-shrink-0">
        //             <img src={imageMap[project.image]} alt="Image" className="w-25 h-25 bg-transparent rounded-xl"/>
        //         </a>
        //     </div>
            
            
        //     <div className="text-left ml-5 w-full">
        //         <div className="flex justify-between items-center w-full font-semibold text-lg">
        //             <a href={project.link} className="hover:underline hover:text-umn-maroon">{project.name}</a>
        //             <p className="text-sm">{project.dates}</p>
        //         </div>
        //         <p className="text-sm font-semibold">{project.techStack}</p>
                
        //         <div className={`transition-all duration-1000 overflow-hidden ${showFullDescription ? 'max-h-[2000px]' : 'max-h-[50px]'}`}>
        //             {children}
        //         </div>
                
                
        //         <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="ml-112">
        //             {showFullDescription ? <IoIosArrowUp className="animate-bounce"></IoIosArrowUp> : <IoIosArrowDown className="animate-bounce"></IoIosArrowDown>}
        //         </button>

        //     </div>
        // </Card>
        
        <Card className={`bg-gray-100 shadow-xl/10 rounded-2xl p-5 mt-5 flex flex-col ${className}`}>
            <div className="flex items-start">
                <a href={project.link} className="flex-none">
                    <img src={imageMap[project.image]} alt="Image" className="w-25 h-25 object-contain bg-transparent rounded-xl" />
                </a>

                {/* {project.image !== 'n/a' && (
                <a href={project.link} className="flex-none">
                    <img 
                    src={imageMap[project.image]} 
                    alt="Project logo" 
                    className="w-25 h-25 object-contain bg-transparent rounded-xl" 
                    />
                </a>
                )} */}

                <div className="flex-1 text-left pl-5">
                    <div className="flex justify-between items-center w-full font-semibold text-lg">
                        <a href={project.link} className="hover:text-umn-maroon hover:underline">
                            {project.name}
                        </a>
                        <p className="text-sm">
                            {project.dates}
                        </p>
                    </div>
                    <p className="font-semibold text-sm">
                        {project.techStack}
                    </p>
                    <p>
                        {project.description}
                    </p>
                </div>
            </div>

            <div className="text-center">
                <div className={`transition-all duration-700 overflow-hidden ${showFullDescription ? 'max-h-[2000px]' : 'max-h-[1px]'}`}>
                    {children}
                </div>

                <button 
                    onClick={() => setShowFullDescription((prevState) => !prevState)} 
                    className="text-center hover:text-umn-maroon">
                    {showFullDescription ? 
                        <IoIosArrowUp className="animate-bounce"/> : 
                        <IoIosArrowDown className="animate-bounce"/>
                    }
                </button>
            </div>
            
        </Card>
        
    );
}

export default ProjectCard;