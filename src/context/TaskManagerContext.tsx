// import { createContext, useContext, useState } from "react";

// export type Task = {
//   title?: String;
//   description?: String;
//   date?: Date;
//   flag: "inbox" | "msu" | String;
//   completed: Boolean;
// };

// interface ITaskManagerProps {
//   task: Task;
//   taskList: Task[];
//   removeTask: Function;
//   setTask: Function;
//   setTaskList: Function;
// }

// const TaskManagerContext = createContext<ITaskManagerProps>({
//   task: {
//     title: "",
//     description: "",
//     date: new Date(),
//     flag: "inbox",
//     completed: false,
//   },
//   taskList: [],
//   removeTask: () => {},
//   setTask: () => {},
//   setTaskList: () => {},
// });

// type Props = {
//   children: React.ReactNode;
// };

// export const TaskManagerContextProvider = ({ children }: Props) => {
//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//     date: new Date(),
//     flag: "inbox",
//     completed: false,
//   });
//   const [taskList, setTaskList] = useState<Task[]>([]);

//   const removeTask = (index: Number) => {
//     setTaskList((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <TaskManagerContext.Provider
//       value={{
//         task: task,
//         taskList: taskList,
//         setTask: setTask,
//         setTaskList: setTaskList,
//         removeTask: removeTask,
//       }}
//     ></TaskManagerContext.Provider>
//   );
// };

// export const useTaskManagerContext = () => useContext(TaskManagerContext);
