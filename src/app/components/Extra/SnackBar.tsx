import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface GlobalSnackbarProps extends SnackbarOrigin {
  open: { open: boolean; message: string; };
  onClose: () => void;
}

export default function GlobalSnackbar({
  open,
  onClose,
  vertical = "top",
  horizontal = "center",
}: Readonly<GlobalSnackbarProps>) {
  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open.open}
        onClose={onClose}
        message={open.message}
        key={vertical + horizontal}
      />
    </Box>
  );
}