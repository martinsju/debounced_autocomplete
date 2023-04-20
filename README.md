[![Created by](https://img.shields.io/badge/made%20by%20-Julia%20Agra-9cf)](https://github.com/)

# Debounced Autocomplete

This project is the result of a test made in Codility, which aims to implement an AutoComplete component in React.

Here are some rules requested in the test statement:

1. In order to fetch items based on the current query, you should send a GET request to the mocked [https://example](https://example/). com/api/items endpoint. The endpoint requires a query parameter q that is meant to hold the query's value. The endpoint will fail if there will be no q query parameter provided.

2. The component should render a div element that has the class name wrapper and two child elements: a div element with the class name control and a div element with the class name list. The div element with class name control should contain an input element with the class name input, and this is the input in which the user enters a query.

3. Once a response comes from the API, all strings from the response should be displayed inside the div tag with class name list, each one inside a separate a element with the class name list-item. The strings should be displayed in the same order as they arrived in from the API.

4. You should avoid sending too many requests to the API; in particular, do not send requests on every single keypress! You are expected to properly debounce the requests. The debounce time-out should be 500 milliseconds.

5. When items are being fetched, a class name is-loading should be added to the input's wrapper (the element with class name control).

6. When items are being fetched, no request has been sent or the endpoint has returned zero items, the div element with class name list should not be rendered.

7. The component accepts the prop onSelectItem: (item: string) => void, which should be called with an item when the user clicks on it. Clicking on an item does not have any effect apart from calling the callback.

8. The component should be the default export and can be either a function or a class.

## Assumptions:

As the [https://example](https://example/) API is a mocked service-it and can only be accessed in the Codility UI, we will use the [https://reqres.in/api](https://reqres.in/api) API for this code, with the endpoint `/users`.

Also, the classes were kept in the code, the same as the original base code received, but for now we won't have styling of any part of the component.

The following imports are allowed:

- react (v16.9.0),
- classnames (v2.2.6),
- lodash (v4.17.14),
- axios (v0.19.2).

### See two examples given by the test statement:

## Example 1

Let's consider the following sequence of actions:

- The user types "q" into the input;
- After 50 ms the user presses "u", and then again, after every 50 ms, a new character is inserted until the input value is "query";
- Only one request to the API is sent, exactly 500 ms after "y" is inputted;
- During this period (from pressing "y" until the response comes in), the class name is-loading is added to the input's wrapper.

## Example 2

If the response from the API endpoint is:

["Italy", "Spain", "Portugal", "Macedonia"]

then the list section, which is rendered as follows:

### `<div class="list">`

### `<a class="list-item">Italy</a>`

### `<a class="list-item">Spain</a>`

### `<a class="list-item">Portugal</a>`

### `<a class="list-item">Macedonia</a>`

### `</div>"`

#

## How to run the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#

### Be part of our community

</br>

[![Discord Server](https://img.shields.io/badge/community-join%20us-brightgreen)](https://discord.gg/Q3kAnfXKev)
