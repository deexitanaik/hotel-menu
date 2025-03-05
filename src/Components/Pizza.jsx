import React from "react";
import "./Pizza.css";
import { CiSearch } from "react-icons/ci";
import { CiCalendar, CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BsPieChartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { BiSolidCartAdd } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { BsBoxFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { ImFilter } from "react-icons/im";
import { IoIosArrowDropleftCircle ,IoIosArrowDroprightCircle} from "react-icons/io";


export const Pizza = () => {
    return (
        <div className="main-container">
            <div className="lcontain">
                
                <div className="side1">
                    <img src="https://i.postimg.cc/s242PTh8/Sami-Shop-Enhanced.png"></img> </div>

               <div className="icons9">
                    <div className="window"><RxDashboard />
                    <div className="dtitle">Dashboard</div>
                    </div>

                    <div className="Favo"><BsPieChartFill />
                    <div className="ftitle">Categories</div>
                    </div>

                    <div className="Favo"><FaHeart />
                    <div className="ftitle">Favourite</div>
                    </div>

                    <div className="Favo"><BiSolidCartAdd /> 
                    <div className="ftitle">Orders</div>
                    </div>

                    <div className="Favo"><IoChatbubbleEllipses />
                    <div className="ftitle">Messages</div>
                    </div>

                    <div className="Favo"><BsBoxFill />
                    <div className="ftitle">Top Deals</div>
                    </div>

                    <div className="Favo"><IoMdSettings />
                    <div className="ftitle">Settings</div>
                    </div>

                    <div className="out"><IoLogOut />
                    <div className="otitle">Log Out</div>
                    </div>


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
            <div className="subhead">
                <div className="cat">Categories</div>
                 <div className="fbox"><ImFilter />
                 <div className="ftitle">Filter</div>
                 </div>
                 <div className="left"><IoIosArrowDropleftCircle /></div>
                 <div className="right"><IoIosArrowDroprightCircle /></div>
            </div>


            </div>

            
             
           
        </div>



    );
};
export default Pizza;

