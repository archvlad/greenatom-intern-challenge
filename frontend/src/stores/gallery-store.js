import { makeAutoObservable } from "mobx";
import axios from "axios";

class GalleryStore {
  albums = [];
  currentAlbum;
  photos = [];
  currentPhoto;
  totalPages;
  currentPage = 1;

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

  setCurrentAlbum(albumId) {
    this.currentAlbum = this.albums.find((a) => a.id == albumId);
  }

  setCurrentPage(page) {
    this.currentPage = page;
  }

  setCurrentPhoto(photo) {
    this.currentPhoto = photo;
  }

  getPhotos = async (albumId, page) => {
    const limit = 10;
    const offset = (page - 1) * limit;
    let res = await axios.get(
      `http://localhost:8055/items/photos?filter[album_id][_eq]=${albumId}&limit=${limit}&offset=${offset}`
    );

    let photos = res.data.data;
    console.log(photos);
    let photosWithThumbnails = photos.map((p) => ({
      ...p,
      thumbnail: `http://localhost:8055/assets/${p.image}?fit=cover&width=320&height=240&quality=100`,
    }));
    this.photos = photosWithThumbnails;

    res = await axios.get(
      `http://localhost:8055/items/photos?filter[album_id][_eq]=${albumId}&fields=id`
    );
    const totalPhotos = res.data.data.length;
    this.totalPages = Math.ceil(totalPhotos / limit);
  };
}

export default new GalleryStore();
