"use client";
import FavCard from "@/components/cards/FavCard";
import { FavouritesDataType } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const FavListShow = ({ fav_data }: { fav_data: FavouritesDataType[] }) => {
  return (
    <div className="fav_list_cards grid  grid-cols-[repeat(auto-fill,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
      <AnimatePresence>
        {fav_data?.map((e) => (
          <FavCard favData={e} key={`${e.id}_fav_list_item`} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FavListShow;
