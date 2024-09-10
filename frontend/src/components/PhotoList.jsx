import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import galleryStore from "../stores/gallery-store";

const PhotoList = observer(() => {
  const { albumId } = useParams();
  useEffect(() => {
    galleryStore.getPhotos(albumId);
  }, [albumId]);
  return (
    <>
      <h1>Выбран альбом {albumId}</h1>
      {galleryStore.photos.map((p) => {
        return <img src={p.thumbnail} key={p.image} />;
      })}
    </>
  );
});

export default PhotoList;
