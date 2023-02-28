import { useState } from "react";
import Link from "next/link";
import { Avatar, Radio } from "react-daisyui";
import { AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { BsChatText } from "react-icons/bs";
import { TbDiscount2, TbHeart } from "react-icons/tb";
import Datepicker from "react-tailwindcss-datepicker";
import { DateType } from "react-tailwindcss-datepicker/dist/types";
const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

const SideCard = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState<{
        startDate: DateType;
        endDate: DateType;
    }>({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    return (
        // <div className="relative flex gap-10">
        //     <div className="w-3/4 flex-1 basis-1">{children}</div>
        // flex-none basis-[390px]
        <>
            <div
                className={`sticky top-20 right-20 mt-5  ml-auto  w-[410px]  bg-[#F7F7F7] p-6 ${poppins.className}`}
            >
                <div className="flex items-center gap-2 ">
                    <Avatar size={60} src="/assets/img/planProfile.png" />
                    <div className="flex flex-col">
                        <span className="text-[18px]">Muhammad Raihan</span>
                        <span className="text-[11px]">
                            Online 5 jam yang lalu
                        </span>
                        <div className="mt-1 flex w-full">
                            <span className="flex items-center gap-1 text-[8px]">
                                <AiFillStar />
                                <span className="text-[8px] font-semibold">
                                    4.1
                                </span>
                                <Link href={"#"} className="underline">
                                    6.7RB Review
                                </Link>
                            </span>

                            <div className="divider divider-horizontal w-fit "></div>

                            <span className="flex items-center gap-1 text-[8px]">
                                <IoTicketOutline className="origin-center  rotate-45" />
                                <span className="text-[8px] font-semibold">
                                    200RB
                                </span>
                                Terjual
                            </span>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex items-center justify-between">
                        <span className="text-[30px] font-semibold">
                            Rp21.834
                        </span>
                        <span className="text-[14px] font-semibold line-through">
                            Rp59.012
                        </span>
                        <span className="text-[14px] font-semibold text-[#1DA1F2] line-through">
                            63% off
                        </span>
                    </div>
                    <span className="text-[13px]">Termasuk pajak</span>
                </div>
                <div className=" mt-5 flex rounded-md bg-white py-2 drop-shadow-md">
                    <Datepicker
                        displayFormat="DD MMM"
                        containerClassName={"!w-[50%]  "}
                        inputClassName="text-[12px] !py-0 !px-2 !outline-none !border-0"
                        inputId="date"
                        value={value}
                        onChange={handleValueChange}
                    />
                    <div className="divider divider-horizontal w-fit "></div>
                    <select
                        name=""
                        className="w-[50%] text-[12px] outline-none "
                        id=""
                    >
                        <option value="">1-5 orang</option>
                        <option value="">&gt; 5 Orang</option>
                    </select>
                </div>
                <div className="mt-3">
                    <span className="text-[18px]">Guide Type:</span>
                    <div className="mx-8 mt-2 flex items-center gap-5 text-[14px]">
                        <div className="flex w-1/2 items-center gap-4 border-r-[2px] border-r-[#5C5C5C]">
                            <Radio name="radio1" /> Online
                        </div>
                        {/* <div className="divider divider-horizontal w-fit "></div> */}
                        <div className="flex w-1/2  items-center  gap-4">
                            <Radio name="radio1" defaultChecked /> Offline
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <span className="text-[18px]">Booking and Ticket:</span>
                    <div className="mx-8 mt-2 flex items-center gap-5 text-[14px]">
                        <div className="flex w-1/2 items-center gap-4 border-r-[2px] border-r-[#5C5C5C]">
                            <Radio name="radio1" /> Included
                        </div>
                        {/* <div className="divider divider-horizontal w-fit "></div> */}
                        <div className="flex  w-1/2 items-center  gap-4">
                            <Radio name="radio1" defaultChecked />
                            <span className="min-w-fit">Not Include</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex items-center gap-1 rounded-md bg-white  p-2 text-[14px] drop-shadow-md">
                    <TbDiscount2 className="text-[22px] leading-none" />
                    <input
                        className="outline-none"
                        type="text"
                        placeholder="Discount Voucher..."
                    />
                </div>
                <div className="mt-3 flex flex-col gap-1 px-8 text-[14px]">
                    <div className="flex justify-between">
                        <span>Price</span>
                        <span>Rp.50.000</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span>-Rp.20.000</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>Rp.30.000</span>
                    </div>
                </div>
                <div className="mt-7 px-8">
                    <button className="w-full rounded-[20px] bg-[#1DA1F2] py-2 text-[20px] font-bold text-white">
                        Book now!
                    </button>
                </div>
                <div className="mt-8 flex px-8 text-[14px] text-[#1DA1F2]">
                    <span className="flex w-full items-center justify-center gap-1">
                        <BsChatText /> Chat
                    </span>
                    <div className="divider divider-horizontal w-fit bg-[#1DA1F2]  "></div>
                    <span className="flex w-full items-center justify-center gap-1">
                        <TbHeart /> Save
                    </span>
                    <div className="divider divider-horizontal w-fit bg-[#1DA1F2]  "></div>
                    <span className="flex w-full items-center justify-center gap-1">
                        <AiOutlineShareAlt />
                        Share
                    </span>
                </div>
            </div>
            {children}
        </>
        // </div>
    );
};

export default SideCard;
