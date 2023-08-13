import { Schema, model } from "mongoose";

const forumSchema = new Schema({
  nama_forum: {
    type: String,
    required: [true, "masukan nama forum"],
  },
  pertanyaan0: String,
  pertanyaan1: String,
  pertanyaan2: String,
  pertanyaan3: String,
  pertanyaan4: String,
  pertanyaan5: String,
  pertanyaan6: String,
  pertanyaan7: String,
  pertanyaan8: String,
  pertanyaan9: String,
});

export default model("Forum", forumSchema);
