import Hero from "@/app/components/hero";
import FeaturedPosts from "@/app/components/FeaturedPosts";
import CarouselPosts from "@/app/components/CarouselPosts";

export default function HomePage() {
  return (
      <section>
        <Hero />
        <FeaturedPosts />
        <CarouselPosts />
      </section>
  );
}
