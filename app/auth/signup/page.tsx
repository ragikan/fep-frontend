"use client"
import React, { Suspense, useState } from "react";
import {
  CircularProgress,
  FormControl,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
const SignUpProf = dynamic(() => import("../../admin/signup/page"), {
  suspense: true,
});
const SignUpStudent = dynamic(() => import("../../student/signup/page"), {
  suspense: true,
});

function SignUp() {
  const [role, setRole] = useState(0);

  const handleRole = (event: React.SyntheticEvent, newRole: number) => {
    setRole(newRole);
  };

  function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        spacing={10}
        style={{width:"100%"}}
    >
        <Stack
          spacing={2}
          justifyContent="flex-start"
          alignItems="center"
          sx={{ minHeight: "70vh" }}
          style={{width:"100%"}}
        >
          {/* <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <h2>Welcome!</h2>
            <h2>Sign up to</h2>
            <Typography variant="subtitle1" color="text.secondary">
              FTP
            </Typography>
          </FormControl> */}
          <FormControl style={{width: "100%" }} variant="outlined">
            <Tabs
              centered
              value={role}
              onChange={handleRole}
              textColor="inherit"
              aria-label="full width tabs example"
            >
              <Tab label="Student" {...a11yProps(0)} />
              <Tab label="Professor" {...a11yProps(1)} />
            </Tabs>
          </FormControl>
          {role === 0 ? (
            <Suspense fallback={<CircularProgress />}>
              <SignUpStudent />
            </Suspense>
          ) : (
            <Suspense fallback={<CircularProgress />}>
              <SignUpProf />
            </Suspense>
          )}
        </Stack>
      </Stack>
    </div>
  );
}
SignUp.layout="Navigation";
export default SignUp;