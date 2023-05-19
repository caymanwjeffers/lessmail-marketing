import Hero from "@/components/sections/hero";
import Nav from "@/components/navigation/nav";
import Reviews from "@/components/sections/reviews";
import Unsubscribe from "@/components/sections/unsubscribe";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Reviews />
      <Unsubscribe />
    </>
  );
}
