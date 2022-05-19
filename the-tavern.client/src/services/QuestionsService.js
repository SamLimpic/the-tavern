import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'
import { resultsService } from './ResultsService'

class QuestionsService {
  async getQuestions() {
    const res = await api.get('api/questions')
    AppState.questions.role = res.data.filter(q => q.type === 'Role')
    AppState.questions.style = res.data.filter(q => q.type === 'Style')
    AppState.questions.trade = res.data.filter(q => q.type === 'Race' || q.type === 'Background')

    AppState.activeQuestion = AppState.questions.role[0]
  }

  // ANCHOR Interprets Questionnaire results and updates potential outcomes
  async buildCharacter(string, type) {
    if (type === 'Role' || type === 'Style') {
      // SECTION Establishes Character Role & Style, which determine Character Class
      await this.buildPrimary(string, type)
    } else {
      // SECTION Establishes Character Race, Background, & Subclass
      await this.buildSecondary(string, type)
    }
  }

  // ANCHOR Establishes Character Role & Style, which determine Character Class
  async buildPrimary(string, type) {
    // SECTION Takes in Answer Data and updates Role / Style counts
    this.updateCount(string, type)
    const t = type.toLowerCase()
    const questions = AppState.questions
    if (AppState.tieBreakers.length === 2) {
      // SECTION Incorporates Tiebreaker questions if the Tiebreaker count hits 2
      this.tieBreaker(type, AppState.tieBreakers)
    } else if (AppState.activeQuestion.number === questions[t].length - 1) {
      if (type === 'Role') {
        AppState.activeQuestion = questions.style[0]
        AppState.count.question = 5
        AppState.role = AppState.character[t]
      } else {
        // SECTION Pulls Character Class from database once Role & Style are established
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

  // ANCHOR Establishes Character Race, Background, & Subclass
  async buildSecondary(string, type) {
    const questions = AppState.questions
    if (type === 'Race') {
      // SECTION Pulls Character Race from database based on selection
      await resultsService.getRace(string)
    } else if (type === 'Background') {
      // SECTION Pulls Character Background from database based on selection
      await resultsService.getBackground(string)
    } else if (type === 'SubJob') {
      // SECTION Pulls Character Subclass from database based on selection
      AppState.job.subJobs = AppState.job.subJobs.find(j => j.title === string)
    }
    if (AppState.activeQuestion.number === questions.trade.length - 1) {
      // SECTION Completes the Build process and reroutes to the Results page
      AppState.built = true
      router.push('Results')
    } else {
      AppState.count.question++
      AppState.activeQuestion = questions.trade[AppState.activeQuestion.number + 1]
    }
  }

  // ANCHOR Takes in Answer Data and updates Role / Style counts
  updateCount(string, type) {
    // eslint-disable-next-line prefer-const
    const t = type.toLowerCase()
    const str = string.toLowerCase()
    AppState.attributes[t][str]++
    const attribute = AppState.attributes[t][str]
    const questions = AppState.questions[t]
    if (AppState.count[t] < attribute) {
      // SECTION Updates the Active Role / Style if its count is the current highest
      AppState.count[t] = attribute
      AppState.character[t] = string
    }
    if (Math.floor(attribute) === 2) {
      // SECTION Pushes a potential Tiebreaker selection if its count hits 2
      AppState.tieBreakers.push(string)
    }
    if (Math.floor(attribute) === 3 || AppState.activeQuestion === questions[questions.length - 2]) {
      // SECTION Sets the Active Role / Style if its count hits 3
      AppState.count.question++
      AppState.activeQuestion = questions[questions.length - 1]
    }
  }

  // ANCHOR Incorporates Tiebreaker questions if the Tiebreaker count hits 2
  tieBreaker(type, arr) {
    const t = type.toLowerCase()
    const questions = AppState.questions[t]
    AppState.count.question++
    AppState.activeQuestion = questions[questions.length - 1]
    // SECTION Displays only the required Tiebreaker attirbutes to be tested
    AppState.activeQuestion.answers = AppState.activeQuestion.answers.filter(a => a.value === arr[0] || a.value === arr[1])
    AppState.tieBreakers = []
  }

  // ANCHOR Refreshes all temporary attributes at the start of the Questionnaire
  resetAttributes() {
    AppState.character = {}
    AppState.activeCharacter = {}
    AppState.job = {}
    AppState.race = {}
    AppState.background = {}
    AppState.skills = {
      choose: 0,
      from: []
    }
    AppState.languages = {
      choose: 0,
      from: []
    }
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
    AppState.count = {
      role: 0,
      style: 0,
      question: 0,
      languages: 0,
      skills: 0,
      equipment: 0,
      mods: 0,
      modChoice: 0,
      abilities: 0,
      score: 0
    }
    AppState.activeRolls = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
    AppState.scores = {
      strength: {
        title: 'Strength',
        value: 0,
        mod: 0
      },
      dexterity: {
        title: 'Dexterity',
        value: 0,
        mod: 0
      },
      constitution: {
        title: 'Constitution',
        value: 0,
        mod: 0
      },
      intelligence: {
        title: 'Intelligence',
        value: 0,
        mod: 0
      },
      wisdom: {
        title: 'Wisdom',
        value: 0,
        mod: 0
      },
      charisma: {
        title: 'Charisma',
        value: 0,
        mod: 0
      }
    }
    AppState.built = false
    AppState.role = null
    AppState.style = null
    AppState.tieBreakers = []
    AppState.abilityScore = []
    AppState.chooseAbilities = []
    AppState.chooseScores = []
  }
}

export const questionsService = new QuestionsService()
