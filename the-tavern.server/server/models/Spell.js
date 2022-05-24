import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Spell = new Schema(
  {
    name: { type: String },
    desc: { type: Array },
    level: { type: Number },
    time: { type: String },
    duration: { type: String },
    school: { type: String },
    ritual: { type: Boolean },
    concentration: { type: Boolean },
    damage: {
      type: { type: String },
      at: { type: Object }
    },
    area: {
      range: { type: String },
      type: { type: String },
      size: { type: String }
    },
    jobs: { type: Array }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Spell
