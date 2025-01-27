use("CrudDb")
//CREATE
// https://www.mongodb.com/docs/manual/reference/operator/query/
db.createCollection("Courses")
// db.Courses.insertOne({
//     name:"Tejas",
//     price:0,
//     assignments:12,
//     projects:4
// })
// db.Courses.insertMany(
//     [
//         {
//           "name": "Tejas",
//           "price": 0,
//           "assignments": 12,
//           "projects": 4
//         },
//         {
//           "name": "Ayesha",
//           "price": 200,
//           "assignments": 10,
//           "projects": 3
//         },
//         {
//           "name": "Ravi",
//           "price": 500,
//           "assignments": 15,
//           "projects": 5
//         },
//         {
//           "name": "Neha",
//           "price": 100,
//           "assignments": 8,
//           "projects": 2
//         },
//         {
//           "name": "Manoj",
//           "price": 150,
//           "assignments": 18,
//           "projects": 6
//         },
//         {
//           "name": "Shreya",
//           "price": 0,
//           "assignments": 5,
//           "projects": 1
//         },
//         {
//           "name": "Vikram",
//           "price": 300,
//           "assignments": 7,
//           "projects": 4
//         },
//         {
//           "name": "Sneha",
//           "price": 200,
//           "assignments": 10,
//           "projects": 2
//         },
//         {
//           "name": "Kiran",
//           "price": 0,
//           "assignments": 20,
//           "projects": 7
//         },
//         {
//           "name": "Ravi Shankar",
//           "price": 400,
//           "assignments": 12,
//           "projects": 3
//         }
//       ]
          
// )
//READ
// let a= db.Courses.find({price:0})
// console.log(a);
//UPDATE 
// db.Courses.updateMany({price:0},
//   {$set:{price:10000}}
// )
// db.Courses.deleteOne({price:10000})
// db.Courses.find( { price: { $gt: 1000 } } )
// db.Courses.find( { price: { $gte: 20 } } )
// db.Courses.find( { price: { $in: [ 200, 500 ] } }, { _id: 0 } )
db.Courses.find( { price: { $ne: 500 } } )
