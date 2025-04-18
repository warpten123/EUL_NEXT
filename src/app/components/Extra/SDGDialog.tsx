import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { SDGViewCard } from "@/app/types/SDG/SDGCard";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface CustomizedDialogsProps {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
  data: SDGViewCard;
}

export default function CustomizedDialogs({
  open,
  handleClose,
  data,
}: Readonly<CustomizedDialogsProps>) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 2, p: 1 }} id="customized-dialog-title">
        <CardMedia
          component="img"
          height="500"
          image={data?.imageUrl}
          alt={data?.title}
        />
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Targets: {data?.targets}
        </Typography>
        <Typography gutterBottom>{data?.description}</Typography>
        <Typography gutterBottom>{data?.overview}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          href={data?.targetLink}
          target="_blank"
          rel="noopener noreferrer"
        >
         See More
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
