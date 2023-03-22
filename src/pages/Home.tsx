import { Container, Typography } from "@mui/material";
import { InfoCard } from "../components/InfoCard";
import TaskManager from "./Student/TaskManager/TaskManager";
import { FeatureOverlay } from "../components/FeatureOverlay";
import AnimatedPage from "../components/AnimatePage";

export default function Home() {
  return (
    <AnimatedPage>
      <Container className="mt-20 mb-20">
        <Typography variant="h6">Latest News</Typography>
        <InfoCard />
        <Typography variant="h6">Assignments and Tasks</Typography>
        <TaskManager />
      </Container>
      <FeatureOverlay />
    </AnimatedPage>
  );
}
