"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const VideoShowModel = ({
  videoUrl,
  open,
  setOpen,
}: {
  videoUrl: string | null;
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="w-[95%] xl:max-w-fit">
        <DialogHeader>
          <DialogTitle className="text-left">Video Preview</DialogTitle>
        </DialogHeader>
        <div className=" relative transition-all duration-75 rounded-lg overflow-hidden">
          {videoUrl && (
            <video
              src={videoUrl}
              key={videoUrl}
              className="max-h-[80vh]  w-auto rounded-lg"
              autoPlay
              controls
              preload="none"
              playsInline
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoShowModel;
