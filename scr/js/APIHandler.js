export async function getFeaturedRecipes() {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  const data = await response.json();
  return data.meals;
}

export async function getRecipeDetails(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals[0];
}

export async function getCategory() {
  const response = await fetch(
    `https://themealdb.com/api/json/v1/1/categories.php?c=list`
  )
  const data = await response.json();
  return data.categories;
}

export async function getRecipeDetails2(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php?c=${id}`
  );
  const data = await response.json();
  return data.categories[0];
}