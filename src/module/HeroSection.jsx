import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
    return (
        <>
            <div className="h-[100vh] bg-[#f8f8f8] bg-ole" id="home">
                <div className="relative h-[80vh] center-top-bottom">
                    <div className="relative h-full container auto-center">
                        <div className="relative h-[75vh] left-0 top-[10%] left-line">
                            <p className="designation absolute top-10 left-0">Web Developer</p>
                            <div className="seperator"></div>
                            <p className="year absolute bottom-10 left-0">{new Date().getFullYear()}</p>
                        </div>
                        <div className="absolute top-[10%] announcement  gap-y-[20px] sm:gap-y-[40px] flex flex-col">
                            <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[60px]">
                                <div className="total-project">
                                    <p className="number text-[35px] font-bold text-center sm:text-left">15 +</p>
                                    <p className="text whitespace-nowrap break-normal text-[20px] text-center sm:text-left">Project Completed</p>
                                </div>
                                <div className="ongoing-project">
                                    <p className="number text-[35px] font-bold text-center sm:text-left">2 </p>
                                    <p className="text whitespace-nowrap break-normal text-[20px] text-center sm:text-left">Project Ongoing</p>
                                </div>
                            </div>
                            <div className="say-hello flex flex-col">
                                <h1 className="hello text-[75px] sm:text-[120px] text-center sm:text-left">Hello</h1>
                                <p className="text-center sm:text-left">— Wordpress Developer! Also React and Laravel Expert.</p>
                            </div>
                        </div>
                        <div className="absolute scroll-btn bottom-[0px]">
                            <a href="#about">
                                <button className="flex items-center gap-[10px] cursor-change">
                                    <p className="text whitespace-nowrap break-normal text-[20px]">Scroll Down </p>
                                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;