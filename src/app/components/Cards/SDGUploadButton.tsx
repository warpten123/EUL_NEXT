"use client";
import * as React from "react";
import { fetchClassification, uploadFile } from "@/app/api/sdg-classifier";
import {
  Goal,
  SDGCard,
  SdgClassificationResult,
} from "@/app/types/SDG/SDGCard";
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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { uploadToCloudinary } from "@/app/api/upload-cloudinary";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import useLoggedUser from "@/app/hooks/useLoggedUser";
import { saveGoalsToFirestore } from "@/app/api/firestore";

export default function SDGUploadButtonCard() {
  const [results, setResults] = useState<SdgClassificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCard, setFilteredCard] = useState<SDGCard[]>([]);
  const [pdfFile, setPdfFile] = useState<File>();
  const loggedUser = useLoggedUser();
  const [researchId, setResearchId] = useState("");
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

  const openPDF = () => {
    if (pdfFile) {
      const fileURL = URL.createObjectURL(pdfFile);
      window.open(fileURL, "_blank");
    }
  };

  const saveToFireStore = async () => {
    const goalPayload: Goal[] = filteredCard.map((card) => ({
      goalName: card.title,
      goalPercent: card.percent,
    }));
    try {
      const result = await saveGoalsToFirestore(
        goalPayload,
        loggedUser?.uid as string,
        researchId
      );
      console.log("result", result);
    } catch (error) {
      console.error("Error uploading file:", error);
      setSnackbarOpen({
        open: true,
        message: "Error uploading file",
      });
      setGoUpload(true);
      setLoadingClassify(false);
    }
  };

  const onHandleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files?.[0]) {
      setFilteredCard([]);
      setLoadingClassify(true);
      setPdfFile(event.target.files?.[0]);
      const researchFile = event.target.files[0];
      const fileName = event.target.files[0].name;
      setResearchId(generateResearchId());
      try {
        await uploadFile(researchFile, researchId);
        fetchApi(fileName);
      } catch (error) {
        console.error("Error uploading file:", error);
        setSnackbarOpen({
          open: true,
          message: "Error uploading file",
        });
        setGoUpload(true);
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

  const handleUploadToCloud = async () => {
    setIsLoading(true);
    try {
      await uploadToCloudinary(
        pdfFile as File,
        loggedUser?.uid as string,
        researchId
      );
      saveToFireStore();
      setSnackbarOpen({
        open: true,
        message: `File Successfully Saved in EUL!`,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setSnackbarOpen({
        open: true,
        message: "Error uploading file",
      });
      setGoUpload(true);
      setLoadingClassify(false);
    }
    setIsLoading(false);
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
      setGoUpload(true);
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
      {goUpload && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            startIcon={<CloudUploadIcon />}
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
            Upload Again
          </Button>

          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              onClick={handleUploadToCloud}
              startIcon={<LibraryAddIcon />}
            >
              Save Classified Paper
            </Button>
          )}
        </Box>
      )}
      {loadingClassify && (
        <Button onClick={openPDF} startIcon={<PictureAsPdfIcon />}>
          View PDF
        </Button>
      )}
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
