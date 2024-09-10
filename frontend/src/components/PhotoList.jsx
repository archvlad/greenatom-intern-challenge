import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import galleryStore from "../stores/gallery-store";
import { Button, Typography, Pagination, Grid2, Box } from "@mui/material";
import PhotoModal from "./PhotoModal";

const PhotoList = observer(() => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    galleryStore.getPhotos(albumId, galleryStore.currentPage);
    galleryStore.setCurrentAlbum(albumId);
  }, [albumId]);

  const handleChange = (event, value) => {
    galleryStore.setCurrentPage(value);
    galleryStore.getPhotos(albumId, galleryStore.currentPage);
  };

  const handlePhotoClick = (photo) => {
    galleryStore.setCurrentPhoto(photo);
  };

  return (
    <>
      <Button variant="text" color="black" onClick={() => navigate("/")}>
        Назад
      </Button>
      <Typography variant="h4" align="center">
        Выбран альбом {galleryStore.currentAlbum?.title}
      </Typography>
      <Grid2 container spacing={{ xs: 2, md: 3 }} mt={5}>
        {galleryStore.photos?.map((p) => {
          return (
            <img
              src={p.thumbnail}
              key={p.image}
              onClick={() => handlePhotoClick(p)}
            />
          );
        })}
      </Grid2>
      {galleryStore.photos.length > 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={5}
        >
          <Pagination
            count={galleryStore.totalPages}
            page={galleryStore.currentPage}
            onChange={handleChange}
          />
        </Box>
      )}

      {galleryStore.currentPhoto && (
        <PhotoModal
          photo={galleryStore.currentPhoto}
          onClose={() => galleryStore.setCurrentPhoto(null)}
        ></PhotoModal>
      )}
    </>
  );
});

export default PhotoList;
