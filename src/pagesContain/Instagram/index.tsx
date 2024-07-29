import { Suspense } from "react";
import ShowPostsSection from "./sections/ShowPostsSection";

const Instagram = () => {
  return (
    <main className="instagram_page 2xl:container px-2 py-4 sm:py-6 lg:py-8 min-h-svh">
      {/* --ShowPostsSection-- */}
      <ShowPostsSection />
    </main>
  );
};

export default Instagram;
