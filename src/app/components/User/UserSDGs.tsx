"use client";
import { Box, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";
import useLoggedUser from "@/app/hooks/useLoggedUser";

type CloudinaryFile = {
  filename: string;
  format: string;
  secure_url: string;
  public_id: string;
};

const UserSDGs = () => {
  const [userFiles, setUserFiles] = useState<CloudinaryFile[]>([]);
  const loggedUser = useLoggedUser();

  useEffect(() => {
    const fetchUserFiles = async () => {
      if (loggedUser) {
        try {
          const res = await fetch(
            `/api/cloudinary/user-files?folder=users/${loggedUser.uid}`
          );
          const files = await res.json();
          setUserFiles(files);
        } catch (err) {
          console.error("Error fetching user files:", err);
        }
      }
    };

    fetchUserFiles();
  }, [loggedUser]);

console.log(userFiles)

  return (
    <Box>
      {userFiles?.map((item, ) => (
        <Box
          key={item.public_id}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            {item.filename}.{item.format}
          </Typography>
          <Link
            href={item.secure_url}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="primary"
            fontWeight="bold"
          >
            View File
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default UserSDGs;