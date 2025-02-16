import Image from "next/image";
export default function Navbar() {
	return (
		<nav className='container bg-white  py-3 lg:py-[5px] font-[comfortaa]'>
			<div className=' lg:flex justify-end w-full hidden'>
				<div className='flex items-center mr-[297px]'>
					<div className=' mr-[9px]'>
						<Image height={16} width={12} src='/Vector.png' alt='' />
					</div>
					<p className=''>Abuja</p>
				</div>

				<div className='flex items-center'>
					<p className='mr-[31px]'>Store</p>
					<p className='mr-[46px]'>login</p>
					<button className='bg-[#B63B56] px-[13px] py-[18px] text-white rounded-[8px]'>
						Become a shopper
					</button>
				</div>
			</div>
			<div className='flex items-center gap-[14px] justify-end  lg:hidden'>
				<div className=''>
					<Image
						width={34.17}
						height={34.17}
						src={"/user.png"}
						alt=''
						className='size-[41px]'
					/>
				</div>
				<div className=''>
					<Image width={21.33} height={16} src={"/menu.png"} alt='' />
				</div>
			</div>
		</nav>
	);
}
