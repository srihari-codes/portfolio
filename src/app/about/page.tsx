"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "srihari221122@gmail.com",
    href: "mailto:srihari221122@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/srihari-codes",
    content: "/srihari-codes",
    icon: <FaGithub height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/iamsrihari",
    content: "/in/iamsrihari",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 9962408595",
    href: "tel:+919962408595",
    icon: <FaPhone height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    icon: "/icons/python.svg",
    color: "#3776AB",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: "/icons/express.svg",
    color: "#000000",
  },
  {
    name: "SQLite",
    icon: "/icons/sqlite.svg",
    color: "#003B57",
  },
  {
    name: "Kali Linux",
    icon: "/icons/kali.svg",
    color: "#5E9CC6",
  },
  {
    name: "BurpSuite",
    icon: "/icons/burp.svg",
    color: "#F39C12",
  },
  {
    name: "Git / GitHub",
    icon: "/icons/github.svg",
    color: "#181717",
  },
  {
    name: "VMware",
    icon: "/icons/vmware.svg",
    color: "#0078D7",
  },
  {
    name: "Windows 11",
    icon: "/icons/windows.svg",
    color: "#0078D7",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <Image
                  src="/assets/profile-placeholder.jpg"
                  alt="Srihari profile"
                  width={200}
                  height={200}
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800 object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Srihari</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Cybersecurity & Full-Stack Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              I’m Srihari — a Computer Engineering undergraduate specializing in
              Cybersecurity and Full-Stack Development. I design pragmatic
              backend systems (Node.js/Express/SQLite), automate repetitive
              tasks with Python, and conduct ethical hacking and vulnerability
              research using Kali Linux and BurpSuite. My hands-on experience
              spans AI, automation, and backend logic — from building a gig-work
              platform (Hustlefy) to creating a temporary ID-based anonymous
              messaging system. I’m constantly exploring the intersection of
              software engineering and security.
            </p>
            <p className="mb-10">
              When I’m not shipping production-ready code, you’ll catch me
              diving into CTFs, refining backend architectures,
              reverse-engineering attack paths, contributing to open-source
              tooling, or experimenting with AI/ML workflows that make security
              teams faster and smarter.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="w-fit p-3 border rounded-md bg-zinc-900/40 flex flex-col items-center gap-2"
                        style={{ borderColor: tool.color }}
                      >
                        <Image
                          src={tool.icon}
                          alt={`${tool.name} icon`}
                          width={48}
                          height={48}
                          className="h-12 w-12"
                        />
                        <span className="text-xs text-zinc-400">
                          {tool.name}
                        </span>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
