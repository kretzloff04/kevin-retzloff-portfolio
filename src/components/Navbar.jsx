

const Navbar = () =>{
    return(
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-medium">Kevin Retzloff</h1>
            <div className="space-x-20">
                <a href="../../public/about.html" className="text-black hover:text-umn-maroon hover:underline">Home</a>

                <a href="../../public/experience.html" className="text-black hover:text-umn-maroon hover:underline">Experience</a>

                <a href="../../public/projects.html" className="text-black hover:text-umn-maroon hover:underline">Projects</a>

            </div>


        </div>
    );
};

export default Navbar;