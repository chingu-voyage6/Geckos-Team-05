# News App
> A web app to view the latest news headlines | Chingu Voyage-6, Geckos Team 5 | https://chingu.io/

## Development Setup

1.  Install Node v.8.11.3
    * Easiest method: Install [nvm](https://github.com/creationix/nvm) and then run `nvm install v8.11.3`
    * Or follow [Node.js installation instructions](https://nodejs.org/en/download/)

2. Confirm [npm](https://github.com/npm/npm) was installed with Node by running `npm -v`. You should get a version number (current LTS is 5.6.0).
    * If you get `npm: command not found`, [install npm](https://www.npmjs.com/get-npm).

3. Install [MongoDB](https://docs.mongodb.com/manual/installation/#tutorial-installation) Community Edition. Setup is complete when you can use `mongod` to run the db server, and access the Mongo shell in a separate terminal window by running `mongo`.

4. Clone this repo:
    ```cli
    git clone https://github.com/chingu-voyage6/Geckos-Team-05.git && cd Geckos-Team-05
    ```

5. In the root directory, create a new file called `.env`:
    ```cli
    touch .env
    ```
    Then find the file called `.env.default` and copy & paste its contents into the `.env` file. For each key available, add the necessary value (sent privately).

6. Install Node packages:
    ```cli
    npm install
    ```

7. Open a database server on your local machine by running the `mongod` command in a shell **separate from the project command prompt**. The server must stay running in a separate window or tab *the whole time you plan to run the app locally*. At the end of your dev session, you can stop the server with `ctrl + c`.

8. Run app on local server:
    ```cli
    node app.js
    ```
    *NOTE: You may find it useful to install the* `nodemon` *package so that you don't need to restart the Node server every time an edit is made. To do this run* `npm install -g nodemon` *from the command line, and then run* `nodemon app.js` *instead of* `node app.js` *going forward.*

### Finish Line
If everything is set up correctly, after running `node app.js` you should see the following:
* Open [localhost:3000](localhost:3000) in your browser; the title should say **News App** and there should be 3 headers colored blue, orange, and teal.
* Open the console in your browser dev tools. You should see the message **LINKED!**
* In the shell where you have run the `node app.js` command, you should see the following:
  ```cli
  $ node app.js
  App running on port 3000
  DATABASE IS LINKED & SAVING DATA!
  ```
* If you open a new command line prompt, you can run `mongo` to open the Mongo shell, and then type `show dbs` to get a list of created databases. You should see `chingu-news-app`, which was created when you ran the app the first time.
  > To exit the mongo shell type `quit() + Enter`
