import { faMarsAndVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
    return (
        <>
            <div className="bg-[#f8f8f8]">
                <div id="about" className="container auto-center">
                    <div className="flex flex-col sm:flex-row w-full">
                        <div className="sm:basis-5/12">
                            <h1>About Me</h1>
                            <p>WordPress developer skilled in React and Laravel. I create custom, responsive websites and apps with clean code, delivering efficient solutions tailored to client needs.</p>
                        </div>
                        <div className="sm:basis-2/12text-center">
                            <FontAwesomeIcon icon={faMarsAndVenus}></FontAwesomeIcon>
                            <h1>Available</h1>
                            <p>Available for work — expert WordPress, React, and Laravel developer.</p>
                            <div className="headshots">
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="sm:basis-5/12">
                            <div className="headshots">
                                <img src="" alt="" />
                            </div>
                            <p>➤ Hi</p>
                            <p>➤ Hi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMe;