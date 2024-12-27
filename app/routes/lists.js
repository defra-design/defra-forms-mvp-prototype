const fs = require('fs');
const path = require('path');

const listsFilePath = path.join(__dirname, '../data/lists.js');

// Ensure lists.js exists
if (!fs.existsSync(listsFilePath)) {
  fs.writeFileSync(listsFilePath, 'module.exports = {}');
}

const lists = require(listsFilePath);

// Function to handle getting all predefined lists
module.exports.getListsAPI = (req, res) => {
  // Return the names of all lists in the lists file (keys)
  res.json(Object.keys(lists));  // This will return an array of list names
};

// Function to handle getting a specific list by its name
module.exports.getListAPI = (req, res) => {
  const listName = req.params.name;

  if (lists[listName]) {
	// Return the items of the requested list
	res.json(lists[listName]);  // This will return the items of the specified list
  } else {
	// If the list does not exist, return a 404
	res.status(404).send('List not found');
  }
};

// Existing routes for list management...
module.exports.get = (req, res) => {
  // Clears the require cache and loads the latest data
  delete require.cache[require.resolve('../data/lists.js')];
  const lists = require('../data/lists.js');
  
  const tableRows = Object.entries(lists).map(([name, items]) => ([
	{ text: name },
	{ text: `${items.length} items` },
	{ html: `
	  <a href="/redesigntest/edit-list/${name}" class="govuk-button govuk-button--secondary govuk-!-margin-right-2 govuk-!-margin-bottom-0">Edit</a>
	  <form method="POST" action="/redesigntest/delete-list/${name}" class="govuk-!-display-inline">
		<button class="govuk-button govuk-button--warning govuk-!-margin-bottom-0" onclick="return confirm('Are you sure you want to delete this list?')">Delete</button>
	  </form>` }
  ]));
  
  res.render('redesigntest/list-manager', { tableRows });
};

// Function to handle creating or updating lists
module.exports.post = (req, res) => {
  setTimeout(() => {
	// Delete the cache to ensure fresh data is loaded
	delete require.cache[require.resolve('../data/lists.js')];
	const lists = require('../data/lists.js');
	
	const { name, items } = req.body;
	
	// Process the items by splitting and trimming them
	const processedItems = items
	  .split('\n')
	  .map(item => item.trim())
	  .filter(item => item.length > 0);
	
	// Save the list with the processed items
	lists[name] = processedItems;
	
	// Write the updated lists back to the file
	fs.writeFileSync(listsFilePath, `module.exports = ${JSON.stringify(lists, null, 2)}`);
	res.redirect('/redesigntest/list-manager');
  }, 500);
};

// Function to handle editing an existing list
module.exports.editGet = (req, res) => {
  delete require.cache[require.resolve('../data/lists.js')];
  const lists = require('../data/lists.js');
  const list = lists[req.params.name];

  if (!list) {
	return res.redirect('/redesigntest/list-manager');
  }

  // Render the edit-list page with the current items for the list
  res.render('redesigntest/edit-list', {
	name: req.params.name,
	items: list.join('\n')
  });
};

// Function to handle saving changes to a list
module.exports.editPost = (req, res) => {
  setTimeout(() => {
	delete require.cache[require.resolve('../data/lists.js')];
	const lists = require('../data/lists.js');
	const { items } = req.body;

	// Process the items by splitting and trimming them
	const processedItems = items
	  .split('\n')
	  .map(item => item.trim())
	  .filter(item => item.length > 0);

	// Update the list with the new items
	lists[req.params.name] = processedItems;

	// Write the updated lists back to the file
	fs.writeFileSync(listsFilePath, `module.exports = ${JSON.stringify(lists, null, 2)}`);
	res.redirect('/redesigntest/list-manager');
  }, 500);
};

// Function to handle deleting a list
module.exports.delete = (req, res) => {
  setTimeout(() => {
	delete require.cache[require.resolve('../data/lists.js')];
	const lists = require('../data/lists.js');
	delete lists[req.params.name];

	// Write the updated lists back to the file
	fs.writeFileSync(listsFilePath, `module.exports = ${JSON.stringify(lists, null, 2)}`);
	res.redirect('/redesigntest/list-manager');
  }, 500);
};