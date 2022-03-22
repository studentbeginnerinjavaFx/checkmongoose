const mongoose=require('mongoose')

const Person = new mongoose.Schema({

    name:{

        type:String,
        required:true
    },

    age:{

        type:Number
        
    },

    favoriteFoods:[String]
})

module.exports=  mongoose.model("model", Person, "myCollection")