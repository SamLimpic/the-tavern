import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { skillsService } from '../services/SkillsService'

export class SkillsController extends BaseController {
  constructor() {
    super('api/skills')
    this.router
      .get('', this.getSkills)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createSkills)
      .put('/:id', this.editSkills)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getSkills(req, res, next) {
    try {
      const data = await skillsService.getSkills(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createSkills(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      const data = await skillsService.createSkills(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editSkills(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await skillsService.editSkills(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
