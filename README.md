# Build React Routing

Topics:

* React Router
* Using Link to navigate to specific routes
* Passing Route Parameters
* Passing props to components rendered by the Router

## Instructions

### Task 1: Project Set-up

* [ ] **Fork** this repository, then clone your fork.
* [ ] **NOTE** You have 2 servers that you will be running here so read these instructions carefully.
* [ ] **In the root of this directory**: Run `npm install` to download dependencies.
* [ ] Run the server using `npm start` or `node server.js`. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future).
* [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
* [ ] Still inside the `client` folder run `npm start` to run the client application.

* [ ] Once your application is up and running on the client, you should see a browser window that looks like [this](https://tm.gabischool.com/assets/themes/admin/images/TM/section_two/week_one/day_four/movies-home.png) at `localhost:3000` (although the port number will be different if 3000 is not being used).

### Task 2: MVP

#### Design Files

Once you are done your application will have two routes:

* [ ] [Screenshot of route '/'](https://tm.gabischool.com/assets/themes/admin/images/TM/section_two/week_one/day_four/first-route.png)
* [ ] [Screenshot of route '/movies/:id'](https://tm.gabischool.com/assets/themes/admin/images/TM/section_two/week_one/day_four/second-route.png)

#### Set up Routes

* [ ] Wrap your app with the router.
* [ ] Inside your App.js file add two routes.
  * [ ] one route for `/` that loads the `MovieList` component. This component will need a prop from the state in App.js.
  * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `MovieCard` component.

#### Add Functionality

* [ ] When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/{id of clicked movie here}` to see the details of the selected movie.
* [ ] You will need to modify line 7 of `MovieCard.js` to get the id of the selected movie from the URL.
* [ ] Find `Home` button inside `SavedList.js` and Add functionality so it navigates back to home.
* [ ] You should now be able to navigate back and forth between the list of movies and the detailed view of a single movie.

### Task 3: Stretch Goals

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

#### Refactor so that our code is DRY

* [ ] You may notice that we are using very similar JSX in the `MovieCard` component and in the `MovieList.js` component. The main difference is the list of stars, which only exists in the "detailed" view of the `MovieCard` component.
* [ ] Create a new component in `MovieInfo.js` that returns a Movie Card. Then remove the old code from `MovieCard` and `MovieList` and instead return the new `MovieInfo` component.
* [ ] The Movie Info should be flexible enough to handle displaying a movie with or without the list of stars.

#### Add `Save Movie` functionality

* [ ] You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button. You will need to uncomment lines 24-27 in `MovieCard.js` to complete this.

#### Add functionality to add movies

* [ ] Create a component called `MovieAdd` and use the `POST` api in the `server.js` to make a post request using axios. Create a basic form to handle the input and submit the data to the API. Make sure to create ids automatically.

#### Turn your Saved Movie list into `Link`s

* [ ] Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.


## Submission Format

* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
