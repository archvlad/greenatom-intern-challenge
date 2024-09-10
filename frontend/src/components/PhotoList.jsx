import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import galleryStore from "../stores/gallery-store";
import { Button, Typography, Pagination } from "@mui/material";
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
      <Button variant="text" onClick={() => navigate("/")}>
        Назад
      </Button>
      <Typography variant="h4">
        Выбран альбом {galleryStore.currentAlbum?.title}
      </Typography>
      {galleryStore.photos?.map((p) => {
        return (
          <img
            src={p.thumbnail}
            key={p.image}
            onClick={() => handlePhotoClick(p)}
          />
        );
      })}
      {galleryStore.photos.length > 0 && (
        <Pagination
          count={galleryStore.totalPages}
          page={galleryStore.currentPage}
          onChange={handleChange}
        />
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
