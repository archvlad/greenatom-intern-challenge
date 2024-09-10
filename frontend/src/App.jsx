import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumList from "./components/AlbumList";
import PhotoList from "./components/PhotoList";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlbumList></AlbumList>}></Route>
        <Route path="/album/:albumId" element={<PhotoList></PhotoList>}></Route>
      </Routes>
    </BrowserRouter>
  );
});

export default App;
