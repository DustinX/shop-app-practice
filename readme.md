

Note:
Needs a separate server to serve the item information, which is not implemented here

# How to run

Easiest way:
npm install
npm start

This will launch a development server and will correctly handle routing
-----------------------
Other way:
Set up a server to serve the 'dist' folder and serve 'index.html' for all 404's, so that React Router can handle routing.


# implemented functionality
back icon on single item page returns to main list
clicking category buttons on list page filters to items with that category
clicking on link on main list will navigate to single item page for that item
can navigate to items via URL
attempting to navigate to an item page with an invalid item number will navigate to main list page
images are lazy loaded on the main list page
