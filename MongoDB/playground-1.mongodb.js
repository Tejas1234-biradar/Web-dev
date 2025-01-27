/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'JavaScript', 'price': 10000, 'quantity': 1, 'date': new Date('2014-03-01T08:00:00Z') },
{ 'item': 'Java', 'price': 20000, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
{ 'item': 'Python', 'price': 15000, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
{ 'item': 'C++', 'price': 12000, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
{ 'item': 'Ruby', 'price': 11000, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
{ 'item': 'Go', 'price': 13000, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
{ 'item': 'Rust', 'price': 14000, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
{ 'item': 'Swift', 'price': 16000, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') }

]);


// Print a message to the output window.
console.log("done ");

