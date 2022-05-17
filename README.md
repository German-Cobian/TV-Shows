![](https://img.shields.io/badge/Microverse-blueviolet)

# TV-Shows

This website displays TV shows that include the word "comedy in their title. The user can input "likes" as well as comments on the shows of his/her choice. 

![Display all](/src/img/Display-all.png?raw=true "Display all shows")

The comment button brings up a popup window with information regarding the show (title, network, genre, language, rating and a short description of the plot), the comments posted by other users, as well as the form for the current user to input a comment.

![Comment pop-up](/src/img/Comment-pop-up.png?raw=true "Comment pop-up")

The application makes API calls to the [TVMAZE API](https://www.tvmaze.com/api) retrieving information about the movies. Another API, [Involvement API](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270), is responsible for saving likes and fetching the number of likes, saving comments and fetching a list of comments. All those functionalities are tied-up in a single codebase.


## Built With

* HTML
* CSS
* JavaScript
* Webpack
* Jest
* TvMaze API
* Involvement API


## Live Demo

https://german-cobian.github.io/TV-Shows/dist/index.html


## Video Demo

https://www.loom.com/share/63e669e5962b4403aaf329dd6da3d69e


## Getting Started

To get a local copy up and running follow these simple example steps.


### Prerequisites


### Setup and Install

* Open your terminal - Windows: `Win + R`, then type `cmd` | Mac: `Command + space`, then type `Terminal`
* Navigate to a directory of your choosing using the `cd` command
* Run this command in your OS terminal: `git clone git@github.com:German-Cobian/TV-Shows.git` to get a copy of the project
* Navigate to the project's directory using the `cd` command
* In the clone folder, run `npm install` and then `npm run build`
* To fire up the server run `npm start`
* Visit `http://localhost:8080/` in your browser to get into the app


### Run tests

* Refer to `https://jestjs.io/docs/getting-started` for instructions on how to install jest in your computer.
* From the root folder, run `yarn test` or `npm run test`


## Authors

👤 **Maximiliano Diaz**
* GitHub: [@mistermaxis](https://github.com/mistermaxis)
* LinkedIn: [Maximiliano Diaz](https://www.linkedin.com/in/mistermaxis/)

👤 **German Cobian**
* GitHub: [@German Cobian](https://github.com/German-Cobian)
* Twitter: [@GermanCobian2](https://twitter.com/GermanCobian2)
* LinkedIn: [@German Cobian](https://www.linkedin.com/in/german-cobian/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/German-Cobian/TV-Shows/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

Guidelines for this project supplied by [Microverse](https://github.com/microverseinc/curriculum-javascript/tree/main/group-capstone).


## 📝 License

This project is [MIT](https://github.com/German-Cobian/TV-Shows/blob/develop/LICENSE) licensed.
