// ============================================================
//  RECIPES DATA FILE
//  To add a new recipe, copy the template at the bottom
//  and paste it into the RECIPES array.
// ============================================================
 
const RECIPES = [
  {
    id: 1,
    title: "Chicken Bhuna",
    category: "Curry",
    serves: 4,
    time: "1 hr 30 min",
    description: "A rich, deeply spiced bhuna with marinated chicken, jammy tomatoes, and a fragrant tarka finish.",
    ingredients: [
      { amount: 0.5, unit: "cup", name: "edible mustard oil" },
      { amount: 4, unit: "lb", name: "chicken parts (1 whole chicken, cut up)" },
      { amount: 1, unit: "lb", name: "potatoes, bite-sized cubes" },
      { amount: 2, unit: "tsp", name: "garlic paste" },
      { amount: 2, unit: "tsp", name: "ginger paste" },
      { amount: 5, unit: "", name: "cardamom pods" },
      { amount: 3, unit: "", name: "bay leaves" },
      { amount: 1, unit: "", name: "cinnamon stick (2 inch)" },
      { amount: 1, unit: "tsp", name: "fennel seeds, toasted & crushed" },
      { amount: 4, unit: "", name: "large tomatoes, grated" },
      { amount: 1, unit: "tbsp", name: "tomato paste" },
      { amount: 1, unit: "tsp", name: "curry powder (heaped)" },
      { amount: 4, unit: "", name: "green chillies, slit lengthways" },
      { amount: 2, unit: "", name: "medium onions, diced" },
      { amount: 0.5, unit: "", name: "green pepper, diced" },
      { amount: 1.5, unit: "tsp", name: "salt" },
      { amount: 0.25, unit: "cup", name: "cilantro (stems chopped, leaves reserved)" },
      { amount: 0.25, unit: "cup", name: "coconut milk" },
      { amount: 2, unit: "tbsp", name: "cream of coconut" },
      { amount: 0.5, unit: "cup", name: "plain yogurt (marinade)" },
      { amount: 0.5, unit: "tsp", name: "turmeric" },
      { amount: 1, unit: "tsp", name: "chilli powder" },
      { amount: 1, unit: "tsp", name: "garam masala powder" },
      { amount: 1, unit: "tsp", name: "cumin powder" },
      { amount: 1.5, unit: "tsp", name: "coriander powder" },
      { amount: 1, unit: "tbsp", name: "ghee (tarka)" },
      { amount: 0.5, unit: "tsp", name: "cumin seeds (tarka)" },
      { amount: 1, unit: "", name: "dried red chilli (tarka)" }
    ],
    steps: [
      { title: "Marinate the chicken", text: "Score the chicken pieces deeply — several slashes down to the bone on thighs and drumsticks. Combine yogurt with half the spice mix (turmeric, chilli powder, garam masala, cumin, coriander) and salt. Coat the chicken, cover and refrigerate for at least 30 minutes.", timer: 1800 },
      { title: "Toast the fennel seeds", text: "In a dry pan over medium heat, toast fennel seeds for about 60 seconds until fragrant. Remove and lightly crush. Set aside.", timer: 60 },
      { title: "Sear the chicken", text: "Heat mustard oil in a large heavy-bottomed pot over medium-high heat. Working in batches, sear the marinated chicken pieces skin-side down for 3–4 minutes per side until deep golden brown. Remove and set aside.", timer: 480 },
      { title: "Bloom the whole spices", text: "Reduce heat to medium. In the same pot, add cinnamon, bay leaves, and cardamom. Stir for about 90 seconds until fragrant. Add curry powder and stir briefly.", timer: 90 },
      { title: "Cook the onions", text: "Add onions, green pepper, and green chillies. Add a pinch of salt and the crushed fennel seeds. Lid on, cook 2 minutes. Check — onions should be softening. Cook another 2 minutes if needed. Splash of water if anything sticks.", timer: 240 },
      { title: "Add garlic, ginger & ground spices", text: "Add garlic and ginger paste. Stir and sizzle 1 minute. Add the remaining spice mix. Stir constantly for 30–60 seconds — keep moving to avoid burning.", timer: 60 },
      { title: "Build the tomato base", text: "Add grated tomatoes and tomato paste. Stir well and reduce for about 5 minutes until the mixture darkens, thickens, and oil begins to separate. Stir in chopped cilantro stems.", timer: 300 },
      { title: "Return chicken & add potatoes", text: "Nestle the seared chicken back into the sauce. Add potatoes and 1 cup of water. Stir gently, bring to a simmer, lid on.", timer: 60 },
      { title: "Simmer until done", text: "Cook 30 minutes with the lid on, checking every 5–7 minutes. Add water if dry. Done when sauce is thick, glossy, and clings to the chicken.", timer: 1800 },
      { title: "Finish with coconut & cilantro", text: "Remove from heat. Stir in coconut milk and cream of coconut off the heat. Scatter reserved cilantro leaves.", timer: null },
      { title: "Make the tarka & serve", text: "Heat ghee in a small pan until foaming. Add cumin seeds and dried red chilli. Sizzle 30 seconds until seeds pop. Pour sizzling tarka over the dish and serve immediately with basmati rice or naan.", timer: 30 }
    ]
  },
 
  {
    id: 2,
    title: "Ramen Chicken Meatballs",
    category: "Japanese",
    serves: 4,
    time: "35 min",
    description: "Umami-packed chicken meatballs seasoned with miso, ginger and sesame — poached directly in ramen broth so they soak up every drop of flavour.",
    ingredients: [
      { amount: 500, unit: "g", name: "ground chicken" },
      { amount: 2, unit: "tsp", name: "soy sauce" },
      { amount: 1, unit: "tsp", name: "sesame oil" },
      { amount: 2, unit: "tsp", name: "fresh ginger, finely grated" },
      { amount: 2, unit: "", name: "garlic cloves, minced" },
      { amount: 1, unit: "tbsp", name: "white miso paste" },
      { amount: 1, unit: "tsp", name: "mirin" },
      { amount: 0.25, unit: "tsp", name: "white pepper" },
      { amount: 2, unit: "tsp", name: "cornstarch" },
      { amount: 1, unit: "", name: "egg yolk" },
      { amount: 3, unit: "", name: "green onions, finely minced" }
    ],
    steps: [
      { title: "Mix the meatball mixture", text: "In a large bowl, combine ground chicken, soy sauce, sesame oil, ginger, garlic, miso paste, mirin, white pepper, cornstarch, egg yolk, and green onions. Mix well with your hands or a fork until everything is evenly incorporated. Do not over-mix or the meatballs will be tough.", timer: null },
      { title: "Chill the mixture", text: "Cover the bowl and refrigerate for at least 20 minutes. This firms up the mixture so it's much easier to roll, and lets the flavours meld.", timer: 1200 },
      { title: "Shape the meatballs", text: "With lightly dampened hands, roll the mixture into small balls about 2–3 cm (1 inch) wide — roughly the size of a large grape. Aim for bite-sized so they fit on a ramen spoon. You should get about 20–24 meatballs.", timer: null },
      { title: "Poach in broth", text: "Bring your ramen broth to a gentle simmer. Drop the meatballs in and poach for 8–10 minutes, turning once halfway, until cooked through (internal temperature 74°C / 165°F). They will enrich the broth as they cook.", timer: 540 },
      { title: "Serve", text: "Assemble your ramen bowls with noodles and broth, then add 4–6 meatballs per bowl. Garnish with extra sliced green onion and a drizzle of sesame oil if desired.", timer: null }
    ]
  }
 
  ,{
    id: 3,
    title: "Herb & Raisin Dutch Oven Bread",
    category: "Bread",
    serves: 8,
    time: "~14 hrs (mostly rising)",
    description: "A rustic no-knead Dutch oven bread made with whole wheat flour, fresh herbs, and sweet raisins — crusty outside, soft and fragrant inside.",
    ingredients: [
      { amount: 2, unit: "cup", name: "whole wheat flour" },
      { amount: 1.5, unit: "cup", name: "all-purpose flour" },
      { amount: 1, unit: "tsp", name: "instant or active dry yeast" },
      { amount: 1.5, unit: "tsp", name: "salt" },
      { amount: 0.75, unit: "cup", name: "raisins" },
      { amount: 1, unit: "tbsp", name: "fresh rosemary, finely chopped" },
      { amount: 1, unit: "tbsp", name: "fresh thyme leaves" },
      { amount: 1, unit: "tbsp", name: "honey" },
      { amount: 1.5, unit: "cup", name: "warm water" },
      { amount: 1, unit: "tsp", name: "olive oil, for greasing" }
    ],
    steps: [
      { title: "Mix the dough", text: "Whisk together whole wheat flour, all-purpose flour, yeast, and salt. Stir in raisins, rosemary, and thyme. Dissolve honey into warm water, then pour into the dry ingredients. Stir until a shaggy, sticky dough forms — no need to knead.", timer: null },
      { title: "First rise", text: "Cover the bowl with a damp towel or plastic wrap. Let it rise at room temperature for 12–18 hours, until doubled in size and covered in bubbles.", timer: 43200 },
      { title: "Shape the loaf", text: "Turn the dough out onto a lightly floured surface. With floured hands, fold the edges into the center a few times to form a rough ball. Place on parchment paper, cover loosely, and let it rest while the oven preheats.", timer: 1800 },
      { title: "Preheat the Dutch oven", text: "Place your Dutch oven (with lid on) into the oven and preheat to 450°F (230°C) for at least 30 minutes.", timer: 1800 },
      { title: "Bake covered", text: "Carefully remove the hot Dutch oven. Using the parchment paper as a sling, lower the dough into the pot. Cover with the lid and bake for 30 minutes.", timer: 1800 },
      { title: "Bake uncovered", text: "Remove the lid and bake for another 12–15 minutes, until the crust is deep golden brown and the loaf sounds hollow when tapped on the bottom.", timer: 900 },
      { title: "Cool before slicing", text: "Lift the bread out onto a wire rack using the parchment paper. Let it cool for at least 30 minutes before slicing.", timer: 1800 }
    ]
  }
 
  // ── ADD NEW RECIPES BELOW THIS LINE ─────────────────────────
  //
  // Template:
  // ,{
  //   id: 4,                          // increment for each new recipe
  //   title: "Recipe Name",
  //   category: "Category",           // e.g. Curry, Pasta, Baking, Soup
  //   serves: 4,
  //   time: "45 min",
  //   description: "One line description.",
  //   ingredients: [
  //     { amount: 1, unit: "cup", name: "ingredient name" },
  //     { amount: 2, unit: "tsp", name: "spice" },
  //     { amount: 3, unit: "",    name: "whole item (no unit needed)" }
  //   ],
  //   steps: [
  //     { title: "Step name", text: "Instructions here.", timer: 300 },  // timer in seconds, or null
  //     { title: "Step name", text: "Instructions here.", timer: null }
  //   ]
  // }
];
 
