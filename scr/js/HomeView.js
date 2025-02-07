import { createElement } from './utils';
import { getFeaturedRecipes } from './APIHandler';
import heroImg from '../images/hero_path.jpg';

function HomeView() {
  const hero = createElement('img', {
    src: heroImg,
    alt: 'Fishy Hero Image',
    className: 'hero',
  });
  const title = createElement('h2', {
    textContent: 'Get to Know Us!',
    className: 'title-heading',
  });
  const intro = createElement('p', {
    textContent:
      "Welcome to Fishy, your go-to source for delightful seafood recipes! Based in the heart of community of seafood makers, Fishy is dedicated to helping you discover the joy of homemade seafood goods and would makes you to disfrut all the exquisite plates. From Grilled Portuguese sardines, Spring onion and prawn empanadas, our mission is to provide you with easy-to-follow recipes, sourced from renowned chefs for every skill level. Whether you're a seasoned cooker or just starting out, our collection features a variety of delicious options and classic seafoods.",
    className: 'intro-paragraph',
  });
  const invite = createElement('p', {
    textContent:
      'At Fishy, we believe that cooking seafood food should be accessible and rewarding—a way to bring loved ones together, a delicious seafood plate at a time. Come explore and create with the magnificous recipes!',
    className: 'intro-paragraph',
  });

  const featuredSection = createElement('div', {
    className: 'featured-section',
  });

  getFeaturedRecipes().then((recipes) => {
    // Randomly select up to 4 recipes
    const selectedRecipes = recipes.sort(() => 0.5 - Math.random()).slice(0, 4);
    const recipeList = selectedRecipes.map((recipe) =>
      createElement('div', { className: 'recipe-card' }, [
        createElement('h4', { textContent: recipe.strMeal }),
        createElement('img', { src: recipe.strMealThumb, alt: recipe.strMeal }),
        createElement('button', {
          textContent: 'Explore More',
          className: 'explore-button',
          onclick: () => {
            window.location.hash = '#/recipes';
          },
        }),
      ])
    );
    featuredSection.append(...recipeList);
  });

  return createElement('div', {}, [
    hero,
    title,
    intro,
    invite,
    featuredSection,
  ]);
}

export default HomeView;
