import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Character = new Schema(
  {
    creatorId: { type: String, ref: 'Account' },
    role: { type: String },
    style: { type: String },
    job: { type: String },
    race: { type: String },
    background: { type: String },
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    alignment: { type: String },
    size: { type: String },
    speed: { type: String },
    imgUrl: { type: String },
    health: { type: Number },
    armorRating: { type: Number },
    proBonus: { type: Number },
    stats: {
      type: Array,
      title: { type: String },
      value: { type: Number }
    },
    languages: { type: Array },
    abilities: {
      type: Array,
      title: { type: String },
      body: { type: String }
    },
    cantrips: {
      type: Array,
      title: { type: String }
    },
    spells: {
      type: Array,
      level: { type: Number },
      title: { type: String }
    },
    slots: { type: Number },
    proficiencies: {
      weapons: { type: Array },
      armor: { type: Array },
      tools: { type: Array },
      skills: {
        type: Array,
        title: { type: String },
        expertise: { type: Boolean }
      }
    },
    equipment: {
      weapons: { type: Array },
      armor: { type: Array },
      tools: { type: Array }
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Character.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Character
