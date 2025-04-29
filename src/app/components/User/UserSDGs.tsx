"use client";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useLoggedUser from "@/app/hooks/useLoggedUser";
import { fetchGoalsByUserId } from "@/app/api/firestore";
import { convertToYourSDG } from "@/app/helpers/sdgHelpers";
import YourSDGCardComponent from "../Cards/YourSDGCard";
import { YourSDGCard } from "@/app/types/SDG/SDGCard";
import EmptyMessage from "../Extra/EmptyMessage";

export interface CloudinaryFile {
  filename: string;
  format: string;
  secure_url: string;
  public_id: string;
}

const UserSDGs = () => {
  // const [userFiles, setUserFiles] = useState<CloudinaryFile[]>([]);
  const [yourSDGs, setYourSDGs] = useState<YourSDGCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const loggedUser = useLoggedUser();

  useEffect(() => {
    const fetchUserFiles = async () => {
      if (loggedUser) {
        setIsLoading(true);
        try {
          // Fetch user files from Cloudinary
          const res = await fetch(
            `/api/cloudinary/user-files?folder=users/${loggedUser.uid}`
          );
          const files = await res.json();
          // setUserFiles(files);

          // Fetch goals from Firestore
          const res2 = await fetchGoalsByUserId(loggedUser.uid);

          // Convert to YourSDGCard
          const convertedSDGs = convertToYourSDG(res2, files);
          setYourSDGs(convertedSDGs);
        } catch (err) {
          console.error("Error fetching user files or goals:", err);
        }
        setIsLoading(false);
      }
    };

    fetchUserFiles();
  }, [loggedUser]);

  if (isLoading) {
    return (
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 5,
        mt: 6,
      }}
    >
      {yourSDGs.length > 0 ? (
        yourSDGs.map((item, index) => (
          <Box key={index + 1}>
            <YourSDGCardComponent card={item} />
          </Box>
        ))
      ) : (
        <EmptyMessage
          mainMessage="No SDGs Found!"
          description="You haven't uploaded any SDGs yet. Please upload to see your SDGs."
        />
      )}
    </Box>
  );
};

export default UserSDGs;
