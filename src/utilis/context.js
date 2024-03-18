import { createContext } from "react";

const contextCreated = createContext({
  info: { name: "excalibur", date: new Date().toLocaleDateString() },
});
export default contextCreated;
