const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ModelPerson = require("./modules/Person")


const app = express();
const pw =process.env.password
const MONGO_URI = "mongodb+srv://gomycode:"+pw+"@cluster0.vmkbt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const Port = process.env.Port || 5000;
app.listen(Port, () => {
  console.log(`Server is running on Port${Port}`);
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", ()=> {
  console.log("Connection Successful!");
});










//****create and save person****

// const doc1 = new ModelPerson({
//   name: "wwwww",
//   age: 30,
//   favouriteFoods: ["pizza"],
// });

// doc1.save ((err) => {
//   if (err) return console.error(err);
//   console.log("Document inserted succussfully!");
// });


//****create Many people****

const arrayOfPeople =[
    {name: "ranim",
    age: 25,
    favouriteFoods: ["burrito"]},
    {name: "najet",
    age: 31,
    favouriteFoods: ["souflet"]},
    {name: "safa",
    age: 28,
    favouriteFoods: ["bagget"]},
     {name: "Mary",
    age: 35,
    favouriteFoods: ["crep"]},
]


    // ModelPerson.create(arrayOfPeople, (err)=>{ 
    //     if (err) return console.error(err);
    //     console.log("array inserted succussfully!");
    // }) 
 
//****find person with name****
  // ModelPerson.find(({name: "seddik"}, (err)=>{ 
  //            if (err) return console.error(err);
  //          console.log("element is exist!!!");
  //      })) 


//****find person with favorite Foods****
  // ModelPerson.findOne({favoriteFoods: "ma9loub"}, (err)=>{ 
  //            if (err) return console.error(err);
  //          console.log("element is exist!!!");
  //      }) 

//****find person with id ****
  // ModelPerson.findById({_id: "62364930336a30204c931fcc"}, (err)=>{ 
  //            if (err) return console.error(err);
  //          console.log("element is exist!!!");
  //      })


//****find Edit person then save ****
  //  const itemToAdd = 'hamburger'
  // ModelPerson.findById({_id: "62364930336a30204c931fcc"}, (err,person)=>{ 
  //            if (err) 
  //             {return console.error(err)}
  //             person.favoriteFoods.push(itemToAdd)
  //             person.save(err => 
  //               {
  //           if (err) return console.error(err);
  //           console.log("Document updated succussfully!");
  //                                   })

  //      }) 

//****find person and updated ****
  // const ageToSet = 20
  // ModelPerson.findOneAndUpdate({name: "najet"}, {age: 20}, {new: true}, (err)=>{ 
  //            if (err) return console.error(err);
  //          console.log("person is updated!!!");
  //      })


// //****find person with id and remove ****
//   ModelPerson.findByIdAndRemove({_id: "6238e126ceb53a329b4914ef"}, err=>{ 
//              if (err) return console.error(err);
//            console.log("person is removed with id!!!");
//        }) 


//**** remove with name ****
  // const  nameToRemove = "Mary"
  // ModelPerson.remove({name: nameToRemove}, (err)=>{ 
  //            if (err) return console.error(err);
  //          console.log("person is removed with name");
  //      }) 


//****Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec(). ****
  // const  foodToSearch = "burrito"
  // ModelPerson.find({favoriteFoods: {$all:[foodToSearch]}})
  //  .sort({name:'asc'})
  //  .limit(2)
  //  .select('name age')
  //  .exec((err)=>{ 
  //      if (err) return console.error(err);
  //          console.log("person find!!!");
  //      })

       