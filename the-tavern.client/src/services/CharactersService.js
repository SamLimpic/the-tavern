import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class CharactersService {
  async getCharacters(id) {
    const res = await api.get(`api/characters?creatorId=${id}`)
    AppState.characters = res.data
  }

  getSkills() {
    const skills = AppState.character.proficiencies.skills
    for (let i = 0; i < skills.length; i++) {
      AppState.job.proficiencies.skills.from = AppState.job.proficiencies.skills.from.filter(s => s !== skills[i])
    }
  }

  getAbilities() {
    const abilities = AppState.character.abilities
    AppState.job.abilities.forEach(a => {
      abilities.push(a)
    })
    AppState.race.abilities.forEach(a => {
      abilities.push(a)
    })
    abilities.forEach(a => {
      if (a.choose !== undefined) {
        AppState.chooseAbilities.push(a)
      }
    })
  }

  getAbilityModifiers() {
    const mods = AppState.race.scores
    mods.forEach(m => {
      if (m.choose === undefined) {
        AppState.character.scores[m.title.toLowerCase()].mod = m.value
      } else {
        AppState.count.mods += m.choose
        AppState.chooseScores = m.from
      }
    })
  }

  createCharacter() {
    const job = AppState.job
    const race = AppState.race
    const background = AppState.background
    const proficiencies = AppState.proficiencies

    AppState.character = {
      name: '',
      age: null,
      gender: '',
      alignment: '',
      role: job.role,
      style: job.style,
      job: job.title,
      subJob: job.subJobs.title,
      race: race.title,
      background: background.title,
      size: race.size,
      speed: race.speed,
      health: job.health,
      proBonus: 2,
      imgUrl: '',
      scores: AppState.characterScores,
      languages: race.languages,
      abilities: [],
      spellcasting: {
        spellAbility: job.spellcasting.ability,
        totalSpells: job.spellcasting.spells,
        spells: job.spellcasting.spellsRec,
        totalCantrips: job.spellcasting.cantrips,
        cantrips: job.spellcasting.cantripsRec,
        slots: job.spellcasting.slots
      },
      proficiencies: {
        weapons: proficiencies.weapons !== undefined ? proficiencies.weapons : [],
        armor: proficiencies.armor !== undefined ? proficiencies.armor : [],
        tools: proficiencies.tools !== undefined ? proficiencies.tools : [],
        skills: proficiencies.skills !== undefined ? proficiencies.skills : [],
        saves: []
      },
      equipment: {
        weapons: [],
        armor: [],
        tools: job.tools
      }
    }
    this.getSkills()
    this.getAbilities()
    this.getAbilityModifiers()

    // NOTE Saves temporary build stats to Local Storage, allowing the user to refresh the Results Page and retain their Questionnaire information
    window.localStorage.setItem('count', JSON.stringify(AppState.count))
    window.localStorage.setItem('job', JSON.stringify(AppState.job))
    window.localStorage.setItem('race', JSON.stringify(AppState.race))
    window.localStorage.setItem('background', JSON.stringify(AppState.background))
    window.localStorage.setItem('scores', JSON.stringify(AppState.chooseScores))
    window.localStorage.setItem('abilities', JSON.stringify(AppState.chooseAbilities))
    window.localStorage.setItem('character', JSON.stringify(AppState.character))
  }

  async saveCharacter() {
    AppState.character.scores = AppState.scores
    AppState.activeCharacter = AppState.character
    await api.post('api/characters', AppState.activeCharacter)
    router.push('Account')
  }

  setActiveCharacter(id) {
    AppState.activeCharacter = AppState.characters.find(c => c.id === id)
  }

  async editCharacter(body) {
    await api.put(`api/characters/${body.id}`, body)
  }

  async deleteCharacter(id) {
    await api.delete(`api/characters/${id}`)
  }
}

export const charactersService = new CharactersService()
