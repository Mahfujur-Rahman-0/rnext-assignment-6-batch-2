"use client";
import { useContext } from "react";
import { DataContext } from "./context";

export default function useDataContext() {
	return useContext(DataContext);
}
