TheVault
The Vault is a unique time-traveling application that allows users to explore historical events trough articles from different eras. Powered by the Archive API from NYC (https://developer.nytimes.com/apis), The Vault acts as a digital time machine, enabling users to navigate through different months and years, uncovering articles, events, and insights from the past. Whether you're a history enthusiast or just curious about how events unfolded, The Vault offers an immersive way to explore the past.

How to Run Locally:

1. Install MongoDB Community Server:
   - Download and install MongoDB Community Edition from MongoDB Download Center:
     https://www.mongodb.com/try/download/community

2. Start MongoDB Server:
   - Open a terminal and navigate to your desired folder [cd /path/to/your/project/folder,p.e.].
   - Run the following command to start the MongoDB server on port 6000:
     mongod --dbpath data --port 6000
   - This will start the MongoDB server and use the `data` directory to store the database files.

3. Connect to MongoDB with MongoDB Compass:
   - Open MongoDB Compass (the official GUI for MongoDB).
   - Connect to your local MongoDB instance using the following connection string:
     mongodb://localhost:6000

4. Run the Application:
   - Open a second terminal window for your application.
   - Navigate to your project directory and run your application (assuming you're using Node.js and npm as an example):
     npm install   - Install the required dependencies (only the first time)
     npm start     - Start the application, typically on port 3000
   - The application should now be running locally on http://localhost:3000

Features:
    -Searchbar: Filters articles by keywords, allowing users to find relevant content quickly.
    -Time Machine: Users can provide a year and a month, and the system will return articles published during that specific time.
    -Gallery Search: Displays thumbnails of articles from a specific year, enabling users to scroll through and select articles visually.
    -Random Article: Get a random article, offering users a surprise piece of content each time.
    -Login & Register: Allows users to create accounts and log in. Includes a "Save" feature, where users can save and store their favorite articles for later reading.


Technologies Used:
    -MongoDB: Database to store user data and articles.
    -Node.js: JavaScript runtime for server-side operations.
    -Express: Web framework for Node.js to handle routing and middleware.
    -NYTimes Archive API: API used to fetch historical articles from different years and months.
    -98.css: A minimalistic and retro-styled CSS library that brings back the look and feel of classic 90s UIs, used to style the frontend.