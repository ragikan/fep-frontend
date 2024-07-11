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
const SignUpProf = dynamic(() => import("../../admin/forgot-password/page"), {
  suspense: true,
});
const SignUpStudent = dynamic(() => import("../../student/forgot-password/page"), {
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
            <Suspense fallback={<CircularProgress />}>
              <SignUpStudent />
            </Suspense>
        </Stack>
      </Stack>
    </div>
  );
}

SignUp.layout = "Navigation";
export default SignUp;