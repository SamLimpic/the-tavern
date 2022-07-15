import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Skill = new Schema(
  {
    name: { type: String },
    ability: { type: String },
    desc: { type: String },
    pro: { type: Array },
    con: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Skill
