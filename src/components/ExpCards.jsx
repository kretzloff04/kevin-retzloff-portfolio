import experiences from '../data/experiences.json';
import ExpCard from './ExpCard.jsx';

const ExpCards = () => {
    return(
        <div className="mt-20">
            <h1 className="text-3xl font-medium"> Experiences</h1>

            {/* <div>
                {experiences.map((experience) => (
                    <ExpCard key={(experience.id)} experience={experience}></ExpCard>
                ))}
            </div> */}
            <div>
                <ExpCard experience={experiences[0]}>
                    {/* <p className="text-center">
                        Everyone Can Code Chicago is a summer employment opportunity for Chicago teenagers to learn the basics of iOS development and entrepreneurship.
                    </p> */}

                    <div className="space-y-2">
                        <p className="font-semibold text-center text-2xl">
                            Program Overview
                        </p>
                        <p>
                            As the position title states, I aided a head instructor in leading a group of 25 students (aged 16 - 22) through a 6-week program that would introduce them to the basics of iOS development. More specifically, the students were given the goal of creating a prototype of an iOS app that they would present to a board of judges that consisted of Apple engineers, Chicago politicians, and the program leaders. My role in ensuring that the students accomplished this goal was primarily on the technical side. As a previous participant of this program (during summer 2024), as well as participating in their App Accelerator program (A 12-week fall program that teaches students to create full stack iOS apps with the goal of having them publish said apps to the App Store), I am able to answer questions and help students in need. In addition to surveying the room and ensuring that students are caught up / don't have questions in the programming lessons, I also was able to step in as the head instructor in times when the head instructor had to miss class due to personal reasons. In addition to not only reinforcing what I was already familiar with from being a participant in these programs, some of the students' app ideas wanted to include implementations / integrations (integrating Apple Health data, Apple Camera and Photos, as well as using the ChatGPT API) that I was not familiar with, which allowed me to expand on what I already knew by doing research outside of class.
                        </p>
                    </div>

                    <div className="mt-5 space-y-2">
                        <p className="text-2xl font-semibold text-center">
                            My Experience as a Student in the Summer Program
                        </p>
                        
                        <p>
                            Although I am currently a TA for this program, just last summer I was a student eager to learn the basics of iOS development. I was put into a group of four where we collaborated and agreed on our prototype named "Juno". Every summer that this program is held, there is a theme that is decided upon that dictates the overall topics of the apps that are developed by the groups of students. In the summer of 2024, the theme was based around safety within a community, which is why Juno was based around the idea of allowing members of the community create posts regarding potential safety concerns within the community, share personal safety tips / classes, as well as a social aspect which can allow users to meet more people within their community. After presenting our project and completing the program, I realized that I really enjoyed the 6 weeks that I spent with my team, but yearned for a more thorough understanding of iOS development. Because of this, I decided to apply for the App Accelerator program that was talked so highly of during the 6 weeks...
                        </p>
                    </div>

                    <div className="mt-5 space-y-2">
                        <p className="text-2xl font-semibold text-center">
                            My Experience as a Student in the App Accelerator Program
                        </p>
                        <p>
                            After finding immense interest in the introduction to iOS development, I was enrolled in the App Accelerator program during the fall semester of my second year at the University of Minnesota. In this program, I was once again put into a group, this time we decided to create our app around the idea of safety on Chicago's CTA trains. More specifically, our app, "Rider Report", was made to allow users to create posts regarding potential issues / crimes that were seen on the CTA. As a firm believer in the use and importance of public transportation, and a daily user to commute to and from high school every single day, I was extremely passionate about bringing the app to production.
                            
                        </p>
                        <p className="mt-2">
                            After a couple of weeks of talking about target users, marketing, and preparing potential screens on Figma, we began developing our app using Swift and Firebase. This was immediately different from the summer program, as the prototype that we produced for Juno essentially only contained a frontend UI. This idea of combining a backend, frontend, and database to create a fullstack app was completely foreign to me at the time, as the the only projects that I had developed thus far were simple terminal apps in my classes. It was a great opportunity to learn about fullstack development and has since inspired me to begin self-learning a web stack to pursue fullstack web development.
                        </p>
                    </div>
                    
                </ExpCard>

                <ExpCard experience={experiences[1]} className="mb-55">
                    {/* <p>
                        gravity is a dating app that was created to match users with friends of friends, ensuring that each potential match is more meaningful than any given person on a dating app.
                    </p> */}

                    <div className="space-y-2">
                        <p className="font-semibold text-xl">
                            My Time at gravity
                        </p>
                        <p>
                            During my time at gravity as an iOS developer, I used my experience from my Rider Report project and my involvement in both Everyone Can Code Chicago programs to develop and tweak iOS software using Swift. More specifically, I primarily worked as a frontend developer while also incorporating quality of life changes to allow for a more seamless experience. I also implemented the option for users to take images within the app as opposed to solely importing images form their camera roll.
                        </p>
                        <p>
                            This was a great experience because it allowed me to not only develop, but also interact and read code from a professionally developed codebase. In addition to just interacting with professionally written code, I also learned the idea of implementing the Agile development methodology of planning, designing, developing, deploying, and reviewing. Because of all of this, my time as an intern at gravity helped me learn how programming is done on a professional app / business. Prior to interning at gravity, the majority of my programming experience was done on amateur projects or in classes at the University of Minnesota.
                        </p>
                    </div>
                    
                </ExpCard>
            </div>
        </div>
    )
}

export default ExpCards;