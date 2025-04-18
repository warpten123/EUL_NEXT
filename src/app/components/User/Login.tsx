"use client"
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // <-- visibility state

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url("https://sdgresources.relx.com/sites/default/files/shorthand/18398/uWdc3Br6In/assets/HzGgPW5FMX/sdg-wheel-background_frame-0ms-1920x1080.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.6)',
            zIndex: -1,
          },
        }}
      />

      {/* Card */}
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Card sx={{ width: 400, p: 3, backdropFilter: 'blur(4px)', backgroundColor: 'rgba(255,255,255,0.85)' }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Box>
          <CardContent>
            <Typography variant="h5" textAlign="center" gutterBottom>
              {isLogin ? 'Login to Your Account' : 'Create an Account'}
            </Typography>

            {!isLogin && (
              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}

            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
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
              type={showPassword ? 'text' : 'password'}
              margin="normal"
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

            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, py: 1 }}>
              {isLogin ? 'Login' : 'Sign Up'}
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
                : 'Already have an account? Login'}
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
