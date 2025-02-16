import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import SwipeComponent from "@/components/Nawa/Nawa";

export default function Home() {
	return (
		<main className='scroll-smooth'>
			<Navbar />
			<Hero />
		</main>
	);
}
