"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [activeLink, setActiveLink] = useState<string | null>(null);

	const handleActive = (link: string) => {
		setActiveLink(link);
	};

	return (
		<nav className='container bg-white py-3 lg:py-[5px] font-[comfortaa]'>
			{/* Desktop Navigation */}
			<div className='lg:flex justify-end w-full hidden'>
				<div className='flex items-center mr-[297px]'>
					<div className='mr-[9px]'>
						<Image height={16} width={12} src='/Vector.png' alt='' />
					</div>
					<p className=''>Abuja</p>
				</div>

				<div className='flex items-center'>
					<Link
						href={"#"}
						onClick={() => handleActive("store")}
						className={`mr-[31px] ${
							activeLink === "store"
								? "bg-gradient-to-br from-[#C67250] to-[#9B5B9A] bg-clip-text text-transparent relative after:content-[''] after:absolute after:left-0 after:bottom-[-24px] after:w-full after:h-[1px] after:bg-gradient-to-br after:from-[#C67250] after:to-[#9B5B9A]"
								: "text-black"
						}`}>
						Store
					</Link>
					<Link
						href={"#"}
						onClick={() => handleActive("login")}
						className={`mr-[46px] ${
							activeLink === "login"
								? "bg-gradient-to-br from-[#C67250] to-[#9B5B9A] bg-clip-text text-transparent border-b relative after:content-[''] after:absolute after:left-0 after:bottom-[-24px] after:w-full after:h-[1px] after:bg-gradient-to-br after:from-[#C67250] after:to-[#9B5B9A]"
								: "text-black"
						}`}>
						Login
					</Link>
					<button className='bg-[#B63B56] px-[13px] py-[18px] text-white rounded-[8px]'>
						Become a shopper
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className='flex items-center gap-[14px] justify-end lg:hidden'>
				<Image
					width={34.17}
					height={34.17}
					src={"/user.png"}
					alt=''
					className='size-[41px]'
				/>
				<Image width={21.33} height={16} src={"/menu.png"} alt='' />
			</div>
		</nav>
	);
}
