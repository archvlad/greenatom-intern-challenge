/* eslint-disable react/prop-types */
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom";
import galleryStore from "../stores/gallery-store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";

const AlbumList = observer(() => {
  const { albums, getAlbums } = galleryStore;
  useEffect(() => {
    galleryStore.setCurrentPage(1);
    galleryStore.setCurrentPhoto(null);
    getAlbums();
  }, []);
  return (
    <>
      <Typography variant="h4">Альбомы</Typography>
      {albums.map((e) => (
        <div key={e.id}>
          <Link to={`/album/${e.id}`}>
            <AlbumCard title={e.title} id={e.id} cover={e.cover}></AlbumCard>
          </Link>
        </div>
      ))}
    </>
  );
});

export default AlbumList;
