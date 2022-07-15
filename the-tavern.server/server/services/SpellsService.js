import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SpellsService {
  async getSpells(query) {
    const data = await dbContext.Spells.find(query)
    return data
  }

  async createSpells(body) {
    return await dbContext.Spells.create(body)
  }

  // REVIEW spells are sub docs, so we will need to edit this function
  async editSpells(body) {
    const spells = await dbContext.Spells.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!spells) {
      throw new BadRequest('Invalid request')
    }
    return spells
  }
}

export const spellsService = new SpellsService()
