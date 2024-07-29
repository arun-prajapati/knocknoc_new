import CommonFooter from "@/components/footer/CommonFooter";
import Activity from "@/pagesContain/Activity";

const page = ({ params }: { params: { activity_filter: string[] } }) => {
  return (
    <>
      <Activity params={params} /> <CommonFooter />
    </>
  );
};

export default page;
