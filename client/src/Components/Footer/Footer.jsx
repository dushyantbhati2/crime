import React from 'react';
import youtube from "../../assets/icons/youtube.jpg";
import instagram from "../../assets/icons/instagram.png";
import github from "../../assets/icons/github.png";
import twitter from "../../assets/icons/twitter.png";
import logo from "../../assets/black signup1.jpeg.jpg";

export default function Footer() {
    return (
        <footer className="bg-white border-y flex flex-col space-y-3 md:space-y-0 md:flex-row h-auto md:h-[200px] w-full justify-around items-center p-4 md:p-0">
            <div className="flex flex-col  gap-4 justify-center w-full md:w-[300px] items-center">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <img src={logo} className="rounded-full w-[50px] h-[50px] mb-2 md:mb-0" alt="Logo" />
                    <h1 className="font-bold text-2xl">SafeZone</h1>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-md">2024 @ SafeZone</p>
                    <p className="text-md">All Rights Reserved</p>
                </div>
            </div>
            <div className="w-full md:w-[300px] mt-4 md:mt-0">
                <ul className="flex flex-col font-semibold gap-3 text-center md:text-left">
                    <li>Map</li>
                    <li>Community</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
                <ul className="flex flex-col font-semibold gap-3 text-center md:text-left">
                    <li>Resources</li>
                    <li>Safety</li>
                    <li>Collaborations & Awareness</li>
                    <li>Emergency Button</li>
                </ul>
            </div>
            <div className="w-full md:w-[300px] flex justify-center md:justify-start gap-4 mt-4 md:mt-0">
                <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                    <img src={youtube} alt="YouTube Icon" className="w-9 h-9" />
                </div>
                <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                    <img src={instagram} alt="Instagram Icon" className="w-9 h-9" />
                </div>
                <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                    <img src={github} alt="GitHub Icon" className="w-9 h-9" />
                </div>
                <div className="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                    <img src={twitter} alt="Twitter Icon" className="w-9 h-9" />
                </div>
            </div>
        </footer>
    );
}
