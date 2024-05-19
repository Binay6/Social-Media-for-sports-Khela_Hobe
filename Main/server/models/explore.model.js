import mongoose from "mongoose";
import { Schema } from "mongoose";

const exploreSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    
  },
  {
    timestamps: true,
  }
);

const Explore = mongoose.model("Explore", exploreSchema);
//export default mongoose.model("Post", postSchema);
export default Explore ;