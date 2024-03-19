import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
}, {
    timestamps: true
});

//Export the model
const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;