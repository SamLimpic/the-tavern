import { AppState } from '../AppState'
import { api } from './AxiosService'

class ResultsService {
  async getJob() {
    const title = AppState.jobs.filter(j => j.role === AppState.character.role && j.style === AppState.character.style)[0].title
    const res = await api.get(`api/jobs?title=${title}`)
    AppState.job = res.data[0]
    AppState.questions.trade[0].answers = AppState.job.races
    AppState.questions.trade[1].answers = AppState.job.backgrounds
    if (AppState.job.subChoices.answers[0]) {
      const subChoices = {
        type: 'SubJob',
        number: 2,
        query: AppState.job.subChoices.query,
        answers: AppState.job.subChoices.answers
      }
      AppState.questions.trade.push(subChoices)
    }
  }

  async getRace(title) {
    const res = await api.get(`api/races?title=${title}`)
    AppState.race = res.data[0]
  }

  async getBackground(title) {
    const res = await api.get(`api/backgrounds?title=${title}`)
    AppState.background = res.data[0]
  }

  async getEquipment() {
    const weapons = await api.get('api/weapons')
    AppState.weapons = weapons.data
    const armor = await api.get('api/armor')
    AppState.armor = armor.data
  }

  loadBuild() {
    AppState.count = JSON.parse(window.localStorage.getItem('count'))
    AppState.job = JSON.parse(window.localStorage.getItem('job'))
    AppState.race = JSON.parse(window.localStorage.getItem('race'))
    AppState.background = JSON.parse(window.localStorage.getItem('background'))
    AppState.chooseScores = JSON.parse(window.localStorage.getItem('scores'))
    AppState.chooseAbilities = JSON.parse(window.localStorage.getItem('abilities'))
    AppState.character = JSON.parse(window.localStorage.getItem('character'))
  }
}

export const resultsService = new ResultsService()
