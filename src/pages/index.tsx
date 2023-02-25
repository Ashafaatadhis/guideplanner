import Head from "next/head";
import Image from "next/image";
import { Yellowtail, Poppins } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import NavigationBar from "./components/NavigationBar";

const yellowTail = Yellowtail({
    weight: "400",
    subsets: ["latin"]
});
const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar>
                <section className="-mt-[64px] flex h-screen w-full items-center justify-center bg-[url('/assets/img/bg.png')] bg-cover">
                    {/* <Image
                        className="absolute top-0 h-screen w-full"
                        src={"/assets/img/bg.png"}
                        alt={"bgimage"}
                        width={1440}
                        height={627}
                    /> */}
                    <h1
                        className={`text-[100px] text-white ${yellowTail.className}`}
                    >
                        The journey. It matters.
                    </h1>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
                </section>
                <section className="">
                    <h1 className="text-center text-[36px] font-bold">
                        Our Services
                    </h1>
                </section>
            </NavigationBar>
        </>
    );
}
