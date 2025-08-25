import React, { useState } from 'react';

import Navbar from "../components/Navbar";
import HomePagePicture from "../components/HomePagePicture";
import snowBoardingPicture from '../assets/snowboardingPicture.jpeg';
import promPicture from '../assets/promPicture.jpeg';
import suitPicture from '../assets/suitPicForProject.jpg';
import pythonLogo from '../assets/pythonLogo.png';
import javaLogo from '../assets/javaLogo.png';
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import cLogo from '../assets/cLogo.png';
import ocamlLogo from '../assets/ocamlLogo.png';
import reactLogo from '../assets/reactLogo.png';
import swiftLogo from '../assets/swiftLogo.png';
import TechPicture from '../components/TechPicture.jsx'
import javaScriptLogo from '../assets/javaScriptLogo.png'
import Footer from '../components/Footer.jsx';
import umnLogo from '../assets/umnLogo.png';
import appIconUMN from '../assets/appIconUMN.jpeg';
import basketballPicture from '../assets/basketballPicture.jpeg';
import pokerPicture from '../assets/pokerPicture.jpeg';
import chessPicture from '../assets/chessPicture.jpeg';
import bikePicture from '../assets/bikePicture.jpeg';
import programmingPicture from '../assets/programmingPicture.jpeg';


const Home = () => {
    const [currentImage, setCurrentImage] = useState(promPicture);

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex pt-30">
                <HomePagePicture file={suitPicture} className="border-7 border-umn-maroon"></HomePagePicture>
                <div className="text-left">
                    <h1 className="text-8xl font-medium ml-9">Hey, I'm Kevin!</h1>
                    <div className="flex mt-2 ml-13 mb-3">
                        <p className="text-4xl font-medium pt-4 ml-11">
                        3rd Year Undergraduate CS Student at
                        </p>
                        <img src={appIconUMN} alt="img" className="flex-shrink-0 h-15 w-15 ml-3 rounded-md mt-2" />
                    </div>
                    <h1 className="text-5xl font-medium text-center"> 
                        Aspiring Software Engineer from Chicago, Illinois
                    </h1>
                    

                    
                </div>
                
                
            </div>
            <div className="mt-10">
                <p className="text-4xl font-semibold mb-5">
                    I have a passion for <p className="text-umn-gold inline">solving problems</p> and <p className="text-umn-maroon inline">developing projects</p> which is why I decided to study Computer Science!
                </p>
                <h1 className="text-4xl mt-10">
                    SKILLS
                </h1>
                <div className="flex mt-5"> 
                    <div className="text-3xl space-y-10 mt-10">
                        <p className="">
                            I am most experienced in languages such as <p className="text-umn-maroon inline font-semibold">Python</p>, <p className="text-umn-gold inline font-semibold">Java</p>, and <p className="text-umn-maroon inline font-semibold">Swift</p> through classes, personal projects, and work experiences.
                        </p>
                        <p className="">
                            I have explored other languages such as <p className="text-umn-maroon inline font-semibold">C</p> and <p className="text-umn-gold inline font-semibold">OCaml</p> in one respective class each.
                        </p>
                        <p>
                            Although I have not taken a class or had any formal instruction on <p className="text-umn-maroon inline font-semibold">HTML</p>, <p className="text-umn-gold inline font-semibold">CSS</p>, <p className="text-umn-maroon inline font-semibold">JavaScript</p>, and <p className="text-umn-gold inline font-semibold">ReactJS</p>, I have taught myself through the help of friends and resources such as YouTube!
                        </p>
                    </div>   

                        
                        <div className="grid grid-cols-3 gap-y-5 w-150 bg-gray-100 rounded-2xl pt-5 pb-5 shadow-xl/5 flex-shrink-0 ml-10">
                            <TechPicture file={pythonLogo} name='Python' className=""></TechPicture>
                            <TechPicture file={javaLogo} name="Java"></TechPicture>
                            <TechPicture file={swiftLogo} name="Swift"></TechPicture>

                        
                            <TechPicture file={cLogo} name="C"></TechPicture>
                            <TechPicture file={ocamlLogo} name="OCaml"></TechPicture>
                            <TechPicture file={htmlLogo} name="HTML"></TechPicture> 

                        
                            <TechPicture file={cssLogo} name="CSS"></TechPicture>
                            <TechPicture file={javaScriptLogo} name="JavaScript"></TechPicture> 
                            <TechPicture file={reactLogo} name="React"></TechPicture> 
                        

                        </div>
                    
                    
                </div>
            
            </div>

            <div className="mt-20">
                <p className="text-4xl font-semibold mb-5">
                    Outside of the classroom, you can find me pursuing some of the following hobbies!
                </p>
                <div className="flex justify-between">
                    <div className="grid grid-cols-4 font-medium text-4xl w-200 h-30">
                        <button className="hover:underline hover:text-umn-maroon cursor-pointer"
                        onClick= {() => setCurrentImage(basketballPicture)}>
                            Basketball
                        </button>
                        <button className="hover:underline hover:text-umn-maroon cursor-pointer"
                        onClick= {() => setCurrentImage(pokerPicture)}>
                            Poker
                        </button>
                        <button className="hover:underline hover:text-umn-maroon cursor-pointer"
                        onClick= {() => setCurrentImage(chessPicture)}>
                            Chess
                        </button>
                        <button className="hover:underline hover:text-umn-maroon cursor-pointer"
                        onClick= {() => setCurrentImage(programmingPicture)}>
                            Programming
                        </button>

                        <button className="hover:underline hover:text-umn-maroon cursor-pointer"
                        onClick= {() => setCurrentImage(bikePicture)}>
                            Biking
                        </button>
                        <button className="hover:underline hover:text-umn-maroon cursor-pointer" 
                        onClick= {() => setCurrentImage(snowBoardingPicture)}>
                            Snowboarding
                        </button>
                        <p></p>


                    </div>
                    <HomePagePicture file={currentImage} className="border-7 border-umn-maroon"></HomePagePicture>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
        
    );
}
export default Home;