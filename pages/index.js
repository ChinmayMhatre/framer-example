import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import Card from "../components/Card";


export default function Home() {
    

    const [active, setActive] = useState(0);
    const [background, setBackground] = useState("bg-gradient-to-r from-[#001850] to-[#000] transition-all duration-300");

    useEffect(() => {
        if(active === 0) {
            setBackground("bg-gradient-to-r from-[#001850] to-[#000] transition duration-300")
        }
        if(active === 1) {
            setBackground("bg-gradient-to-r from-[#0F2027] to-[#2C5364] transition duration-300")
        }
        if(active === 2) {
            setBackground("bg-gradient-to-r from-[#2E0604] to-[#0000] transition duration-300")
        }
        if(active === 3) {
            setBackground("bg-gradient-to-r from-[#010F33] to-[#0000] transition duration-300")
        }
    }, [active])

    return (
        <div className="bg-black font-DMSans transition duration-300">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="A template for nextjs with tailwindcss"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${background} relative p-10 transition  duration-300 `}>
                <div className="flex flex-col p-5 justify-between  h-screen fixed top-0 left-0">
                    <h1 className="text-8xl p-0 m-0 text-white font-bold">
                        Indx.
                    </h1>
                    <div className="text-2xl text-white ">
                        <Link  to="imageOne" spy={true} smooth={true} className="flex items-center gap-2 cursor-pointer ">
                            {" "}
                            <span>
                                <hr className={active === 0 ? "w-[20px] border-[1px] transition-all duration-150": "w-[2px] border-1 transition-all duration-150"} />
                            </span>
                            Boreas
                        </Link>
                        <Link   to="imageTwo" spy={true} smooth={true} className="flex items-center gap-2 cursor-pointer">
                            {" "}
                            <span>
                            <hr className={active === 1 ? "w-[20px] border-[1px] transition-all duration-150": "w-[2px] border-1 transition-all duration-150"} />
                            </span>
                            Zephryos
                        </Link>
                        <Link  to="imageThree" spy={true} smooth={true} className="flex items-center gap-2 cursor-pointer">
                            {" "}
                            <span>
                            <hr className={active === 2 ? "w-[20px] border-[1px] transition-all duration-150": "w-[2px] border-1 transition-all duration-150"} />
                            </span>
                            Noptos
                        </Link>
                        <Link  to="imageFour" spy={true} smooth={true} className="flex items-center gap-2 cursor-pointer">
                            {" "}
                            <span>
                            <hr className={`${active === 3 ? "w-[20px] border-[1px] ": "w-[2px] border-1"} transition-all duration-150`} />
                            </span>
                            <p className="font-sm">
                            Euros
                            </p>
                        </Link>
                        
                    </div>
                    <button className="text-2xl text-left w-fit px-4 py-1 rounded-full bg-white">
                        Remix
                    </button>
                </div>
                <div className="flex flex-col justify-end items-end gap-10">
                <Card id={0} divId="imageOne" title="Boreas" year = "2022" setActive={setActive} />
                <Card id={1} divId="imageTwo"  title="Zephryos" year = "2022" setActive={setActive} />
                <Card id={2} divId="imageThree" title="Noptos" year = "2021" setActive={setActive} />
                <Card id={3} divId="imageFour" title="Euros" year = "2022"  setActive={setActive} />
                    
                </div>
            </main>
        </div>
    );
}
