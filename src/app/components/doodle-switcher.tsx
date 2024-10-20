"use client";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";

const doodles = [
  {
    src: "/images/doodles/doodle1.png",
    title: '"Little Guys", by Aileen Luo',
  },
  {
    src: "/images/doodles/doodle2.png",
    title: '"Project Block"',
  },
  // {
  //   src: "images/doodles/doodle3.png",
  //   title: `"Aileen's Worst Nightmare", by Jake Rudolph`,
  // },
  {
    src: "/images/doodles/doodle4.png",
    title: '"MS Paint", by HudZah',
  },
  {
    src: "/images/doodles/socratica-big.svg",
    title: "Big Socratica Doodle",
  },
  //   {
  //     src: "images/doodles/doodle5.png",
  //     title: '"Socratica Block Letters"',
  //   }
];

const MobileContent = ({ switchDoodle, currentDoodle }: any) => {
  return (
    <div className="absolute top-2 left-2">
      <button
        onClick={switchDoodle}
        className="absolute inset-0 opacity-0 cursor-pointer"
        aria-label="Switch doodle"
      />

      <Image
        id="socraticaLogo"
        src={currentDoodle.src}
        alt={currentDoodle.title}
        // className="h-[80px] w-auto object-contain"
        width={150}
        height={150}
        quality={100}
        priority
      />
    </div>
  );
};

const DesktopContent = ({ switchDoodle, currentDoodle }: any) => {
  return (
    <div className="flex flex-col items-center relative -mb-24 md:mb-0 -mt-16 md:mt-0">
      <button
        onClick={switchDoodle}
        className="absolute inset-0 opacity-0 cursor-pointer"
        aria-label="Switch doodle"
      />

      <Image
        id="socraticaLogo"
        src={currentDoodle.src}
        alt={currentDoodle.title}
        className="h-[325px] w-auto object-contain"
        height={325}
        width={325}
        quality={100}
        priority
      />

      {/* <div className="w-full flex flex-col items-end mt-8 mr-16">
        <p className="font-mono text-[8px] md:text-sm text-[#706F6B]">
          CURRENT ART
        </p>
        <p className="font-graphik text-right text-[10px] md:text-sm">
          {currentDoodle.title}
        </p>
      </div> */}
    </div>
  );
};

export default function DoodleSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * doodles.length));
  }, []);

  const switchDoodle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doodles.length);
  };

  const currentDoodle = doodles[currentIndex];

  return (
    <>
      {isMobile ? (
        <MobileContent
          switchDoodle={switchDoodle}
          currentDoodle={currentDoodle}
        />
      ) : (
        <DesktopContent
          switchDoodle={switchDoodle}
          currentDoodle={currentDoodle}
        />
      )}
    </>
  );
}
