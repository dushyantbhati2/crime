import React from 'react'
// import { Link } from 'react-router-dom';
import youtube from "../../assets/icons/youtube.jpg"
import instagram from "../../assets/icons/instagram.png"
import github from "../../assets/icons/github.png"
import twitter from "../../assets/icons/twitter.png"
import logo from "../../assets/black signup1.jpeg.jpg"
export default function Footer() {
    return (
        <footer className="bg-white border-y flex h-[200px] w-full justify-around items-center">
            <div className="flex flex-col gap-4 justify-center w-[300px] items-center">
                <div className="flex flex-col justify-center items-start mr-5 ">
                <img src={logo} className="rounded-full w-[50px] h-[50px]"/>
                <h1 className="font-bold text-2xl ">SafeZone</h1>
                </div>
                <div>
                <p className="text-md">2024 @ SafeZone</p>
                <p className="text-md"> All Rights Reserved</p>
                </div>
            </div>
            <div className="w-[300px]">
                <ul className="flex flex-col font-semibold gap-3">
                <li>Map</li>
                <li>Community</li>
                <li>About us</li>
                <li>Contact us</li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col font-semibold gap-3">
                <li>Resources</li>
                <li>Safety</li>
                <li>Colloborations & Awareness</li>
                <li>Emergency Button</li>
                </ul>
            </div>
            <div className="w-[300px] flex h-[150px] items-end gap-4">
            <div class="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                <img src={youtube} alt="Lock Icon" class="w-9 h-9" />
              </div>
              <div class="flex justify-center items-center bg-white w-16 h-16 rounded-full ">
                <img src={instagram} alt="Lock Icon" class="w-9 h-9" />
              </div>
              <div class="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                <img src={github} alt="Lock Icon" class="w-9 h-9" />
              </div>
              <div class="flex justify-center items-center bg-white w-16 h-16 rounded-full">
                <img src={twitter} alt="Lock Icon" class="w-9 h-9" />
              </div>
            </div>
        </footer>
    );
}