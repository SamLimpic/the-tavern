import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SkillsService {
  async getSkills(query) {
    const data = await dbContext.Skills.find(query)
    return data
  }

  async createSkills(body) {
    return await dbContext.Skills.create(body)
  }

  // REVIEW skills are sub docs, so we will need to edit this function
  async editSkills(body) {
    const skills = await dbContext.Skills.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!skills) {
      throw new BadRequest('Invalid request')
    }
    return skills
  }
}

export const skillsService = new SkillsService()
