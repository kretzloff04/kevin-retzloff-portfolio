
const HomePagePicture = ({ file, className }) =>{
    
    return(
        <img src={file} alt="404" className={`h-75 w-75 rounded-2xl ${className || ''}`} />
    )
}

export default HomePagePicture;