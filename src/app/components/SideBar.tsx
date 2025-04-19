"use client";

import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import {
  AppProvider,
  Branding,
  Navigation,
  Router,
} from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LogoutIcon from "@mui/icons-material/Logout";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import Grid from "@mui/material/Grid";
import TestPage from "../test/page";
import Image from "next/image";
import WhatsGoingOn from "./Dashboard/WhatsGoingOn";
import { onAuthStateChanged, User } from "firebase/auth";
import useAuthFirebase from "../hooks/useAuthFirebase";
import { useRouter } from "next/navigation";
import { auth } from "../auth/config";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "classify",
    title: "Classify",
    icon: <ReceiptIcon />,
    children: [
      {
        segment: "upload-sdg-paper",
        title: "Classify Research Paper",
        icon: <CloudUploadIcon />,
      },
      {
        segment: "upload-article-links",
        title: "Classify News Article",
        icon: <NewspaperIcon />,
      },
    ],
  },

  {
    segment: "dashboard",
    title: "The SDGs",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Your SDGs",
    icon: <InventoryIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "System",
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <SettingsIcon />,
    children: [
      {
        segment: "account",
        title: "Account",
        icon: <AccountCircleIcon />,
      },
      {
        segment: "logout",
        title: "Logout",
        icon: <LogoutIcon />,
      },
    ],
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);


  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DashboardLayoutBasic(props: any) {
  //firebase related user shit
  const routerLogout = useRouter(); 
  const { getCurrentUser,logout } = useAuthFirebase();
  const [loggedUser, setLoggedUser] = React.useState<User | null>();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user); 
      } else {
        setLoggedUser(null); 
      }
    });
  
    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [getCurrentUser]);
  console.log(loggedUser)
  //end firebase related user shit
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  const dashboardProps: Branding = {
    title: `Welcome ${loggedUser?.displayName}`,
    logo: (
      <Image src="/images/main-logo.webp" alt="Logo" width={50} height={100} />
    ),
    homeUrl: "/",
  };
  
  const handleLogout = async () => {
    try {
    
      await logout(); 
      setLoggedUser(null);
      routerLogout.push("/login");

    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  
  
  const renderContent = (pathname: string) => {
    switch (pathname) {
      case "/classify/upload-sdg-paper":
        return <TestPage />;
      case "/dashboard":
        return <WhatsGoingOn />;
      case "/settings/logout":
         handleLogout()
         return null
      default:
        return (
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        );
    }
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={dashboardProps}
    >
      <DashboardLayout>
        <PageContainer>{renderContent(router.pathname)}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
