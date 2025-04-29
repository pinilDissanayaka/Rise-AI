"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { heading1, heading2 } from "../../../../fonts/font";

const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

type Props = {};

const Clients = (props: Props) => {
  return (
    <motion.div
      className="max-w-[1280px] w-full px-6 sm:px-12 lg:px-24 xl:px-32 my-12 flex flex-col items-center text-center 
                 border-2 border-[#00f0ff] rounded-xl 
                 shadow-[0_0_20px_#00f0ffcc] p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Top Divider */}
      {/* <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "40px" }}
        transition={{ delay: 0.2 }}
        className="h-[40px] mt-6 mb-6 w-[3px] rounded-md bg-[#00f0ff]"
      ></motion.div> */}

      {/* Heading */}
      <div className="w-full mb-12">
        <motion.h3
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          viewport={{ once: false }}
          className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white"
        >
          <p className={`text-[#939aff] ${heading1.className}`}>Our Clients</p>
          <span
            className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}
          >
            Trust with Reliability and Excellence
          </span>
        </motion.h3>
      </div>

      {/* Logos */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-[1000px]">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="flex flex-col items-center md:max-w-60 max-w-32 gap-4"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5"
                width={40}
                height={40}
              />
              <Image
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
                height={company.id === 4 || company.id === 5 ? 100 : 150}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      {/* <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "40px" }}
        transition={{ delay: 0.2 }}
        className="h-[40px] mt-6 w-[3px] rounded-md bg-[#00f0ff]"
      ></motion.div> */}
    </motion.div>
  );
};

export default Clients;
