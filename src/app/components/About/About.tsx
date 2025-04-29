import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArticleIcon from "@mui/icons-material/Article";

const AboutTheSite = () => {
  return (
    <Box sx={{ maxWidth: "lg", mx: "auto", px: 3, py: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        Howdy!
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>UN SDG Paper Classifier</strong> is a full-stack web application
        that classifies uploaded documents into the top 4 most relevant{" "}
        <strong>United Nations Sustainable Development Goals (SDGs)</strong>. It
        uses Natural Language Processing techniques like TF-IDF and Cosine
        Similarity to analyze and categorize text.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mt: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔧 Tech Stack
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Frontend: Next.js (React) with Material UI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Backend: Flask (Python) deployed on Render" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Database: Firebase Firestore" />
            </ListItem>
            <ListItem>
              <ListItemText primary="File Upload: Cloudinary API" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hosting: Vercel (CI/CD from GitHub main branch)" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            ✨ Features
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Upload research papers (PDF/text)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Returns top 4 SDG categories with relevance percentages" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Visualizes classification output for interpretability" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Data stored and retrieved from Firestore" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cloudinary handles secure file uploads" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Firebase Route Authentication" />
            </ListItem>
          </List>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{ mt: 5 }}
        align="center"
        color="text.secondary"
      >
        To start, navigate to the <strong>Classify</strong> tab.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 3,
          mt: 5,
        }}
      >
        {/* GitHub Card */}
        <Card sx={{ minWidth: 180, textAlign: "center" }}>
          <CardActionArea
            href="https://github.com/warpten123/EUL_NEXT"
            target="_blank"
          >
            <CardContent>
              <Tooltip title="View GitHub Repository">
                <IconButton color="primary">
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Typography variant="body2">GitHub Repo</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Documentation Card */}
        <Card sx={{ minWidth: 180, textAlign: "center" }}>
          <CardActionArea href="/files/EUL Documentation v1.2.pdf" target="_blank">
            <CardContent>
              <Tooltip title="Download Documentation">
                <IconButton color="primary">
                  <DescriptionIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Typography variant="body2">Documentation</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Resume Card */}
        <Card sx={{ minWidth: 180, textAlign: "center" }}>
          <CardActionArea
            href="/files/Resume Premacio Latest.pdf"
            target="_blank"
          >
            <CardContent>
              <Tooltip title="View Resume">
                <IconButton color="primary">
                  <InsertDriveFileIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Typography variant="body2">Resume</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Research Paper Card */}
        <Card sx={{ minWidth: 180, textAlign: "center" }}>
          <CardActionArea
            href="/files/EUL_-A-Unified-Research-Repository-and-SDG-Classification-Framework-using-KNN-and-Cosine-Similarity.pdf"
            target="_blank"
          >
            <CardContent>
              <Tooltip title="Download Research Paper">
                <IconButton color="primary">
                  <ArticleIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Typography variant="body2">Research Paper</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      {/* Contact Section */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h6" color="text.primary" gutterBottom>
          📬 Contact Me
        </Typography>
        <Typography variant="body1">
          Reach out at <strong>pauljoshuapremacio@gmail.com</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutTheSite;
