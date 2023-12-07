const mongoose = require("mongoose");
const { Schema } = mongoose; 

const DataSchema = new Schema(
    {
        FirstName: {
            type: String,
            trim: true,
           
        },
        LastName: {
            type: String,
            trim: true,
           
        },
        EmailAddress: {
            type: String,
            trim: true,
           
            
        },
        MobileNumber: {
            type: String,
            trim: true,
            
        },
        City: {
            type: String,
            trim: true,
        },
        UserName: {
            type: String,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
          
        }    
    },
    { timestamps: true, versionKey:false }
);

const ProfileModel = mongoose.model("Profile", DataSchema);
module.exports = ProfileModel;