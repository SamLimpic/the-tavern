import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'
import { resultsService } from './ResultsService'

class QuestionsService {
  async getQuestions() {
    // TODO rename question to res (question to res.data)
    const res = await api.get('api/questions')
    AppState.questions.role = res.data.filter(q => q.type === 'Role')
    AppState.questions.style = res.data.filter(q => q.type === 'Style')
    AppState.questions.trade = res.data.filter(q => q.type === 'Race' || q.type === 'Background')

    AppState.activeQuestion = AppState.questions.role[0]
  }

  async buildCharacter(string, type) {
    if (type === 'Role' || type === 'Style') {
      await this.buildPrimary(string, type)
    } else {
      await this.buildSecondary(string, type)
    }
  }

  async buildPrimary(string, type) {
    this.updateCount(string, type)
    const t = type.toLowerCase()
    const questions = AppState.questions
    if (AppState.tieBreakers.length === 2) {
      this.tieBreaker(type, AppState.tieBreakers)
    } else if (AppState.activeQuestion.number === questions[t].length - 1) {
      if (type === 'Role') {
        AppState.activeQuestion = questions.style[0]
        AppState.count.question = 5
        AppState.role = AppState.character[t]
      } else {
        await resultsService.getJob()
        AppState.activeQuestion = questions.trade[0]
        AppState.count.question = 8
        AppState.style = AppState.character[t]
      }
      AppState.tieBreakers = []
    } else {
      AppState.count.question++
      AppState.activeQuestion = questions[t][AppState.activeQuestion.number + 1]
    }
  }

  async buildSecondary(string, type) {
    const questions = AppState.questions
    if (type === 'Race') {
      await resultsService.getRace(string)
    } else if (type === 'Background') {
      await resultsService.getBackground(string)
    } else if (type === 'SubJob') {
      AppState.job.subJobs = AppState.job.subJobs.find(j => j.title === string)
    }
    if (AppState.activeQuestion.number === questions.trade.length - 1) {
      AppState.built = 'true'
      router.push('Results')
    } else {
      AppState.count.question++
      AppState.activeQuestion = questions.trade[AppState.activeQuestion.number + 1]
    }
  }

  updateCount(string, type) {
    // eslint-disable-next-line prefer-const
    const t = type.toLowerCase()
    const str = string.toLowerCase()
    AppState.attributes[t][str]++
    const attribute = AppState.attributes[t][str]
    const questions = AppState.questions[t]
    if (AppState.count[t] < attribute) {
      AppState.count[t] = attribute
      AppState.character[t] = string
    }
    if (Math.floor(attribute) === 2) {
      AppState.tieBreakers.push(string)
    }
    if (Math.floor(attribute) === 3 || AppState.activeQuestion === questions[questions.length - 2]) {
      AppState.count.question++
      AppState.activeQuestion = questions[questions.length - 1]
    }
  }

  tieBreaker(type, arr) {
    const t = type.toLowerCase()
    const questions = AppState.questions[t]
    AppState.count.question++
    AppState.activeQuestion = questions[questions.length - 1]
    AppState.activeQuestion.answers = AppState.activeQuestion.answers.filter(a => a.value === arr[0] || a.value === arr[1])
    AppState.tieBreakers = []
  }

  resetAttributes() {
    // REVIEW put in a single place and reference (set a default)
    AppState.attributes = {
      role: {
        tank: 0.05,
        damage: 0.05,
        support: 0.05,
        utility: 0.05
      },
      style: {
        weapons: 0.05,
        spells: 0.05,
        balance: 0.05
      }
    }
    AppState.role = null
    AppState.style = null
    AppState.tieBreakers = []
    AppState.built = 'false'
  }
}

export const questionsService = new QuestionsService()
