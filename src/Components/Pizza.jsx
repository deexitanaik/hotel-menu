import React from "react";
import "./Pizza.css";
import { CiSearch } from "react-icons/ci";
import { CiCalendar, CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";


export const Pizza = () => {
    return (
        <div className="main-container">
            <div className="lcontain">
                <div className="logo">
                    <img src="https://i.postimg.cc/s242PTh8/Sami-Shop-Enhanced.png"></img>
                </div>

            </div>
            <div className="head">
                <div className="contents">
                    <div className="search"><CiSearch /></div>
                    
                <div className="icons">
                        <div className="calender"><CiCalendar /></div>
                        <div className="boxer"><CiMail /></div>
                        <div className="notification"><IoIosNotificationsOutline /></div>
                        </div>
                        <div className="profile">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVsZeGi8q4rSDqaAkwAzvWhLz4DzcEWIKNQ&s"></img>
                    </div>
                         <div className="drop"><MdOutlineArrowDropDown /></div>
                         <div className="cd">Search your grocery products etc...</div>
                    

               
            </div>
        </div>
        </div>



    );
};
export default Pizza;

                                                                                            