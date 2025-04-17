import * as React from "react";

import { styled } from "@mui/material/styles";
import { fetchClassification, uploadFile } from "@/app/api/sdg-classifier";
import {
  SDGCard,
  SdgClassificationResult,
  UploadResponse,
} from "@/app/types/SDG/SDGCard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import {
  convertSDGResultToCard,
  generateResearchId,
} from "@/app/helpers/sdgHelpers";
import SDGCardDisplay from "./SDGCard";
import GlobalSnackbar from "../Extra/SnackBar";
import EmptySDGCard from "./EmptySDGCard";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function SDGUploadButtonCard() {
  const [results, setResults] = useState<SdgClassificationResult | null>(null);
  const [filteredCard, setFilteredCard] = useState<SDGCard[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState({
    open: false,
    message: "",
  });
  const [goUpload, setGoUpload] = useState(false);
  const [loadingClassify, setLoadingClassify] = useState(false);

  const handleClose = () => {
    setSnackbarOpen({
      ...snackbarOpen,
      open: false,
    });
  };

  const onHandleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files?.[0]) {
      setGoUpload(true);
      setLoadingClassify(true);
      const researchFile = event.target.files[0];
      const fileName = event.target.files[0].name;
      const researchId = generateResearchId();
      try {
        await uploadFile(researchFile, researchId);
        fetchApi(fileName);
      } catch (error) {
        console.error("Error uploading file:", error);
        setSnackbarOpen({
          open: true,
          message: "Error uploading file",
        });
        setLoadingClassify(false);
      }
    } else {
      setSnackbarOpen({
        open: true,
        message: "No file selected",
      });
      setLoadingClassify(false);
      console.error("No file selected or files is null");
    }
  };

  const fetchApi = async (fileName: string) => {
    setFilteredCard([]);
    try {
      const response = await fetchClassification(fileName);
      const data = response;
      setResults(data);
      setLoadingClassify(false);
      setSnackbarOpen({
        open: true,
        message: "Research Successfully Classified!",
      });
    } catch (error) {
      console.error("Error fetching classification:", error);
      setSnackbarOpen({
        open: true,
        message: "Error fetching classification",
      });
      setLoadingClassify(false);
    }
  };

  useEffect(() => {
    if (results) {
      setFilteredCard(convertSDGResultToCard(results));
    }
  }, [results]);

  return (
    <>
      <Button
        onClick={() => {
          setGoUpload(false);
          setFilteredCard([]);
          setLoadingClassify(false);
          setSnackbarOpen({
            open: false,
            message: "",
          });
        }}
      >
        X
      </Button>
      {
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {(() => {
            if (goUpload) {
              return filteredCard.length > 0 ? (
                filteredCard.map((card, index) => (
                  <SDGCardDisplay card={card} key={index + 1} />
                ))
              ) : (
                <EmptySDGCard
                  onFileChange={onHandleSubmit}
                  loadingClassify={loadingClassify}
                />
              );
            } else {
              return (
                <EmptySDGCard
                  onFileChange={onHandleSubmit}
                  loadingClassify={loadingClassify}
                />
              );
            }
          })()}
        </Box>
      }
      <GlobalSnackbar
        open={snackbarOpen}
        onClose={handleClose}
        vertical="top"
        horizontal="center"
      />
    </>
  );
}
