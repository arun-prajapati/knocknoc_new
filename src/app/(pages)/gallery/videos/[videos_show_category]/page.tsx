import VideosList from "@/pagesContain/Gallery/VideosList";

const page = ({ params }: { params: { videos_show_category: string } }) => {
  return <VideosList params={params} />;
};

export default page;
