"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const ImageShowModel = ({
  imgUrl,
  open,
  setOpen,
}: {
  imgUrl: string | null;
  open: boolean;
  setOpen: (e: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="w-[95%] max-w-2xl">
        <DialogHeader>
          <DialogTitle>Image Preview</DialogTitle>
        </DialogHeader>
        <div className="w-full relative aspect-square rounded-lg overflow-hidden">
          {imgUrl && <Image key={imgUrl} src={imgUrl} alt="show img" fill />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageShowModel;
