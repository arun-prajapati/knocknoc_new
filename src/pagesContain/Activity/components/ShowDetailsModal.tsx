"use client";
import TypographyH4 from "@/components/typography/TypographyH4";
import TypographyP from "@/components/typography/TypographyP";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function ShowDetailsModal({
  categoryFilter,
  imgUrl,
  start_date,
  end_date,
  desc,
}: {
  categoryFilter: string | null;
  imgUrl: string;
  start_date: string;
  end_date: string;
  desc: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] ">
        <DialogHeader>
          <DialogTitle className="capitalize">{categoryFilter}</DialogTitle>
        </DialogHeader>
        <div className="view_details py-4 overflow-auto max-h-[80vh]">
          <div className="img_box relative w-full aspect-video rounded-lg overflow-hidden ">
            <Image src={imgUrl} alt="card_img" fill />
          </div>
          <div className="info mt-3">
            <TypographyH4 text={categoryFilter ?? ""} css="capitalize" />
            <TypographyP text={`${start_date} - ${end_date}`} />
            <Separator className="my-1" />
            <TypographyH4 text="Description" css="mb-1" />
            <TypographyP text={desc} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ShowDetailsModal;
