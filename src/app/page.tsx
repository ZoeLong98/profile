"use client";
import Link from "next/link";
import Image from "next/image";
import { patrickHandSc, Inria } from "../utils/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FlowerAnimation, sendEmail } from "../utils/function";
import Instruction from "../components/instruction";
import BasicIntroduction from "../components/basicIntroduction";
import { div } from "framer-motion/client";

export default function PersonalInformation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleFlowers = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };
  return (
    <div className="p-7 flex flex-col lg:flex-row items-center justify-center min-h-screen w-full text-white space-x-36 lg:mx-16">
      <div className="flex flex-col items-center justify-center my-6">
        <div className="relative w-44">
          <div className="absolute top-0 left-0 w-full">
            <FlowerAnimation isVisible={isVisible} />
          </div>

          <Image
            src={"/images/me.jpg"}
            width={160}
            height={160}
            className="rounded-full"
            alt="Zoe Long"
          ></Image>
        </div>
        <h1
          className={`${patrickHandSc.className} text-5xl font-bold mt-3 z-10`}
        >
          Zoe Long
        </h1>
        <br />
        <div className="flex flex-row justify-between items-center mb-5 space-x-4">
          <a href="https://www.instagram.com/zeyulong0908/">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>

          <a href="https://github.com/ZoeLong98">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>

          <a href="https://www.linkedin.com/in/zeyu-long-13753a324/">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>

          <div onClick={sendEmail}>
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-center w-40">
          <button
            className={`${Inria.className} bg-gray-700 py-1 px-2 rounded text-2xl `}
            onClick={toggleFlowers}
          >
            Click me
          </button>
        </div>
      </div>
      <div className="flex items-center lg:max-w-3xl w-full">
        <BasicIntroduction />
      </div>
    </div>
  );
}
