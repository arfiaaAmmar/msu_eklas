import { Box, Button, Slide } from "@mui/material";

type QrScanProps = {
  isOpen: boolean;
  onClose: () => void;
};

const QrScan = (props:QrScanProps) => {
  return (
    <Slide direction="up" in={props.isOpen} mountOnEnter unmountOnExit>
      <Box
        position="fixed"
        bottom={0}
        left={0}
        width="100%"
        bgcolor="white"
        boxShadow="0px -4px 10px rgba(0, 0, 0, 0.2)"
        p={2}
      >
        {/* Overlay content goes here */}
        <Button onClick={props.onClose}>Close Overlay</Button>
      </Box>
    </Slide>
  );
};

export default QrScan;
