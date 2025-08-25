import {useState} from 'react'

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



import ECCLogo from '../assets/ECCLogo.png'
import gravityLogo from '../assets/gravityLogo.jpeg'
import Card from './Card'


const imageMap = {
    'ECCLogo.png' : ECCLogo,
    'gravityLogo.jpeg' : gravityLogo
}

const ExpCard = ({children, experience, className='' }) =>{
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    return(
        // <Card className={`bg-gray-100 shadow-xl/10 rounded-2xl p-5 mt-5 ${className}`}>
            
        //         <a href={experience.link} className="flex-shrink-0">
        //             <img src={imageMap[experience.image]} alt="Image" className="w-25 h-25 bg-transparent rounded-xl"/>
        //         </a>
        //         <div className="text-left pl-5 w-full">
        //             <div className="flex justify-between items-center w-full font-semibold text-lg">
        //                 <a href={experience.link} className="hover:text-umn-maroon hover:underline">{experience.company}</a>
        //                 <p className="text-sm">{experience.dates}</p>
        //             </div>
        //             <p className="font-semibold text-lg">{experience.position}</p>





        //             <div className={`transition-all duration-1000 overflow-hidden ${showFullDescription ? 'max-h-[2000px]' : 'max-h-[50px]'}`}>
        //                 {children}
        //             </div>
                    
                    
        //             <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="ml-112">
        //                 {showFullDescription ? <IoIosArrowUp className="animate-bounce"></IoIosArrowUp> : <IoIosArrowDown className="animate-bounce"></IoIosArrowDown>}
        //             </button>
        //         </div>

        // </Card>

        <Card className={`bg-gray-100 shadow-xl/10 rounded-2xl p-5 mt-5 flex flex-col ${className}`}>
            
            {/* Top Row: Image + Title */}
            <div className="flex items-start">
                <a href={experience.link} className="flex-none">
                    <img 
                        src={imageMap[experience.image]} 
                        alt="Image" 
                        className="w-25 h-25 object-contain bg-transparent rounded-xl"
                    />
                </a>

                <div className="flex-1 text-left pl-5">
                    <div className="flex justify-between items-center w-full font-semibold text-lg">
                        <a href={experience.link} className="hover:text-umn-maroon hover:underline">
                            {experience.company}
                        </a>
                        <p className="text-sm">{experience.dates}</p>
                    </div>
                    <p className="font-semibold text-lg">{experience.position}</p>
                    <p>
                        {experience.description}
                    </p>
                </div>
            </div>

            {/* Bottom Row: Job Description under image */}
            <div className="text-center">
                <div className={`transition-all duration-1000 overflow-hidden ${showFullDescription ? 'max-h-[2000px]' : 'max-h-[1px]'}`}>
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

export default ExpCard;