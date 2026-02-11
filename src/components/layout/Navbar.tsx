"use client";

// Next & React
import Link from "next/link";
import { useState } from "react";
// React Icons
import { FiFacebook, FiInstagram  } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
// Local Components
import Logo from "../common/Logo"
import { Button } from "../common/Button";
// Data
import { sections, SOCIALS } from "@/data/navbar";
import SombreroPattern from "../ui/SombreroPattern";

export default function Navbar() {

    // State Management
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-50 w-full py-6  px-4 flex items-center justify-center bg-primary text-foreground font-bold overflow-hidden">
  
            <Logo className=""/>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex flex-row  items-center space-x-8 mx-auto relative z-10 pr-[10%]">
                {sections.map((link) => (
                <li key={link.id}>
                    <Link
                        href={link.href}
                        className="p-2 transition-all duration-200  hover:opacity-80 hover:border-b text-nowrap"
                    >
                        {link.label}
                    </Link>
                </li>
                ))}
                <li>
                    <Link 
                        href={SOCIALS["facebook"]}
                        className="p-2 transition-all duration-200 hover:opacity-80">
                        <FiFacebook size={24} />
                    </Link>
                </li>
                <li>
                    <Link 
                        href={SOCIALS["instagram"]}
                        className="p-2 transition-all duration-200 hover:opacity-80">
                        <FiInstagram  size={24} />
                    </Link>
                </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="block lg:hidden ml-auto p-2 cursor-pointer relative z-10 pr-[10%]">
                {open ? (
                    <IoClose size={24} onClick={() => setOpen(false)} />
                ) : (
                    <BsList size={24} onClick={() => setOpen(true)} />
                )}
            </div>

            {/* Right color split (md+) */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[10%] flex z-0">
                <div className="w-1/2 bg-secondary" />
                <div className="w-1/2 bg-tertiary" />
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                lg:hidden block fixed top-26 md:top-24 left-0 z-40 w-full px-24
                bg-light/50 backdrop-blur-md
                transition-all duration-300
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
                `}
            >
                <SombreroPattern/>
                <div className="relative z-10">
                    <ul className="flex flex-col border-b">
                    {sections.map((link) => (
                        <li
                            key={link.id}
                            className="
                                py-5
                                text-foreground
                                cursor-pointer
                                transition-colors duration-200
                                whitespace-nowrap
                            "
                            >
                            <Link href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    </ul>
                    <div className="flex flex-row space-x-4  py-6">
                        <Link 
                            href={SOCIALS["facebook"]}
                            className="p-2 transition-all duration-200 hover:opacity-80">
                            <FiFacebook size={24} />
                        </Link>
                        <Link 
                            href={SOCIALS["instagram"]}
                            className="p-2 transition-all duration-200 hover:opacity-80">
                            <FiInstagram  size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
