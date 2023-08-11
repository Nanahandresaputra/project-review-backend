import { Schema, model } from "mongoose";

const questionSchema = new Schema({
    idUSer: Number,
    question: String,
    value: Number
});

export default model("Question", questionSchema);