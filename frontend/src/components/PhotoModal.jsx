/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";

const PhotoModal = (props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <img
          src={`http://localhost:8055/assets/${props.photo.image}`}
          style={{ maxWidth: "500px", maxHeight: "500px"  }}
        />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default PhotoModal;
