import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Layout } from "../components/layout/layout";
import { FirstSection } from "./components/firstsection";
import { SecondSection } from "./components/secondsection";
import { ThirdSection } from "./components/thirdsection";
import { FourthSection } from "./components/fourthsection";
import { FifthSection } from "./components/fifthsection";
import { SixthSection } from "./components/sixthsection";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardWrapper>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </DashboardWrapper>
    </Layout>
  )
}

const DashboardWrapper = styled(Stack)(({ theme }) => ({
  gap: 80,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",

  [theme.breakpoints.down('lg')]: {
    gap: 50,
  }
}))

export { Dashboard };