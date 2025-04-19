"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import useAuthFirebase from "@/app/hooks/useAuthFirebase";
import GlobalSnackbar from "../Extra/SnackBar";
import { useRouter } from "next/navigation"; 

const Login = () => {
  const router = useRouter(); 
  const { createUserWithEmailPassword,signInWithEmailPassword } = useAuthFirebase();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


 

  //for snackbar
  const [snackbarOpen, setSnackbarOpen] = useState({
    open: false,
    message: "",
  });

  const handleClose = () => {
    setSnackbarOpen({
      ...snackbarOpen,
      open: false,
    });
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailPassword(email, password);
      setSnackbarOpen({
        open: true,
        message: "Successfully Registered! Login Now",
      });
      setError("");
      setIsLogin(true);
    } catch (err) {
      console.error("Error during sign-up:", err);
      setSnackbarOpen({
        open: true,
        message: "Failed to create user. Please try again.",
      });
      setError("Failed to create user. Please try again.");
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailPassword( email, password);
      console.log(userCredential)
      router.push("/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      
    }
  };

 
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              'url("https://sdgresources.relx.com/sites/default/files/shorthand/18398/uWdc3Br6In/assets/HzGgPW5FMX/sdg-wheel-background_frame-0ms-1920x1080.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.6)",
            zIndex: -1,
          },
        }}
      />

      {/* Card */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Card
          sx={{
            width: 400,
            p: 3,
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(255,255,255,0.85)",
          }}
        >
          <Box display="flex" justifyContent="center" mb={2}>
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Box>
          <CardContent>
            <Typography variant="h5" textAlign="center" gutterBottom>
              {isLogin ? "Login to Your Account" : "Create an Account"}
            </Typography>

            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1 }}
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>

            {/* Google Login Button */}
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ mt: 2, py: 1 }}
              startIcon={<GoogleIcon />} // Google Icon
            >
              Sign in with Google
            </Button>

            <Button
              variant="text"
              color="primary"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Button>
          </CardContent>
        </Card>
      </Box>
      <GlobalSnackbar
        open={snackbarOpen}
        onClose={handleClose}
        vertical="top"
        horizontal="center"
      />
    </Box>
  );
};

export default Login;
