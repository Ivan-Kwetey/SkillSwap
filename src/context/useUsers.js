import { useContext } from "react";
import { UsersContext } from "./usersContextObject";

export const useUsers = () => useContext(UsersContext);
