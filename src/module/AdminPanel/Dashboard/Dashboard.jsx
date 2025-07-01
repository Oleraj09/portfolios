import { useEffect, useState } from "react";
import TitleBar from "../../../components/TitleBar";
import StatisticImg from '../../../assets/Statistic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import Post from "../Dashboard/Post";
import Portfolio from "./Portfolio";
import Statistics from "./Statistic";
import Setting from "./settings";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem("activeTab") || "dashboard";
    });
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <Statistics title="Dashboard" />;
            case "post":
                return <Post title="Manage Post" />;
            case "portfolio":
                return <Portfolio title="Manage Portfolio" />;
            case "settings":
                return <Setting title="Site Setting" />;
            default:
                return null;
        }
    };

    const navItems = [
        { key: "dashboard", label: "Dashboard" },
        { key: "post", label: "Manage Post" },
        { key: "portfolio", label: "Manage Portfolio" },
        { key: "settings", label: "Site Settings" },
        { key: "logout", label: "Logout" },
    ];

    return (
        <>
            <TitleBar bgImg={StatisticImg} title="Dashboard" description="Manage Everything from here!" />
            <div className="h-full">
                <div className="container auto-center">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[28px] sm:text-[36px] font-bold">Dashboard</h1>
                        <div className="user text-16px sm:text-[20px]">
                            <FontAwesomeIcon className="text-[18px]" icon={faUserTie} />{" "}
                            <span className="uppercase">Oleraj</span>
                        </div>
                    </div>
                    <hr />
                    <div className="main-body py-10">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Sidebar */}
                            <div className="basis-3/12 flex flex-col gap-y-2 items-center md:items-start">
                                {navItems.map((item) => (
                                    <div
                                        key={item.key}
                                        onClick={() => item.key !== "logout" && setActiveTab(item.key)}
                                        className={`button cursor-pointer py-2 text-center rounded-full text-white md:text-left px-[20px] w-[200px] 
                                            ${activeTab === item.key ? "bg-[#222]" : "bg-[#444]"}`}
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </div>

                            {/* Main Content Area */}
                            <div className="basis-9/12">{renderContent()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
