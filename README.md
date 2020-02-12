# native-pokemon

The purpose of this app is to create a simple app that basically lists all the monsters of Pokémon and displays some information when yoy click on the cards.

It displays a list of scrollable items, each item contains the pokemon's name and the back image.

When an item is pressed it shows some info related to the pokemon, the front image and it makes the cry sound associated.

You can search pokemons by its name in the Search bar and you will obtain a filtered list automatically.

## Development details

I've used Expo (https://expo.io/learn) to create this project.

The data is fetched from PokeAPI, documentation: https://pokeapi.co/docs/v2.html

## Instructions

You need to be using Node (https://nodejs.org/en/), last version recommended.

To start, run:

```
yarn
expo start
```

I have added some unit tests to check simple rendering, you can run them with:

```
yarn test
```

## Preview

> Click on the gif preview to view a video with sound.

[![Preview](https://media.giphy.com/media/L12IQADcc9nHHlyDps/giphy.gif)](https://www.youtube.com/watch?v=awlga7aAhe4)
