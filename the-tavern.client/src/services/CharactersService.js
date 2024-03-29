import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class CharactersService {
  async getCharacters(id) {
    const res = await api.get(`api/characters?creatorId=${id}`)
    AppState.characters = res.data
  }

  // ANCHOR Runs through the chosen Class, Race, and Background and pulls the relevant Proficiency information into the Character object
  getProficiencies() {
    const proficiencies = AppState.character.proficiencies
    const skills = AppState.skills
    const jobProf = AppState.job.proficiencies
    if (jobProf.weapons[0]) {
      jobProf.weapons.forEach(p => {
        proficiencies.weapons.push(p)
      })
    }
    if (jobProf.armor[0]) {
      jobProf.armor.forEach(p => {
        proficiencies.armor.push(p)
      })
    }
    if (jobProf.tools[0]) {
      jobProf.tools.forEach(p => {
        proficiencies.tools.push(p)
      })
    }
    jobProf.saves.forEach(p => {
      proficiencies.saves.push(p)
    })
    jobProf.skills.from.forEach(s => {
      skills.from.push(s)
    })
    skills.choose += jobProf.skills.choose

    if (AppState.job.subJobs[0]) {
      const subProf = AppState.job.subJobs.proficiencies
      if (subProf.weapons[0]) {
        subProf.weapons.forEach(p => {
          proficiencies.weapons.push(p)
        })
      }
      if (subProf.armor[0]) {
        subProf.armor.forEach(p => {
          proficiencies.armor.push(p)
        })
      }
      if (subProf.tools[0]) {
        subProf.tools.forEach(p => {
          proficiencies.tools.push(p)
        })
      }
      if (subProf.skills.choose) {
        subProf.skills.from.forEach(c => {
          skills.from = skills.from.filter(s => s !== c)
          skills.from.push(c)
        })
        skills.choose += subProf.skills.choose
      }
    }
    if (AppState.race.proficiencies) {
      const raceProf = AppState.race.proficiencies
      if (raceProf.weapons[0]) {
        raceProf.weapons.forEach(p => {
          proficiencies.weapons = proficiencies.weapons.filter(c => c !== p)
          proficiencies.weapons.push(p)
        })
      }
      if (raceProf.armor[0]) {
        raceProf.armor.forEach(p => {
          proficiencies.armor = proficiencies.armor.filter(c => c !== p)
          proficiencies.armor.push(p)
        })
      }
      if (raceProf.tools[0]) {
        raceProf.tools.forEach(p => {
          proficiencies.tools = proficiencies.tools.filter(c => c !== p)
          proficiencies.tools.push(p)
        })
      }
      if (raceProf.skills[0]) {
        raceProf.skills.forEach(p => {
          if (p.choose) {
            skills.from = p.from
            skills.choose += p.choose
          } else {
            proficiencies.skills = proficiencies.skills.filter(c => c !== p)
            skills.from = skills.from.filter(c => c !== p)
            proficiencies.skills.push(p)
          }
        })
      }
    }
    if (AppState.background.proficiencies) {
      const backProf = AppState.background.proficiencies
      if (backProf.tools[0]) {
        backProf.tools.forEach(p => {
          proficiencies.tools = proficiencies.tools.filter(c => c !== p)
          proficiencies.tools.push(p)
        })
      }
      if (backProf.skills[0]) {
        backProf.skills.forEach(p => {
          proficiencies.skills = proficiencies.skills.filter(c => c !== p)
          skills.from = skills.from.filter(c => c !== p)
          proficiencies.skills.push(p)
        })
      }
    }

    if (proficiencies.skills[0]) {
      const fullSkills = []
      proficiencies.skills.forEach(s => {
        fullSkills.push(AppState.skillsList.find(k => k.name === s))
      })
      proficiencies.skills = fullSkills
    }
  }

  // ANCHOR Runs through the chosen Class and pulls the relevant Abilities into the Character object
  getAbilities() {
    const abilities = AppState.character.abilities
    AppState.job.abilities.forEach(a => {
      abilities.push(a)
    })
    AppState.race.abilities.forEach(a => {
      abilities.push(a)
      if (a.title === 'Dwarven Toughness') AppState.character.health++
    })
    if (AppState.job.subJobs[0]) {
      AppState.job.subJobs.abilities.forEach(a => {
        abilities.push(a)
      })
    }
    abilities.forEach(a => {
      if (a.choose) {
        AppState.chooseAbilities.push(a)
      }
    })
  }

  // ANCHOR Runs through the chosen Class, Race, and Background and pulls the relevant Languages into the Character object
  getLanguages() {
    const languages = AppState.character.languages
    AppState.race.languages.forEach(l => {
      if (l.choose) {
        AppState.languages.from = l.from
        AppState.languages.choose += l.choose
      } else {
        languages.filter(c => c !== l)
        languages.push(l)
      }
    })
    AppState.background.languages.forEach(l => {
      if (l.choose) {
        AppState.languages.from = l.from
        AppState.languages.choose += l.choose
      } else {
        languages.filter(c => c !== l)
        languages.push(l)
      }
    })

    if (AppState.job.subJobs[0]) {
      if (AppState.job.subJobs.proficiencies.languages[0]) {
        AppState.job.subJobs.proficiencies.languages.forEach(l => {
          languages.filter(c => c !== l)
          languages.push(l)
        })
      }
    }
    languages.forEach(l => {
      AppState.languages.from = AppState.languages.from.filter(c => c !== l)
    })
  }

  getSpells() {
    const spellcasting = AppState.character.spellcasting

    if (AppState.race.spells.from) {
      if (AppState.race.spells.from.length > 1) {
        AppState.cantrips.from = AppState.race.spells.from
        AppState.cantrips.choose++
      } else {
        spellcasting.cantrips = AppState.race.spells.from
      }
      spellcasting.totalCantrips++
    }
    AppState.spellbook.forEach(s => {
      if (s.jobs.includes(AppState.character.job)) {
        if (s.level === 0) {
          AppState.cantrips.from.push(s)
        }
        if (s.level === 1) {
          AppState.spells.from.push(s)
        }
      }
    })
    if (AppState.job.subJobs[0]) {
      if (AppState.job.subJobs.spells) {
        AppState.job.subJobs.spells.forEach(s => spellcasting.spells.push(AppState.spellbook.find(p => p.name === s)))
      }
      if (AppState.job.subJobs.cantrips) {
        AppState.job.subJobs.cantrips.forEach(s => spellcasting.cantrips.push(AppState.spellbook.find(p => p.name === s)))
      }
    }
    AppState.spells.choose = spellcasting.totalSpells
    AppState.cantrips.choose = spellcasting.totalCantrips
  }

  getSkills() {
    const skills = []
    AppState.skills.from.forEach(s => {
      skills.push(AppState.skillsList.find(k => k.name === s))
    })
    AppState.skills.from = skills
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
      imgUrl: 'http://www.geocities.ws/Area51/Orion/3107/Lance21.jpg',
      scores: AppState.scores,
      languages: [],
      abilities: [],
      spellcasting: {
        spellAbility: job.spellcasting.ability,
        totalSpells: job.spellcasting.spells,
        spells: [],
        totalCantrips: job.spellcasting.cantrips,
        cantrips: [],
        slots: job.spellcasting.slots
      },
      proficiencies: {
        weapons: [],
        armor: [],
        tools: [],
        skills: [],
        saves: []
      },
      equipment: {
        weapons: [],
        armor: [],
        tools: job.tools
      }
    }
    this.getProficiencies()
    this.getSkills()
    this.getLanguages()
    this.getAbilities()
    this.getAbilityModifiers()
    this.getSpells()

    // NOTE Saves temporary build stats to Local Storage, allowing the user to refresh the Results Page and retain their Questionnaire information
    window.localStorage.setItem('count', JSON.stringify(AppState.count))
    window.localStorage.setItem('job', JSON.stringify(AppState.job))
    window.localStorage.setItem('race', JSON.stringify(AppState.race))
    window.localStorage.setItem('background', JSON.stringify(AppState.background))
    window.localStorage.setItem('scores', JSON.stringify(AppState.chooseScores))
    window.localStorage.setItem('skills', JSON.stringify(AppState.skills))
    window.localStorage.setItem('abilities', JSON.stringify(AppState.chooseAbilities))
    window.localStorage.setItem('languages', JSON.stringify(AppState.languages))
    window.localStorage.setItem('character', JSON.stringify(AppState.character))
    window.localStorage.setItem('spells', JSON.stringify(AppState.spells))
    window.localStorage.setItem('cantrips', JSON.stringify(AppState.cantrips))
  }

  sortStats() {
    AppState.character.proficiencies.weapons.sort()
    AppState.character.proficiencies.armor.sort()
    AppState.character.proficiencies.tools.sort()
    AppState.character.proficiencies.skills.sort()
    AppState.character.equipment.weapons.sort()
    AppState.character.equipment.armor.sort()
    AppState.character.equipment.tools.sort()
    AppState.character.abilities.sort()
    AppState.character.languages.sort()
    AppState.character.spellcasting.spells.sort()
    AppState.character.spellcasting.cantrips.sort()
  }

  async saveCharacter() {
    this.sortStats()
    AppState.character.scores = AppState.scores
    const res = await api.post('api/characters', AppState.character)
    AppState.activeCharacter = res.data
    await router.push('Account')
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
