import React from "react";
import { AppContext } from "../context/App.context";

export default function useNav() {
  const { navExpanded, openNav, closeNav } = React.useContext(AppContext);
  return { navExpanded, openNav, closeNav };
}
