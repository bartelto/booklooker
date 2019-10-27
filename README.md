# Booklooker

 *Booklooker* allows you to search for books using the Google Books API &mdash; and create your own reading list!

Try it! [booklooker.herokuapp.com](http://booklooker.herokuapp.com)

## Introduction

*Booklooker* is a single-page app created using the MERN stack: MongoDB, the Express web application framework, React, and Node.js. The app was initially bootstrapped using Create-React-App.

### Using Booklooker
- On the main page of the app, enter a search term for a book. Booklooker performs a search using the Google Books API and displays the title, author(s), description, cover art, and a link to the book on Google Play.
- To view a book on Google Play, click the 👁 icon next to the search result.
- To save a book as a favorite, click the bookmark icon next to the search result.
- To view your saved books, click the *Saved* link in the navigation bar. The app will dispaly only the books that have been saved.

**NOTE:** In the interest of a simple demonstration of the app's capability, *Booklooker* does not use any user authentication. So remember: anybody can save books, and anyone can delete them!

### NPM packages used
- [express](https://www.npmjs.com/package/express) - A fast, unopinionated, minimalist web framework for Node.js.
- [axios](https://www.npmjs.com/package/axios) - A promise-based HTTP client for the browser and Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose) - A MongoDB object-modeling tool designed to work in an asynchronous environment.
- [react](https://www.npmjs.com/package/react) - A JavaScript library for creating user interfaces.
- [react-dom](https://www.npmjs.com/package/react-dom) - The entry point to the DOM and server renderers for React.
- react-router-dom
- react-scripts

## The author

This app was developed by **Todd F. Bartelt** as part of the Full-Stack Web Development program at University of Kansas Professional and Continuing Education. Learn more about Todd at [toddbartelt.com](http://toddbartelt.com).