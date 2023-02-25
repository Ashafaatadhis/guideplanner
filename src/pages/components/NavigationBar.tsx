import { useEffect, useState } from "react";
import { Navbar } from "react-daisyui";
import Container from "./Container";
import { VscAccount } from "react-icons/vsc";

const NavigationBar = ({ children }: { children: React.ReactNode }) => {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            scrollY ? setIsScroll(true) : setIsScroll(false);
        });
    }, []);
    return (
        <div className="">
            <Navbar
                className={`sticky top-0 left-0 right-0 z-10  leading-none transition-all ${
                    isScroll ? "bg-[#1DA1F2]" : "bg-transparent"
                }  `}
            >
                {/* shadow-inner drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] */}
                <Container className="mx-12 flex w-full items-center justify-between">
                    <span className="text-[40px] font-bold text-white ">
                        Guide
                        <span className="text-[#61D9FF] ">Planner</span>
                    </span>

                    <ul className="flex gap-10 text-[30px] font-bold text-white">
                        <li>Plan</li>
                        <li>Guide </li>
                        <li>Custom</li>
                        <li className="text-[35px] leading-none">
                            <VscAccount />
                        </li>
                    </ul>
                </Container>
            </Navbar>
            {children}
        </div>
    );
};

export default NavigationBar;
