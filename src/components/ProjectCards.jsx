import projects from '../data/projects.json';
import ProjectCard from './ProjectCard.jsx';
import mapRR from '../assets/RiderReportFeatures/mapRR.png';
import reportingRR from '../assets/RiderReportFeatures/reportingRR.png';
import updatesRR from '../assets/RiderReportFeatures/updatesRR.png';
import mockup1 from '../assets/mockup1.png';
import mockup2 from '../assets/mockup2.png';
import mockup3 from '../assets/mockup3.png';
import mockup4 from '../assets/mockup4.png';



const ProjectCards = () => {
    return(
        <div className="mt-20">
            <h1 className="font-semibold text-3xl">
                Projects
            </h1>
            <ProjectCard project={projects[0]}>


                


                <p className="text-2xl text-center font-semibold">
                    Features
                </p>

                

                <div className="text-center">
                    <p>
                        As seen below, images of Rider Report's most important features are displayed: the map, the reporting screens, and the updates page which not only includes updates from other users, but also statistics regarding the most frequently reported train lines.
                    </p>

                    <div className="flex mt-5">
                        <div className="text-left">
                            <p className="underline text-xl font-semibold">
                                Reporting:
                            </p>
                            <div className="space-y-5">
                                <p>
                                    As seen from the images on the right, the reporting flow is displayed and contains the following order of screens: selecting a line, selecting the type of report, and finally filling out information regarding the report (title, description specific location, tag, priority etc.)
                                </p>
                                <p>
                                    The user is not required to enter all of the information that is requested on the final page of the reporting flow. Because the user had already input the tag and line that they are reporting about in the prior screens, they are only required to input the station that they are making the report about as the title will autofill based on the tag, line, and station. Although the rest of the input fields are extremely helpful in describing the report, they are not required in the case that someone wanted to quickly report an incident.
                                </p>
                               
                            </div>
                            
                        </div>
                        
                        <img src={reportingRR} alt="img" className="w-60 h-60 transition-all hover:w-100 hover:h-100 duration-400"></img>
                     
                    </div>

                    <div className="flex mt-5">
                        <div className="text-left">
                            <p className="underline text-xl font-semibold">Updates:</p>
                            <div className="space-y-5">
                                <p>
                                    As the name suggests, the updates page displays all active reports made from users across the city. You can sort through specific tags, stations, and train lines. This allows for quick searches in the case that there are lots of reports and the user only wants to search under specific conditions. Users can also find more information regarding the reports by clicking on the preview to view things such as the description, location on the map, the date posted, etc.
                                </p>
                                <p>
                                    A seemingly simple yet descriptive preview was designed to display information regarding the reports. The line that the report was made on is represented by its color on the left where the priority level is overlapped on top of the color (assuming the user entered a priority level). The title is displayed to the right of the color and priority level.
                                </p>
                                <p>
                                    In addition to holding all reports made by other users, the updates page also holds information regarding the number of reports made since the app has been published. 
                                </p>
                               
                            </div>
                            
                        </div>
                        
                        <img src={updatesRR} alt="img" className="w-60 h-60 transition-all hover:w-100 hover:h-100 duration-400" />
                     
                    </div>

                    <div className="flex mt-5">
                        <div className="text-left">
                            <p className="underline text-xl font-semibold">The Map:</p>
                            <div className="space-y-5">
                                <p>
                                    The map is an integral part of Rider Report as it allows users (most specifically those who aren't familiar with the location of each individual train station) to obtain a visual representation of where reports are being made. 
                                </p>
                                <p>
                                    In addition to representing the location of each report, the map page also contains a search bar which allows users to search potential destinations to see reports that have been made at nearby train stations. 
                                </p>
                                <p>
                                    When a user clicks onto the pin of an active report, a small menu is displayed that allows the user to open the location in the Apple Maps app, get directions to said location, and even view the surrounding area using Apple Map's street view.
                                </p>
                               
                            </div>
                            
                        </div>
                        
                        <img src={mapRR} alt="pic" className="w-60 h-60 transition-all hover:w-100 hover:h-100 duration-400" />
                     
                    </div>
                    


                       {/* <img src={reportingRR} alt="img" className="w-75 h-75" />
                        <img src={updatesRR} alt="img" className="w-75 h-75" /> */}
                </div>

                <div className="text-center mt-5">
                    <p className="text-2xl font-semibold">
                        Development
                    </p>
                    <p>
                        Rider Report, developed over 12 weeks with  <a href="https://www.linkedin.com/in/alika-nicosia-stone-66266730b/" className="hover:underline text-umn-maroon">Alika Nicosia-Stone</a> and <a href="https://www.linkedin.com/in/jasmine-jacobs-2ab8342bb/" className="hover:underline text-umn-maroon">Jasmine Jacobs</a>, started with prototypes and general planning on <p className="inline font-semibold">Figma</p>. As seen below, some of the first prototypes of how the app was originally envisioned are displayed. 
                    </p>
                    <div className="flex space-x-5 justify-between ml-20 mr-20">
                        <div>
                            <img src={mockup1} alt="asdf" className="w-50 h-100 transform transition-transform duration-400 hover:scale-103" />
                            <p className="text-sm">
                                Reporting #1
                            </p>
                        </div>
                        <div>
                            <img src={mockup2} alt="asdf" className="w-50 h-100 transform transition-transform duration-400 hover:scale-103" />
                            <p className="text-sm">
                                Reporting #2
                            </p>
                        </div>
                        <div>
                            <img src={mockup3} alt="asdf" className="w-50 h-100 transform transition-transform duration-400 hover:scale-103" />
                            <p className="text-sm">
                                Updates
                            </p>
                        </div>
                        
                        <div>
                            <img src={mockup4} alt="asdf" className="w-50 h-100 transform transition-transform duration-400 hover:scale-103" />
                            <p className="text-sm">
                                Map
                            </p>
                        </div>
                        
                    </div>
                    <div className="text-left mt-5">
                        <p className="underline font-semibold text-xl">
                            What remained unchanged?
                        </p>
                        <p>
                            Many things remained unchanged from the original vision and prototypes created and pitched by <a href="https://www.linkedin.com/in/alika-nicosia-stone-66266730b/" className="hover:underline text-umn-maroon">Alika</a>. It is clear that the entire point / purpose of the app remained consistent from the beginning, and most of the changes that were made revolved around polishing / quality of life. Regardless, the most obvious aspects of the UI that remained the same are the overall view of the map, both pages to select the train line and the report's tag, and finally the CTA map as the background.
                        </p>
                    </div>

                    <div className="text-left mt-3">
                        <p className="font-semibold underline text-xl">
                            What did change?
                        </p>
                        <p>
                            Although almost everything as far as the UI did change, the most significant changes were made to the updates page (meant for viewing other users' reports), and the reports page (meant for creating reports). The entirety of the updates page was clearly revamped as not only were sorting features added (sorting by train line, stop, and type of report), but the UI was refined to not only display more information, but also simply appear more appealing. Additionally, the statistics page was created to display information regarding the number of reports made for each line since the app's creation.
                        </p>
                        <p className="mt-3">
                            In addition to the updates page, the report flow was updated to include a page that allows users to include more information about the report which was not included in the initial prototypes. Some of these fields for input included a title, a description, a priority level, and whether the report was made at the station or while on the train. All of these fields were not originally included, as the prototype displayed the idea that only the station and report tag would be included.
                        </p>
                    </div>

                </div>

                <div className="text-center mt-5">
                    <p className="font-semibold text-2xl">
                        What I Learned
                    </p>
                    <p>
                        Developing this app was an amazing opportunity that allowed me to introduce myself to many vital software development concepts. Not only was it great to gain technical experience, but it was also very fun to work in a solely remote group setting with people that I had never met prior to the Everyone Can Code Chicago program (and eventually become friends). As for some programming concepts that I was able to familiarize myself with, this app was the first project that I created that contained a <p className="font-semibold inline">non-terminal UI</p>, <p className="inline font-semibold">CRUD functions from a database</p>, and general fullstack concepts such as <p className="inline font-semibold">file organization</p> and ensuring that code was readable for my group mates.
                    </p>
                </div>
                





            </ProjectCard>
            <ProjectCard project={projects[1]} className="mb-55">
                <div className="text-center">
                    <p className="text-2xl font-semibold">
                        Origins
                    </p>
                    <div className="space-y-3">
                        
                        <p className="">
                            As many other students my age can likely relate, forgetting to delete emails / unsubscribe from senders across many different inboxes (personal, school, work, etc.) can cause emails to pile up rapidly. This can easily result in these inboxes to accumulate over 10,000+ emails in just a short time. After this happens, due to procrastination, long loading times, and having to manually delete emails in chunks, it becomes much harder carry out the process of organizing back to an uncluttered inbox. This results in many people, including myself (prior to EnSub), to accept the idea of living with a full inbox.
                        </p>
                        <div className="text-left">
                            <p className="underline text-xl font-semibold">
                                What is the problem with having an unorganized inbox?
                            </p>    
                            <p>
                                As stated previously, prior to using EnSub, I would often have over 30,000+ emails sitting in over 3+ inboxes. This would not only cause issues with finding both new and old emails (as well as not knowing when I received new important emails), but it would also take up a massive amount of cloud storage causing for new emails to not be processed when a certain limit was reached. Once this limit was reached, I knew that it was time to start clearing.
                            </p>

                        </div>
                        <div className="text-left">
                            <p className="font-semibold underline text-xl">
                                What is the problem with using Gmail to delete emails?
                            </p>
                            <p className="">
                                I quickly realized how tedious it was to manually delete emails through Gmail itself. Not only would loading times cause confusion on the progress of massive deletions (300+ emails at a time), but users can only select up to 50 emails at a time when specifically deleting from a certain sender. This means that users must select 50 emails, click onto the next page, select 50 more emails, and continue the process until all the emails from the specific sender are selected. Including the time it takes to delete the emails on top of just selecting them, this creates an extremely long process that stops users from clearing their inbox.
                            </p>
                            <p className="mt-3">
                                In addition to a slow email deletion process, unsubscribing from senders through Gmail itself is arguably more tiresome ordeal. In addition to having to manually unsubscribe from each and every subscribed sender, it can be unclear when you are subscribed to a sender as the only indicator is displayed at the top of an email sent from a subscribed sender. 
                            </p>
                            <p className="mt-3 underline">
                                How does EnSub solve these problems?
                            </p>
                        </div>

                    </div>
                    <div>
                        <p className="text-2xl font-semibold">
                            Features
                        </p>
                        <div className="space-y-3">
                            <p className="">
                                After running EnSub, you will immediately be redirected to the Google sign-in page where you will enter your Gmail and password. Using the <p className="font-semibold inline">Gmail API</p> to enter users' accounts through OAuth 2.0 ensures that all information is accessed securely. After logging in, the user is brought back to the terminal where they are given the option to view all senders or all subscribed senders.
                            </p>
                            <div className="text-left">
                                <p className="font-semibold underline text-xl">
                                    Mass Deleting Emails
                                </p>
                                <p>
                                    If the user selects to view all senders, a list of every single sender with the number of emails that has been sent by said user is printed. Senders are sorted from the most sent emails to the least sent which allows users to view which senders likely send the most spam / unwanted emails. 
                                </p>
                                <p className="mt-3">
                                    After the senders are displayed, the user is given the option of selecting one of the following three choices...
                                </p>
                                <ul className="ml-5 space-y-2 mt-1">
                                    <li>
                                        1. Selecting a sender to mass delete all emails
                                    </li>
                                    <li>
                                        2. Selecting a sender to mass delete all BUT starred emails
                                    </li>
                                    <li>
                                        3. Return back to selecting between deleting and unsubscribing
                                    </li>
                                </ul>
                                <p className="mt-3">
                                    Assuming that a user selects to actually mass delete from a sender, they are then prompted to enter the email of the sender and the deletion is begun. While the emails are being deleted, updates are printed to inform the user of the progress of the deletion.
                                </p>
                                
                            </div>

                            <div className="text-left">
                                <p className="font-semibold underline text-xl">
                                    Unsubscribing From Senders
                                </p>
                                <p>
                                    Unsubscribing is a very similar process to that of mass deleting. After unsubscribing is selected. When the user selects the unsubscribe option after signing in, a list of every sender they are subscribed to is printed. From there, the user is met with the following choices...
                                </p>
                                <ul className="ml-5 space-y-2 mt-1">
                                    <li>
                                        1. Selecting a subscribed sender to unsubscribe from
                                    </li>
                                    <li>
                                        2. Return back to selecting between deleting and unsubscribing
                                    </li>
                                </ul>
                                <p className="mt-3">
                                    Upon the user selecting 1, selecting a subscribed sender to unsubscribe from, they are then asked to enter the email of the sender that they wish to unsubscribe from.
                                </p>
                            </div>

                            <div className="text-left">
                                <p className="font-semibold text-xl underline">
                                    Future Additions?
                                </p>
                                <p>
                                    In the future, I would like to add / adjust many features.
                                </p>
                                <p className="mt-3">
                                    The most important feature that I would like to look into adding would be the ability to unsubscribe from multiple senders at a time. Although I believe that unsubscribing from senders through EnSub is more efficient than doing so through Gmail itself, through both methods you have to individually unsubscribe. By allowing users to enter multiple emails / indices of the senders that they would like to unsubscribe from this would solidify my belief that using EnSub is truly more efficient.
                                </p>
                                <p className="mt-3">
                                    Similar to the previous potential change, I would also like to add the ability to mass delete from multiple senders at a time. Although it wouldn't make much of a difference in terms of efficiency, it would allow users to queue up multiple senders at a time as opposed to having to enter another email when one mass deletion finishes. Regardless of the change not increasing inherit efficiency, it would be a great quality of life change that would create a smoother user experience.
                                </p>    
                                <p className="mt-3">
                                    Another great quality of life change that would create a more fluid experience would be creating a web-based UI. Again, this change would not increase efficiency but would make using the app more enjoyable.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">
                            What I Learned
                        </p>
                        <div>
                            <p>
                                Creating this project was a great experience as it was not only my first personal project that I had ever developed, but I also gained a lot of technical experience. 
                            </p>
                            <p className="mt-3">
                                I think one of the most foundational / important aspects that I learned was the use of interacting with an <p className="font-semibold inline">API</p>. Prior to this project, I had always heard of APIs, but I never understood how they worked / how to use them, nonetheless what they were. Because of how the core functionality of EnSub revolves around the Gmail API, it was vital that I learned how to use it. The use of the Gmail API allowed me to familiarize myself with setting up APIs / managing keys, reading and implementing important documentation, and integrate API functions with Python programming.
                            </p>
                            <p className="mt-3">
                                In addition to learning how to use APIs, I also learned how to use many important <p className="inline font-semibold">Python</p> libraries such as <p className="inline font-semibold">os</p>, <p className="inline font-semibold">requests</p>, <p className="inline font-semibold">json</p>, <p className="inline font-semibold">time</p>, and more. Learning to implement these libraries has expanded my Python knowledge from understanding basic programming in the language to being able to develop an entire app in it.
                            </p>
                        </div>
                    </div>



                </div>

            </ProjectCard>
        </div>
    );
}

export default ProjectCards;