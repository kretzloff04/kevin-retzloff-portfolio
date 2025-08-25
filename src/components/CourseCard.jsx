import {useState} from 'react'

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Card from './Card.jsx';
import courses from '../data/courses.json'


const CourseCard = ({children, course, className}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    return(
        <Card className={`bg-gray-100 shadow-xl/10 rounded-2xl p-5 mt-5 ${className}`}>

        </Card>
    );
}

export default CourseCard;