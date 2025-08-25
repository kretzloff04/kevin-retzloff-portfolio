

const TechPicture = ({ file, name, className }) => {
    return(
        <div className="group bg-gray-200 shadow-xl/5 rounded-2xl w-fit mx-auto px-8 py-4 transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-gray-300 border border-umn-maroon border-3">
            <img src={file} alt="404" className={`block mx-auto h-25 w-25 rounded-2xl ${className || ''}`} />
            <p className="text-umn-maroon text-lg font-semibold opacity-0 transition duration-500 group-hover:opacity-100">{name}</p>
        </div>
        
    );
    
}

export default TechPicture