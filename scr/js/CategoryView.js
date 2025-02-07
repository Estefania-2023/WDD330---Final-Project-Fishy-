import { createElement } from './utils';
import { getCategory, getRecipeDetails2 } from './APIHandler';

function CategoriesView() {
  const title = createElement('h2', {
    textContent: 'Other Categories',
    className: 'RV-title',
  });
  const recipesSection = createElement('div', {
    className: 'RV-recipes-section',
  });

//categories without link, just category view
// name : "strCategory" 
// id : "idCategory"
// image : "strCategoryThumb"
// description : "strCategoryDescription"
getCategory().then((recipes) => {
    const recipesPromises = recipes.map((recipe) =>
      getRecipeDetails2(recipe.idCategory)
    );
Promise.all(recipesPromises).then((detailedRecipes) => {
  detailedRecipes.forEach((recipe) => {
     const recipeCard = createElement(
      'div',
      { className: 'RV-recipe-card' },
      [
        createElement('h3', {
          textContent: recipe.strCategory,
          className: 'RV-recipe-title',
        }),
        createElement('img', {
          src: recipe.strCategoryThumb,
          alt: recipe.strCategory,
          className: 'RV-recipe-image',
        }),
        createElement('p', {
          textContent: 'Ingredients: ',
          className: 'RV-ingredientH',
        }),
        createElement(
          'ul',
          {},
          ingredientsList.map((ingredient) =>
            createElement('li', {
              textContent: ingredient,
              className: 'RV-ingredient-item',
            })
          )
        ),
        createElement('p', {
          textContent: recipe.strCategoryDescription,
          className: 'RV-recipe-instructions',
        }),
      ]
    );

    recipesSection.appendChild(recipeCard);
  });
});
});

return createElement('div', {}, [title, recipesSection]);
            }
            export default CategoriesView;

