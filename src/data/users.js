import { normalizeUsers } from "../utils/normalizeUsers";
import rawUsers from "./rawUsers"; // fetched API users or local mock
export const users = normalizeUsers(rawUsers);
