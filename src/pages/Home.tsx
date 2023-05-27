import { InfoCard } from "../components/InfoCard";
import TaskManager from "./Student/TaskManager/TaskManager";
import { FeatureOverlay } from "../components/FeatureOverlay";
import { Container, Typography } from "@mui/material";
import QuickMenu from "../components/QuickMenu";

export default function Home() {
  return (
    <>
      <Container className="mt-20 mb-20">
        <QuickMenu />
        <Typography variant="h6">Latest News</Typography>
        <InfoCard />
        <Typography variant="h6">Assignments and Tasks</Typography>
        <TaskManager />
      </Container>
      <FeatureOverlay />
    </>
  );
}
