import { makeAutoObservable } from "mobx";
import axios from "axios";

class GalleryStore {
  albums = [];
  currentAlbum;
  photos;
  currentPhoto;

  constructor() {
    makeAutoObservable(this);
  }

  setAlbums(albums) {
    this.albums = albums;
  }

  getAlbums = async () => {
    try {
      const res = await axios.get("http://localhost:8055/items/albums");
      let albums = res.data.data;
      albums = await Promise.all(
        albums.map(async (e) => {
          const res = await axios.get(
            `http://localhost:8055/items/photos?filter[album_id][_eq]=${e.id}&limit=1`
          );
          return {
            ...e,
            cover: res.data.data[0].image,
          };
        })
      );
      this.setAlbums(albums);
      console.log(albums);
    } catch (e) {
      console.log(e);
    }
  };

  getPhotos = async (albumId) => {
    const res = await axios.get(
      `http://localhost:8055/items/photos?filter[album_id][_eq]=${albumId}`
    );

    let photos = res.data.data;
    console.log(photos);
    let photosWithThumbnails = photos.map((p) => ({
      ...p,
      thumbnail: `http://localhost:8055/assets/${p.image}?fit=cover&width=292&height=192&quality=100`,
    }));
    this.photos = photosWithThumbnails;
  };
}

export default new GalleryStore();
