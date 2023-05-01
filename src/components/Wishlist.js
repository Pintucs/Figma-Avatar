import React, { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";


const Wishlist = ({ id }) => {
  const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

  const isFavourited = storageItem.includes(id)

  const get = () => {
    if (!isFavourited) {

      const newStorageItem = [...storageItem, id]
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    } else {

      const newStorageItem = storageItem.filter((e) => e !== id)
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    }
  }

  return (
    <IconButton onClick={get} style={{ padding: "0px" }}>
      {isFavourited ? <Favorite color="error" /> : <FavoriteBorder color="white" />}
    </IconButton>
  );


};

export default Wishlist