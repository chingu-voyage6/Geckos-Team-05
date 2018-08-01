# News App
> A web app to view the latest news headlines | Chingu Voyage-6, Geckos Team 5 | https://the-new-news.herokuapp.com/

## About

[The New News](https://the-new-news.herokuapp.com/) displays the latest top headlines from over 30,000 news sources and blogs. You can also see top stories by genre, or search for a specific topic.

News stories are sourced from [The News API](https://newsapi.org/). 

## Development Setup

1.  Install Node v.8.11.3
    * Easiest method: Install [nvm](https://github.com/creationix/nvm) and then run `nvm install v8.11.3`
    * Or follow [Node.js installation instructions](https://nodejs.org/en/download/)

2. Confirm [npm](https://github.com/npm/npm) was installed with Node by running `npm -v`. You should get a version number (current LTS is 5.6.0).
    * If you get `npm: command not found`, [install npm](https://www.npmjs.com/get-npm).

3. Install [Yarn](https://yarnpkg.com/en/) package manager globally then confirm installation:
    ```sh
    brew install yarn --without-node
    yarn --version
    ```

    See [Yarn docs](https://yarnpkg.com/en/docs/install#mac-stable) for Windows/Linux installation instructions.

4. Install [Nodemon](https://github.com/remy/nodemon) globally then confirm installation:
    ```sh
    npm install -g nodemon
    nodemon -v
    ```

5. Install [MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation) Community Edition. Setup is complete when you can use `mongod` to run the db server, and access the Mongo shell in a separate terminal window by running `mongo`.

6. Clone this repo:
    ```cli
    git clone https://github.com/chingu-voyage6/Geckos-Team-05.git && cd Geckos-Team-05
    ```

7. In the root directory, create a new file called `.env`:
    ```cli
    touch .env
    ```
    Then find the file called `.env.default` and copy & paste its contents into the `.env` file. For each key available, add the necessary value (sent privately). You will need to [apply for your own API key](https://newsapi.org/).

8. Install Node packages:
    ```cli
    npm install
    cd Client && npm install
    cd ../Server && npm install
    cd ..
    ```

9. Open a database server on your local machine by running the `mongod` command in a shell **separate from the project command prompt**. The server must stay running in a separate window or tab *the whole time you plan to run the app locally*. At the end of your dev session, you can stop the server with `ctrl + c`.

10. Run the app (make sure you're in the root folder):
    ```sh
    yarn dev
    ```

### Finish Line
If everything is set up correctly, after running `yarn dev`, visit [localhost:3010](localhost:3010) in your browser.

If you open a new command line prompt, you can run `mongo` to open the Mongo shell, and then type `show dbs` to get a list of created databases. You should see `chingu-news-app`, which was created when you ran the app the first time.
  > To exit the mongo shell type `quit() + Enter`
