TheVault
The Vault is a unique time-traveling application that allows users to explore historical events trough articles from different eras. Powered by the Archive API from NYC (https://developer.nytimes.com/apis), The Vault acts as a digital time machine, enabling users to navigate through different months and years, uncovering articles, events, and insights from the past. Whether you're a history enthusiast or just curious about how events unfolded, The Vault offers an immersive way to explore the past.

How to Run Locally:

1. Install MongoDB Community Server:
   - Download and install MongoDB Community Edition from MongoDB Download Center:
     https://www.mongodb.com/try/download/community

2. Create a Data Directory:
   - Create a new directory called `data` in your project folder.
   - This directory will be used to store the MongoDB database files.

3. Create a .env file:
   - Create a new file called `.env` in your project folder.
   - Add the following environment variables to the `.env` file:
      `PORT=3000 
      MONGODB_URI=mongodb://localhost:6000`

4. Start MongoDB Server:
   - Open a terminal and navigate to your desired folder [cd /path/to/your/project/folder,p.e.].
   - Run the following command to start the MongoDB server on port 6000:
     - `mongod --dbpath data --port 6000`
   - This will start the MongoDB server and use the `data` directory to store the database files.

5. Seed the Database:
   - Open a second terminal window for your project.
   - Navigate to your project directory and run the following command to seed the database with articles:
     npm run getArticles
   - If you want a smaller dataset, you can run the following command instead:
     npm run getArticlesSmall
   - This will populate the MongoDB database with articles from the NYTimes Archive API.
   - Once the seeding process is complete, you terminate the process by pressing `Ctrl + C`.

5. Run the Application:
   - After seeding the database, run the following command to start the application:
     npm start
   - This will start the Node.js server on port 3000 and connect to the MongoDB database.

6. Access the Application:
    - Open a web browser and navigate to http://localhost:3000 to access the application.
    - You can now explore the past, search for articles, and enjoy the time-traveling experience!´

7. (Optional) Connect to MongoDB with MongoDB Compass:
   - Open MongoDB Compass (the official GUI for MongoDB).
   - Connect to your local MongoDB instance using the following connection string:
     `mongodb://localhost:6000`

Features:
   - Time Machine: Users can provide a year and a month, and the system will return articles published during that specific time.
   - Gallery Search: Displays thumbnails of articles from a specific year, enabling users to scroll through and select articles visually.
   - Random Article: Get a random article, offering users a surprise piece of content each time.
   - Login & Register: Allows users to create accounts and log in.


Technologies Used:
   - MongoDB: Database to store user data and articles.
   - Node.js: JavaScript runtime for server-side operations.
   - Express: Web framework for Node.js to handle routing and middleware.
   - NYTimes Archive API: API used to fetch historical articles from different years and months.
   - 98.css: A minimalistic and retro-styled CSS library that brings back the look and feel of classic 90s UIs, used to style the frontend.