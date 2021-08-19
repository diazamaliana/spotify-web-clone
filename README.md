<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/diazamaliana/spotify-web-clone">
    <img src="https://lh6.googleusercontent.com/6NBbMrteTE9XaPNzHuHSfuAQfugUFkXmAFE4LeaNObYg6rBSFHPVszZB1eZVe5d4h-B7in7PkCasTiEBKwzChci6MPoCK3gqeIb7uBXKqjgTFxyNA6_dsYwOTPilhUHKqA=w1280" alt="Logo" width="120" >
  </a>

  <h3 align="center">Spotigi - Generasi Gigih Final Project</h3>

  <p align="center">
    A replica of Spotify to Create a Playlist!
    <br />
    <a href="https://spotigi-diazamaliana.vercel.app/create-playlist"><strong>View Demo</strong></a>
    <br />
    <br />
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details >
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <img src="https://raw.githubusercontent.com/diazamaliana/spotify-web-clone/master/shoots/shoot-web-1.jpg" width='400' alt='shoot on web'/>
  <img src="https://raw.githubusercontent.com/diazamaliana/spotify-web-clone/master/shoots/shoot-mobile.jpg" width='151' alt='shoot on mobile' /> 
</p>

Spotigi is Spotify Generasi Gigih, a React front-end client that communicates with the Spotify API. This platform will connect to your Spotify account  that displays information about your playlists and create a new one.


### Built With

- [<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' width='16'/> Create React App](https://create-react-app.dev/) to initialize the project.
- [⚡️ Chakra UI](https://chakra-ui.com/docs/getting-started) for styling and layout.
- [<img src='https://react-redux.js.org/img/redux_white.svg' width='16'/> React Redux](https://react-redux.js.org/) for state management.
- [<img src='https://iconape.com/wp-content/files/sm/371377/svg/371377.svg' width='16'/> React Router](https://reactrouter.com/web/guides/quick-start) to define routes in the application.
- [🐙 react-testing-library](https://testing-library.com/) for testing.
- Written in [Javascript]('https://developer.mozilla.org/en-US/docs/Web/JavaScript') and [Typescript]('https://www.typescriptlang.org/').
- Hosted on [Vercel](https://vercel.com/)🚀.



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You’ll need to have Node >= 10.16, npm >= 6+ or yarn >= 0.25+
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get Spotify API CLIENT_ID and CLIENT_SECRET at [https://developer.spotify.com/](https://developer.spotify.com/dashboard/applications). Please refer to  the [Documentation](https://developer.spotify.com/documentation/general/guides/app-settings/).
2. Clone the repo
   ```sh
   git clone https://github.com/diazamaliana/spotify-web-clone.git
   ```
3. Go to the project directory
    ```sh
   cd spotify-web-clone
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Rename `.env.example` to `.env`. Enter your API to your `.env` file
   ```JS
   REACT_APP_BASE_URL=http://localhost:3000/
   REACT_APP_SPOTIFY_CLIENT_ID=YOURCLIENTID
   REACT_APP_SPOTIFY_CLIENT_SECRET=YOURCLIENTSECRET
   ```
6. Runs the app in development mode. Open http://localhost:3000 to view it in the browser
    ```sh
   npm start
   ```
   or 
    ```sh
   yarn start
   ```
7. Runs the test watcher in an interactive mode on your terminal
    ```sh
    yarn test __test__
    ```
    You will find this 
    <p align="center">
       <img src='https://raw.githubusercontent.com/diazamaliana/spotify-web-clone/master/shoots/__test__.jpg' alt='testing shoots'/>
    </p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_


<!-- CONTACT -->
## Contact

Diaz Amaliana - [@diazam.portfolio](https://www.instagram.com/diazam.portfolio/) - diazamaliana@gmail.com

