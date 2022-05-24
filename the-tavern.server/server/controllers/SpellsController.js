import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { spellsService } from '../services/SpellsService'

export class SpellsController extends BaseController {
  constructor() {
    super('api/spells')
    this.router
      .get('', this.getSpells)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createSpells)
      .put('/:id', this.editSpells)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getSpells(req, res, next) {
    try {
      const data = await spellsService.getSpells(req.query)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async createSpells(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      const data = await spellsService.createSpells(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async editSpells(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await spellsService.editSpells(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
