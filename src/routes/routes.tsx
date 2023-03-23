import { AccountBalance, Email, Home, School } from "@mui/icons-material";
import AccountDepartment from "../pages/Campus/AccounDepartment";
import Campus from "../pages/Campus/Campus";
import Counselling from "../pages/Campus/Counselling";
import Library from "../pages/Campus/Library";
import Inbox from '../pages/Inbox/Inbox';
import CourseRegistration from '../pages/Student/Curriculum/CourseRegistration/CourseRegistration';
import Curriculum from "../pages/Student/Curriculum/Curriculum";
import LearningResources from '../pages/Student/Curriculum/LearningResources/LearningResources';
import Timetable from "../pages/Student/Curriculum/Timetable/Timetable";
import Student from "../pages/Student/Student";
import TaskManager from "../pages/Student/TaskManager/TaskManager";
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {
    index: true,
    path:"/home",
    element: <Home />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <Home />
    }
  },
  {
    path: "/student",
    element: <Student />,
    state: "student",
    sidebarProps: {
      displayText: "Student",
      icon: <School />,
    },
    child: [
      {
        path: "/student/taskmanager",
        element: <TaskManager />,
        state: "taskmanager.default",
        sidebarProps: {
          displayText: "Task Manager",
        },
        child: [
          {
            path: "/student/taskmanager/submission",
            element: <TaskManager />,
            state: "taskmanager.submission",
            sidebarProps: {
              displayText: "Submission"
            }
          },
          {
            path: "/student/taskmanager/tasks",
            element: <TaskManager />,
            state: "taskmanager.tasks",
            sidebarProps: {
              displayText: "Tasks"
            }
          },
        ],
      },
      {
        path: "/student/curriculum",
        element: <Curriculum />,
        state: "curriculum.default",
        sidebarProps: {
          displayText: "Curriculum",
        },
        child: [
          {
            path: "student/curriculum/timetable&calendar",
            element: <Timetable />,
            state: "timetable.classes",
            sidebarProps: {
              displayText: "Class Timetable",
            },
          },
          {
            path: "student/curriculum/statements&results",
            element: <Timetable />,
            state: "timetable.statements&results",
            sidebarProps: {
              displayText: "Statements & Results",
            },
            child: [
              {
                path: "student/curriculum/statements&results/exam_results",
                element: <Timetable />,
                state: "statements&results.examresults",
                sidebarProps: {
                  displayText: "Exam Results"
                }
              },
              {
                path: "student/curriculum/statements&results/gems_statement",
                element: <Timetable />,
                state: "statements&results.gems_statement",
                sidebarProps: {
                  displayText: "GEMS Statement"
                }
              },
              {
                path: "student/curriculum/statements&results/program_structure",
                element: <Timetable />,
                state: "statements&results.program_structure",
                sidebarProps: {
                  displayText: "Program Structure"
                }
              },
              {
                path: "student/curriculum/statements&results/internship",
                element: <Timetable />,
                state: "statements&results.internship",
                sidebarProps: {
                  displayText: "Internship"
                }
              },
            ],
          },
          {
            path: "student/curriculum/course_registration",
            element: <CourseRegistration />,
            state: "courseRegistration.default",
            sidebarProps: {
              displayText: "Course Registration"
            }
          },
          {
            path: "student/curriculum/learning_resources",
            element: <LearningResources />,
            state: "learningResources.default",
            sidebarProps: {
              displayText: "Learning Resources"
            }
          }
        ],
      },
    ],
  },
  {
    path: "/campus",
    element: <Campus />,
    state: "campus.default",
    sidebarProps: {
      icon: <AccountBalance />,
      displayText: "Campus"
    },
    child: [
      {
        path: "campus/account_department",
        element: <AccountDepartment />,
        state: "account_department.default",
        sidebarProps: {
          displayText: "Account Department"
        },
        child: [
          {
            path: "campus/account_department/payment",
            element: <AccountDepartment />,
            state: "account_department.payment",
            sidebarProps: {
              displayText: "Payment"
            }
          },
          {
            path: "campus/account_department/payment",
            element: <AccountDepartment />,
            state: "account_department.statement",
            sidebarProps: {
              displayText: "Statement"
            }
          },
          {
            path: "campus/account_department/payment",
            element: <AccountDepartment />,
            state: "account_department.appointments",
            sidebarProps: {
              displayText: "Appointments"
            }
          }
        ]
      },
      {
        path: "campus/library",
        element: <Library />,
        state: "library.default",
        sidebarProps: {
          displayText: "Library",
        },
        child: [
          {
            path: "campus/library/room_booking",
            element: <Library />,
            state: "library.room_booking",
            sidebarProps: {
              displayText: "Room Booking"
            }
          },
          {
            path: "campus/library/e-library",
            element: <Library />,
            state: "library.e-library",
            sidebarProps: {
              displayText: "e-Library"
            }
          }
        ]
      },
      {
        path: "campus/counselling",
        element: <Counselling />,
        state: "counselling.default",
        sidebarProps: {
          displayText: "Counselling"
        }
      }
    ]
  },
  {
    path: "/mail",
    element: <Inbox />,
    state: "inbox.default",
    sidebarProps: {
      displayText: "Inbox",
      icon: <Email />
    }
  }
];

export default appRoutes;
