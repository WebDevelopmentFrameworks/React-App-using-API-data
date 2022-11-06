# React App using API data

This is a fun little school project. A simple react app, that displays data received through API call(s).

## To run locally

Make sure to include a `.env` file in the projects main directory. The file should include following variables:

#### `REACT_APP_API_KEY=apiKey=!Your-API-Key-Here!`
#### `REACT_APP_URL=https://api.spoonacular.com/recipes/`
#### `REACT_APP_AUTOCOMPLETE=${REACT_APP_URL}autocomplete?${REACT_APP_API_KEY}&number=5&query=`

API key requires registry, but no additional cost (usage limitations apply). API used: [https://spoonacular.com/food-api](https://spoonacular.com/food-api "Spoonacular")

Once done, run `npm start` in the project directory and enjoy
