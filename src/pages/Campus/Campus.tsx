import AnimatedPage from "../../components/AnimatePage";
import { Container, Typography, Tabs } from '@mui/material';
import TabNav from "../../components/Navigation/TabNav";
import Library from "./Library";
import AccountDepartment from "./AccounDepartment";
import Booking from "./Booking";

const Campus = () => {
  
  const tabs = [
    { label: 'Account Dept', path:"/campus/account_department", content: <AccountDepartment /> },
    { label: 'Library', path:"/campus/library", content: <Library /> },
    { label: 'Booking', path: "/campus/booking", content: <Booking />}
  ];

  return (
    <AnimatedPage>
      <Container className="mt-20 mb-20">
        <Typography variant="h6">Campus</Typography>
        <TabNav tabs={tabs} />
      </Container>
    </AnimatedPage>
  );
};

export default Campus;
