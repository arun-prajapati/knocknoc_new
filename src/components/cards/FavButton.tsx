"use client";
import { toast } from "sonner";
import React, { memo, useCallback, useContext, useState } from "react";
import { CurrentUserContext } from "@/context/CurrentUser";
import { favorite_api_action } from "@/app/actions/favorite";

const FavButton = memo(
  ({ linkStatus, service_id }: { linkStatus: boolean; service_id: number }) => {
    // --
    const currentUser = useContext(CurrentUserContext);
    // --
    const [favStatus, setFavStatus] = useState(linkStatus);

    //  --fav status api call with optimistic--
    const favorite_api_fun = useCallback(async () => {
      setFavStatus(!favStatus);
      try {
        const categoryData = await favorite_api_action({
          ser_id: service_id.toString(),
          status: favStatus ? 0 : 1,
          user_firebase_id: currentUser?.user_token || "null",
        });

        // -
        toast.success(`${categoryData.message}`);
      } catch {
        setFavStatus(linkStatus);
        toast.error(`Something went wrong`);
      }
    }, [linkStatus]); // eslint-disable-line

    return (
      <button onClick={favorite_api_fun} key={`${service_id}_fav_btn`}>
        {favStatus ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-5 fill-primary"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-5 fill-gray-400"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        )}
      </button>
    );
  }
);

FavButton.displayName = "FavButton";

export default FavButton;
