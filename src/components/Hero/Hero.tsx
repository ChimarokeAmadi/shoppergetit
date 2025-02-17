"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const swipe = (newDirection: number) => {
		setDirection(newDirection);
		setIndex((prev) => (prev + newDirection + 2) % 2); // 2= Number of slides
	};
	return (
		<div className='w-full h-screen bg-slate-100'>
			<div className='container font-[comfortaa]'>
				<div className='w-full'>
					<div className='mt-[26px] hidden lg:inline-block bg-[url(/HeroBg.png)] bg-cover bg-center w-full h-[471px] rounded-[43px] relative'>
						<AnimatePresence mode='wait' custom={direction}>
							{index === 0 && (
								<motion.div
									key='slide1'
									initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className='absolute bg-white rounded-[25px] top-[184px] left-[62px] bottom-[-90px] px-[13px] pt-[19px]'>
									<div className='px-7 pt-10 pb-[21px]'>
										<div className='w-[326px]'>
											<p className='text-[24px] '>Welcome back</p>
											<p className='text-[16px] mb-[36px] text-[#585858] '>
												Login using:
											</p>
											<div className='flex flex-col '>
												<button className='rounded-[100px] border border-[#5D5D5D] flex items-center justify-center gap-[14px] py-[13px] mb-8'>
													<Image
														alt=''
														width={26}
														height={26}
														src={"/google.png"}
													/>{" "}
													Login with Google
												</button>
												<button
													onClick={() => swipe(1)}
													className='flex items-center gap-[6px] text-[#5D5D5D]'>
													<Image
														alt=''
														height={20}
														width={20}
														src={"/switch.png"}
													/>{" "}
													Click to switch to manual
												</button>
											</div>
										</div>
									</div>
								</motion.div>
							)}
							{index === 1 && (
								<motion.div
									key='slide2'
									initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: direction > 0 ? 300 : 300, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className='absolute top-[184px] left-[62px] bottom-[-90px] bg-white pt-[19px] pb-[6px] px-[13px] rounded-[25px]'>
									<div className=' pb-[20px] pl-7 pr-[64px] '>
										<p className='text-[24px] mb-[18px]'>Log in</p>
										<form
											action='/submit'
											method='POST'
											className='flex flex-col'>
											<input
												type='text'
												id='name'
												name='name'
												placeholder='name@email.com'
												className='w-[290px] text-[14px] border border-[#5D5D5D] pt-[15px] pb-[15px] pl-[19px] rounded-[8px] mb-7'
												required
											/>

											<input
												type='email'
												id='email'
												name='email'
												placeholder='please enter password'
												className='w-[290px] text-[14px] border border-[#5D5D5D] pt-[15px] pb-[15px] pl-[19px] rounded-[8px] mb-4'
												required
											/>
										</form>
										<div className='flex flex-col'>
											<Link href={"#"} className='text-[#898989] mb-7'>
												Forgot Password?{" "}
											</Link>
											<button className='bg-black px-[39px] py-3 text-white w-[147px] rounded-[100px] mb-[18px]'>
												Proceed
											</button>
											<button
												onClick={() => swipe(-1)}
												className='flex items-center gap-[6px] mb-5 text-[#5D5D5D]'>
												<Image
													alt=''
													height={20}
													width={20}
													src={"/switch.png"}
												/>{" "}
												Click to switch to manual
											</button>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
				<div className='lg:hidden pt-[52px]'>
					<p className='text-[24px] mb-[46px] text-center lg:text-start'>
						Welcome back
					</p>
					<AnimatePresence mode='wait' custom={direction}>
						{index === 0 && (
							<motion.div
								key='slide1'
								initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className=''>
								<div className='flex justify-center w-full'>
									<Image
										width={397}
										height={259}
										src={"/HeroBg2.png"}
										alt=''
										className='mb-[48px]'
									/>
								</div>
								<div className='flex flex-col items-center'>
									<button className='border border-[#5D5D5D] text-[#5D5D5D] w-full flex gap-[14px] py-[13px] items-center justify-center rounded-[100px] mb-[22px]'>
										<Image height={26} width={26} src={"/google2.png"} alt='' />
										Log in with Google
									</button>

									<button
										onClick={() => swipe(1)}
										className='flex items-center gap-[6px] text-[#5D5D5D]'>
										<Image alt='' height={20} width={20} src={"/switch.png"} />{" "}
										Click to switch to manual
									</button>
								</div>
							</motion.div>
						)}
						{index === 1 && (
							<motion.div
								key='slide2'
								initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: direction > 0 ? 300 : 300, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className=''>
								<form
									action='/submit'
									method='POST'
									className='flex flex-col items-center'>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='name@email.com'
										className='w-full bg-white text-[14px] border border-[#5D5D5D] pt-[15px] pb-[15px] pl-[19px] rounded-[8px] mb-7'
										required
									/>

									<input
										type='email'
										id='email'
										name='email'
										placeholder='please enter password'
										className='w-full text-[14px] border border-[#5D5D5D] pt-[15px] pb-[15px] pl-[19px] rounded-[8px] mb-4'
										required
									/>
								</form>
								<div className='flex flex-col items-center'>
									<Link href={"#"} className='text-[#898989] mb-7'>
										Forgot Password?{" "}
									</Link>
									<button className='bg-black px-[39px] py-3 text-white w-full rounded-[100px] mb-[18px]'>
										Proceed
									</button>
									<button
										onClick={() => swipe(-1)}
										className='flex items-center gap-[6px] mb-5 text-[#5D5D5D]'>
										<Image alt='' height={20} width={20} src={"/switch.png"} />{" "}
										Click to switch to manual
									</button>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
