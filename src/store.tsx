import { configureStore, createSlice } from "@reduxjs/toolkit";

type Product = {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
};

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 3450744,
    title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
    author: "Richard H. Thaler, Cass R. Sunstein",
    price: 10.79,
    description:
      "Every day we make choices—about what to buy or eat, about financial investments or our children’s health and education, even about the causes we champion or the planet itself. Unfortunately, we often choose poorly. Nudge is about how we make these choices and how we can make better ones. Using dozens of eye-opening examples and drawing on decades of behavioral science research, Nobel Prize winner Richard H. Thaler and Harvard Law School professor Cass R. Sunstein show that no choice is ever presented to us in a neutral way, and that we are all susceptible to biases that can lead us to make bad decisions. But by knowing how people think, we can use sensible “choice architecture” to nudge people toward the best decisions for ourselves, our families, and our society, without restricting our freedom of choice.",
  },
  {
    id: 2776527,
    title: "Traffic: Why We Drive the Way We Do and What It Says About Us",
    author: "Tom Vanderbilt",
    price: 14.99,
    description:
      "Would you be surprised that road rage can be good for society? Or that most crashes happen on sunny, dry days? That our minds can trick us into thinking the next lane is moving faster? Or that you can gauge a nation s driving behavior by its levels of corruption? These are only a few of the remarkable dynamics that Tom Vanderbilt explores in this fascinating tour through the mysteries of the road. Based on exhaustive research and interviews with driving experts and traffic officials around the globe, Traffic gets under the hood of the everyday activity of driving to uncover the surprisingly complex web of physical, psychological, and technical factors that explain how traffic works, why we drive the way we do, and what our driving says about us. Vanderbilt examines the perceptual limits and cognitive underpinnings that make us worse drivers than we think we are. He demonstrates why plans to protect pedestrians from cars often lead to more accidents. He shows how roundabouts, which can feel dangerous and chaotic, actually make roads safer and reduce traffic in the bargain. He uncovers who is more likely to honk at whom, and why. He explains why traffic jams form, outlines the unintended consequences of our quest for safety, and even identifies the most common mistake drivers make in parking lots. The car has long been a central part of American life; whether we see it as a symbol of freedom or a symptom of sprawl, we define ourselves by what and how we drive. As Vanderbilt shows, driving is a provocatively revealing prism for examining how our minds work and the ways in which we interact with one another. Ultimately, Traffic is about more than driving: it s about human nature. This book will change the way we see ourselves and the world around us. And who knows? It may even make us better drivers.",
  },
  {
    id: 1713426,
    title: "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
    author: "Dan Ariely",
    price: 11.99,
    description:
      'Why do our headaches persist after taking a one-cent aspirin but disappear when we take a 50-cent aspirin? Why does recalling the Ten Commandments reduce our tendency to lie, even when we couldn\'t possibly be caught? Why do we splurge on a lavish meal but cut coupons to save twenty-five cents on a can of soup? Why do we go back for second helpings at the unlimited buffet, even when our stomachs are already full? And how did we ever start spending $4.15 on a cup of coffee when, just a few years ago, we used to pay less than a dollar? When it comes to making decisions in our lives, we think we\'re in control. We think we\'re making smart, rational choices. But are we? In a series of illuminating, often surprising experiments, MIT behavioral economist Dan Ariely refutes the common assumption that we behave in fundamentally rational ways. Blending everyday experience with groundbreaking research, Ariely explains how expectations, emotions, social norms, and other invisible, seemingly illogical forces skew our reasoning abilities. Not only do we make astonishingly simple mistakes every day, but we make the same "types" of mistakes, Ariely discovers. We consistently overpay, underestimate, and procrastinate. We fail to understand the profound effects of our emotions on what we want, and we overvalue what we already own. Yet these misguided behaviors are neither random nor senseless. They\'re systematic and predictable--making us "predictably" irrational. From drinking coffee to losing weight, from buying a car to choosing a romantic partner, Ariely explains how to break through these systematic patterns of thought to make better decisions. "Predictably Irrational" will change the way we interact with the world--one small decision at a time.',
  },
  {
    id: 1618,
    title: "The Curious Incident of the Dog in the Night-Time",
    author: "Mark Haddon",
    price: 12.99,
    description:
      "Christopher John Francis Boone knows all the countries of the world and their capitals and every prime number up to 7,057. He relates well to animals but has no understanding of human emotions. He cannot stand to be touched. And he detests the color yellow. This improbable story of Christopher’s quest to investigate the suspicious death of a neighborhood dog makes for one of the most captivating, unusual, and widely heralded novels in recent years.",
  },
  {
    id: 11468377,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 21.99,
    description:
      "Engaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal lives—and how we can use different techniques to guard against the mental glitches that often get us into trouble. Thinking, Fast and Slow will transform the way you think about thinking.",
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_PRODUCTS,
  reducers: {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
