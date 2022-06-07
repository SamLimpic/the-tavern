import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import JobSchema from '../models/Job'
import RaceSchema from '../models/Race'
import BackgroundSchema from '../models/Background'
import WeaponSchema from '../models/Weapon'
import ArmorSchema from '../models/Armor'
import SpellSchema from '../models/Spell'
import SkillSchema from '../models/Skill'
import QuestionSchema from '../models/Question'
import CharacterSchema from '../models/Character'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Jobs = mongoose.model('Job', JobSchema);
  Races = mongoose.model('Race', RaceSchema);
  Backgrounds = mongoose.model('Background', BackgroundSchema);
  Weapons = mongoose.model('Weapon', WeaponSchema);
  Armor = mongoose.model('Armor', ArmorSchema);
  Spells = mongoose.model('Spell', SpellSchema);
  Skills = mongoose.model('Skill', SkillSchema);
  Questions = mongoose.model('Question', QuestionSchema);
  Characters = mongoose.model('Character', CharacterSchema);
}

export const dbContext = new DbContext()
