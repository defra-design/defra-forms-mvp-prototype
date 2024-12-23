const fs = require('fs')
const path = require('path')

const listsFilePath = path.join(__dirname, '../data/lists.js')

if (!fs.existsSync(listsFilePath)) {
 fs.writeFileSync(listsFilePath, 'module.exports = {}')
}

module.exports = {
 get: (req, res) => {
   delete require.cache[require.resolve('../data/lists.js')]
   const lists = require('../data/lists.js')
   const tableRows = Object.entries(lists).map(([name, items]) => ([
	 { text: name },
	 { text: `${items.length} items` },
	 { html: `
	   <a href="/redesigntest/edit-list/${name}" class="govuk-button govuk-button--secondary govuk-!-margin-right-2 govuk-!-margin-bottom-0">Edit</a>
	   <form method="POST" action="/redesigntest/delete-list/${name}" class="govuk-!-display-inline">
		 <button class="govuk-button govuk-button--warning govuk-!-margin-bottom-0" onclick="return confirm('Are you sure you want to delete this list?')">Delete</button>
	   </form>` }
   ]))
   
   res.render('redesigntest/list-manager', { tableRows })
 },

 post: (req, res) => {
   setTimeout(() => {
	 delete require.cache[require.resolve('../data/lists.js')]
	 const lists = require('../data/lists.js')
	 const { name, items } = req.body
	 
	 const processedItems = items
	   .split('\n')
	   .map(item => item.trim())
	   .filter(item => item.length > 0)

	 lists[name] = processedItems
	 
	 fs.writeFileSync(listsFilePath, `module.exports = ${JSON.stringify(lists, null, 2)}`)
	 res.redirect('/redesigntest/list-manager')
   }, 500)
 },

 editGet: (req, res) => {
   delete require.cache[require.resolve('../data/lists.js')]
   const lists = require('../data/lists.js')
   const list = lists[req.params.name]
   
   if (!list) {
	 return res.redirect('/redesigntest/list-manager')
   }

   res.render('redesigntest/edit-list', {
	 name: req.params.name,
	 items: list.join('\n')
   })
 },

 editPost: (req, res) => {
   setTimeout(() => {
	 delete require.cache[require.resolve('../data/lists.js')]
	 const lists = require('../data/lists.js')
	 const { items } = req.body

	 const processedItems = items
	   .split('\n')
	   .map(item => item.trim())
	   .filter(item => item.length > 0)

	 lists[req.params.name] = processedItems

	 fs.writeFileSync(listsFilePath, `module.exports = ${JSON.stringify(lists, null, 2)}`)
	 res.redirect('/redesigntest/list-manager')
   }, 500)
 },

 delete: (req, res) => {
   setTimeout(() => {
	 delete require.cache[require.resolve('../data/lists.js')]
	 const lists = require('../data/lists.js')
	 delete lists[req.params.name]

	 fs.writeFileSync(listsFilePath, `module.exports = ${JSON.stringify(lists, null, 2)}`)
	 res.redirect('/redesigntest/list-manager')
   }, 500)
 }
}