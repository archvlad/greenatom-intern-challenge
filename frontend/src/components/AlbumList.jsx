/* eslint-disable react/prop-types */
import AlbumCard from "./AlbumCard";
import { Link } from "react-router-dom";
import galleryStore from "../stores/gallery-store";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Grid2, Typography } from "@mui/material";

const AlbumList = observer(() => {
  const { albums, getAlbums } = galleryStore;
  useEffect(() => {
    galleryStore.setCurrentPage(1);
    galleryStore.setCurrentPhoto(null);
    getAlbums();
  }, []);
  return (
    <>
      <Typography variant="h4" align="center">
        Альбомы
      </Typography>
      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        mt={5}
      >
        {albums.map((e) => (
          <div key={e.id}>
            <Link to={`/album/${e.id}`}>
              <AlbumCard title={e.title} id={e.id} cover={e.cover}></AlbumCard>
            </Link>
          </div>
        ))}
      </Grid2>
    </>
  );
});

export default AlbumList;
