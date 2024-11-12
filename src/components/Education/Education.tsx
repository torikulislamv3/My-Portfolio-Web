import ScrollAnimation from "react-animate-on-scroll";
import { IoSchool } from "react-icons/io5";

const Education: React.FC = () => {
    return (
        
        <ScrollAnimation animateIn="zoomIn">
            <div id="education" className="mt-32 py-12 bg-transparent min-h-screen border-t-2 border-green-400 rounded-2xl border">
            <div className="container mx-auto px-4 pt-[10%]">
                <h1 className="mx-auto mt-10 font-Wittgenstein border-purple-700 lg:text-5xl text-3xl font-bold text-white mb-2 text-center shadow-slate-400">
                    My Education 🎓
                </h1> 
                <div className="text-gray-300 border-t-2 border-green-500 w-[147px] mx-auto pb-2 mb-10"></div>
                <div className="flex flex-wrap justify-center mt-12 gap-8">
                   <ScrollAnimation animateIn="fadeInLeft">
                   <div className="max-w-md w-full bg-[#131842] font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 text-white rounded-lg overflow-hidden">
                        <p className="text-green-400 mx-auto text-center mt-2">2024-Present</p>
                        <div className="px-4 py-2 flex items-center gap-5 justify-between">
                            <div className="text-4xl text-green-500 mx-auto"><IoSchool /></div>
                            <div>
                                <h1 className="text-xl font-bold font-raleway mt-5 mb-5">DIPLOMA IN ENGINEERING</h1>
                                <h2 className="mb-5">Computer Science & Technology <span className="text-green-500">(Department)</span></h2>
                                <h2 className="mb-5">Rangpur Polytechnic Institute</h2>
                            </div>
                        </div>
                    </div>
                   </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn">
                    <div className="max-w-md w-full bg-[#131842] font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 text-white rounded-lg overflow-hidden">
                        <p className="text-green-400 mx-auto text-center mt-2">2019-2020</p>
                        <div className="px-4 py-2 flex items-center gap-5 justify-between">
                            <div className="text-4xl text-green-500 mx-auto"><IoSchool /></div>
                            <div>
                                <h1 className="text-xl font-bold font-raleway mt-5 mb-5">SECONDARY SCHOOL CERTIFICATE</h1>
                                <h2 className="mb-5">SSC (GPA 4.50 out of 5)</h2>
                                <h2 className="mb-5">AL-HERA INSTITUTE, RANGPUR</h2>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight">
                    <div className="max-w-md w-full bg-[#131842] font-raleway border-2 border-violet-500 shadow-lg shadow-slate-400 text-white rounded-lg overflow-hidden">
                        <p className="text-green-400 mx-auto text-center mt-2">31/12/2023 - 30/10/2024</p>
                        <div className="px-4 py-2 flex items-center gap-5 justify-between">
                            <div className="text-4xl text-green-500 mx-auto"><IoSchool /></div>
                            <div>
                                <h1 className="text-xl font-bold font-raleway mt-5 mb-5">FRESHER MERN STACK DEVELOPER</h1>
                                <h2 className="mb-5">Learning Frontend Development (6 months)</h2>
                                <h2 className="mb-5">Programming Hero</h2>
                            </div>
                        </div>
                    </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    );
};

export default Education;
