import ProfilePagesWrapper from "@/components/ProfilePagesWrapper";

import React from "react";
import FavListShow from "./FavListShow";
import apihandler from "@/lib/apihandler";
import { FavouritesDataType } from "@/types/types";
import { getClient_token } from "@/lib/clientCookie";
import NoData from "@/components/common/NoData";

const Favourites = async () => {
  // --fetch fav list--
  const get_favoritelist: { data: FavouritesDataType[] } = await apihandler({
    path: "/get_favoritelist",
    apiConfig: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_firebase_id: getClient_token() || "" }),
    },
  });

  // --show page--
  if (!get_favoritelist || !get_favoritelist.data) {
    return (
      <ProfilePagesWrapper heading="Favourites">
        <NoData />
      </ProfilePagesWrapper>
    );
  }
  if (get_favoritelist && get_favoritelist.data.length < 1) {
    return (
      <ProfilePagesWrapper heading="Favourites">
        <NoData text="Favourites not available" />
      </ProfilePagesWrapper>
    );
  }

  return (
    <div className="favourites_action_page">
      <ProfilePagesWrapper heading="Favourites">
        <FavListShow fav_data={get_favoritelist?.data} />
      </ProfilePagesWrapper>
    </div>
  );
};

export default Favourites;
