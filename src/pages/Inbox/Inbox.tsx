import AnimatedPage from "../../components/AnimatePage";
import { Avatar, Container, IconButton, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import { AddCircle } from "@mui/icons-material";
import MessageIcon from "@mui/icons-material/Message";
import MessageTabs from "./MessageTabs";

export default function Inbox() {
  const [tab, setTab] = useState("Messages");

  return (
    <AnimatedPage>
      <Container className="mt-20 mb-20">
        <TabContext value={tab}>
          <Tabs
            value={tab}
            onChange={(event: React.SyntheticEvent, newValue: string) => {
              setTab(newValue);
            }}
            textColor="primary"
            variant="scrollable"
            TabIndicatorProps={{
              style: { backgroundColor: "red" },
            }}
          >
            <Tab label="Messages" value="Messages" className="text-[0.8rem]" />
            <Tab label="MSU Mail" value="MSU Mail" className="text-[0.8rem]" />
            <Tab
              label="Notification"
              value="Notification"
              className="text-[0.8rem]"
            />
          </Tabs>
          <TabPanel value="Messages" className="p-0 mt-4">
            {messages.map((message) => (
              <div className="flex gap-2 bg-neutral-200 p-2 my-1 rounded-md items-center">
                <div className="w-1/6">
                  <Avatar className="object-contain m-auto" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{message.userName}</p>
                    <p className="text-[0.6rem]">
                      {new Date(message.time).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                  <p className="text-xs">
                    {message.status == "sent" ? (
                      <span className="text-teal-500">/ </span>
                    ) : (
                      <span className="text-teal-500">// </span>
                    )}
                    <span className="text-teal-500 font-semibold"></span>
                    {message.message}
                  </p>
                </div>
                <IconButton centerRipple className="absolute bottom-20 right-2">
                  <MessageIcon className="text-red-600 text-6xl" />
                </IconButton>
              </div>
            ))}
          </TabPanel>
          <TabPanel value="MSU Mail" className="p-0 mt-4">
            {msuMail.map((mail) => (
              <div className="flex gap-2 bg-neutral-200 p-2 my-1 rounded-md items-center overflow-clip">
                <div className="w-1/6">
                  <Avatar className="object-contain m-auto" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">{mail.department}</p>
                    <p className="text-[0.6rem]">
                      {new Date(mail.time).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                  <p className="text-xs truncate">
                    {mail.isRead == true ? (
                      <span className="text-teal-500">/ </span>
                    ) : (
                      <span className="text-teal-500">// </span>
                    )}
                    <span className="text-teal-500 font-semibold"></span>
                    {mail.body}
                  </p>
                </div>
                <IconButton centerRipple className="absolute bottom-20 right-2">
                  <MessageIcon className="text-red-600 text-6xl" />
                </IconButton>
              </div>
            ))}
          </TabPanel>
          <TabPanel value="Notification" className="p-0 mt-4">
            <div className="bg-pink-500">Notification</div>
          </TabPanel>
        </TabContext>
      </Container>
    </AnimatedPage>
  );
}
const messages = [
  {
    userId: 1,
    userName: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "Hello, how are you?",
    time: "2022-05-14T09:30:00",
    status: "sent",
  },
  {
    userId: 2,
    userName: "Bob",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    message: "I'm doing well, thanks for asking!",
    time: "2022-05-14T09:35:00",
    status: "sent",
  },
  {
    userId: 1,
    userName: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "That's good to hear!",
    time: "2022-05-14T09:40:00",
    status: "sent",
  },
  {
    userId: 2,
    userName: "Bob",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    message: "How about you?",
    time: "2022-05-14T09:45:00",
    status: "sent",
  },
  {
    userId: 1,
    userName: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "I'm doing well too, thanks!",
    time: "2022-05-14T09:50:00",
    status: "sent",
  },
];

const msuMail = [
  {
    id: 1,
    department: "Admissions",
    sender: "admissions@university.edu",
    recipient: "student@university.edu",
    subject: "Application Status",
    time: "2023-05-15T10:30:00",
    body: "Your application has been approved. Congratulations!",
    isRead: true,
  },
  {
    id: 2,
    department: "Student Services",
    sender: "studentservices@university.edu",
    recipient: "student@university.edu",
    subject: "Course Registration",
    time: "2023-05-15T13:45:00",
    body: "Reminder: Course registration opens tomorrow.",
    isRead: false,
  },
  {
    id: 3,
    department: "Financial Aid",
    sender: "financialaid@university.edu",
    recipient: "student@university.edu",
    subject: "Scholarship Award",
    time: "2023-05-16T09:15:00",
    body: "Congratulations! You have been awarded a r.",
    isRead: false,
  },
  {
    id: 4,
    department: "Library",
    sender: "library@university.edu",
    recipient: "student@university.edu",
    subject: "Book Due Date Reminder",
    time: "2023-05-16T14:30:00",
    body: "Please return the borrowed book by the due date to avoid late fees.",
    isRead: false,
  },
  // Add more messages here
];
