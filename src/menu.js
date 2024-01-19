export default function createMenu() {
  const main = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.className = "menuContainer";
  main.appendChild(menuContainer);

  const menuLogo = document.createElement("h2");
  menuLogo.textContent = "Our menu";
  menuContainer.appendChild(menuLogo);

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menuContainer.appendChild(menu);

  const menuList = [
    {
      name: "Spicy Tuna Volcano Roll",
      ingredients:
        "Spicy tuna, avocado, cucumber, sriracha mayo, crispy tempura flakes.",
      src: "images/recipes/spicyTuna.jpg",
    },
    {
      name: "Rainbow Maki",
      ingredients:
        "Tuna, salmon, yellowtail, avocado, cucumber, masago, seaweed paper.",
      src: "images/recipes/maki.jpg",
    },
    {
      name: "Miso Glazed Black Cod Nigiri",
      ingredients:
        "Seared black cod marinated and glazed in miso, caramelized scallion topping, ginger garnish.",
      src: "images/recipes/cod.jpg",
    },
    {
      name: "Spicy Ahi Poke Bowl",
      ingredients:
        "Diced tuna, avocado, mango chunks, edamame, seaweed salad, white rice, sesame seeds, nori flakes.",
      src: "images/recipes/poke.jpg",
    },
    {
      name: "Sea & Sea Salad",
      ingredients:
        "Mixed greens, seaweed salad, wakame, sliced cucumber, sashimi-grade tuna or salmon, sesame seeds, yuzu dressing.",
      src: "images/recipes/salad.jpg",
    },
    {
      name: "Philadelphia Roll",
      ingredients:
        "Smoked salmon, cream cheese, cucumber, seaweed paper, sushi rice",
      src: "images/recipes/phil.jpg",
    },
  ];

  menuList.forEach((menuDish) => {
    const recipe = document.createElement("div");
    recipe.className = "recipe";

    const name = document.createElement("div");
    name.textContent = menuDish.name;

    const ingredients = document.createElement("p");
    ingredients.textContent = menuDish.ingredients;

    const picture = document.createElement("img");
    picture.src = menuDish.src;
    picture.alt = menuDish.name;

    recipe.appendChild(name);
    recipe.appendChild(ingredients);
    recipe.appendChild(picture);

    menu.appendChild(recipe);
  });
}
