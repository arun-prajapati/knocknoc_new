"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect } from "react";

const ShowInstaPostModal = ({
  fileUrl,
  fileType,
  setfileUrl,
  setfileType,
  open,
  setOpen,
}: {
  fileUrl: string;
  fileType: string;
  open: boolean;
  setOpen: (e: boolean) => void;
  setfileUrl: (e: string) => void;
  setfileType: (e: string) => void;
}) => {
  // --
  useEffect(() => {
    return () => {
      setfileUrl("");
      setfileType("");
    };
  }, []);
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="w-[95%] max-w-2xl">
        <DialogHeader>
          <DialogTitle>Post Preview</DialogTitle>
        </DialogHeader>

        <div className=" w-full aspect-square rounded-lg relative">
          {fileType === "IMAGE" && <Image src={fileUrl} alt={fileUrl} fill />}
          {fileType === "VIDEO" && (
            <video
              controls
              autoPlay
              muted
              key={`${fileUrl}_video`}
              className="absolute top-0 left-0 w-full h-full"
            >
              <source src={fileUrl} />
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowInstaPostModal;
