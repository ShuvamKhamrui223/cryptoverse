import { API_Endpoints } from "../config/api";

// function returns a list of popular recipes from dummyjson api
export const getPopularRecipes = async () => {
  const response = await fetch(API_Endpoints.popularRecipes);
  if (response.ok) return response.json();
  return null;
};
export const getPaginatedRecipes = async (pageNumber) => {
  const response = await fetch(
    `https://dummyjson.com/recipes?limit=10&skip=${pageNumber}`
  );
  const data = await response.json();
  if (data) return data;
  return null;
};

// function returns either a single result or a list of results based on search query from either dummyjson or mealdb
export const searchRecipeByName = async ({ q }) => {
  const response = await fetch(`${API_Endpoints.searchViaMealDB}${q}`);
  const data = await response.json();
  if (data) return data;
  // else if (data?.total === 0) {
  //   const response = await fetch(
  //     `www.themealdb.com/api/json/v1/1/search.php?s=${q}`
  //   );
  //   const data = await response.json();
  //   return data;
  // }

  return null;
};

// function returns a list of  from dummyjson api
export const getTags = async () => {
  const response = await fetch("https://dummyjson.com/recipes/tags");
  const data = await response.json();
  // data ? data : null;
  return data;
};
// function returns a list of  from dummyjson api
export const getRecipeByTag = async (tag) => {
  const response = await fetch(`API_Endpoints.tags${tag}`);
  const data = await response.json();
  // data ? data : null;
  return data;
};
