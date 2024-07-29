import getInstagramPosts from "@/app/api/getInstagramPosts";
import React from "react";
import ShowInstaPostsList from "../components/ShowInstaPostsList";
import NoData from "@/components/common/NoData";

const ShowPostsSection = async () => {
  const instagramData = await getInstagramPosts();

  // --
  if (!instagramData.success || !instagramData?.data?.data) {
    return <NoData />;
  }

  // --
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <ShowInstaPostsList data={instagramData?.data?.data ?? []} />
    </div>
  );
};

export default ShowPostsSection;
