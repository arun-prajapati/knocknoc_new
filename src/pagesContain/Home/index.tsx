import SearchBox from "@/components/searchbox/SearchBox";
import HeroSection from "./sections/heroSection/HeroSection";
import ReviewSection from "./sections/reviewSection/ReviewSection";
import HelpSection from "./sections/helpSection/HelpSection";
import { Suspense } from "react";
import ReviewsSectionLoading from "@/loading_layouts/home/ReviewsSectionLoading";

const Home = () => {
  return (
    <main className="home_page 2xl:container px-2 min-h-svh">
      <div className="serachContainer max-w-2xl mx-auto px-4 relative top-2 md:-top-2">
        <SearchBox />
      </div>
      <HeroSection />
      <Suspense fallback={<ReviewsSectionLoading />}>
        <ReviewSection />
      </Suspense>
      <HelpSection />
    </main>
  );
};

export default Home;
