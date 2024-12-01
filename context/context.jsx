"use client";
import categories from "../data/categories.json";
import recipes from "../data/recipes.json";

import { createContext, useState } from "react";

export const DataContext = createContext();

export default function ContextProvider({ children }) {
	const [categoriesdata, setCategoriesData] = useState({});
	const [recipesData, setRecipesData] = useState({});
	console.log("categories", categories);
	console.log("recipes", recipes);
	return (
		<DataContext.Provider
			value={{
				categoriesdata,
				setCategoriesData,
				recipesData,
				setRecipesData,
				categories,
				recipes,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}
