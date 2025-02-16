import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
	return (
		<main className='scroll-smooth'>
			<Navbar />
			<Hero />
		</main>
	);
}
