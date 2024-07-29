import TopTab from "./components/TopTab";

const Gallery = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="gallery_page 2xl:container px-2 mb-7 min-h-svh">
      <div className="tab_box py-2">
        <TopTab />
      </div>
      <div className="content">{children}</div>
    </main>
  );
};

export default Gallery;
