/* eslint-disable dot-notation */
import { AppState } from '../AppState'
import { api, dndApi } from './AxiosService'

class DndService {
  async buildData() {
    for (const job of AppState.jobs) {
      const res = await dndApi.get(`api/classes/${job.title.toLowerCase()}/spells`)
      if (res.data.results.length) {
        for (const spell of res.data.results) {
          const s = await dndApi.get(`${spell.url}`)
          if (s.data.level === 0) {
            AppState.data[job.title.toLowerCase()].cantrips.push(s.data)
          }
          if (s.data.level === 1) {
            AppState.data[job.title.toLowerCase()].spells.push(s.data)
          }
        }
      }
    }
    console.log(AppState.data)
  }

  async buildSpellBook() {
    const res = await dndApi.get('api/spells')
    for (const result of res.data.results) {
      const s = await dndApi.get(`${result.url}`)
      const data = s.data
      const spell = {
        name: data.name,
        desc: data.desc,
        level: data.level,
        range: data.range,
        time: data.casting_time,
        duration: data.duration,
        school: data.school.name,
        ritual: data.ritual,
        concentration: data.concentration,
        jobs: []
      }

      if (data.area_of_effect) {
        spell['area'] = {
          type: data.area_of_effect.type,
          size: `${data.area_of_effect.size} foot`
        }
      }

      data.classes.forEach(c => {
        spell.jobs.push(c.name)
      })

      if (spell.level === 0) {
        if (data.damage) {
          spell['damage'] = {
            at: data.damage.damage_at_character_level
          }
          if (data.damage.damage_type) {
            spell.damage['type'] = data.damage.damage_type.name
          }
        }
        await api.post('api/spells', spell)
      }
      if (spell.level === 1) {
        if (data.damage) {
          spell['damage'] = {
            at: data.damage.damage_at_slot_level
          }
          if (data.damage.damage_type) {
            spell.damage['type'] = data.damage.damage_type.name
          }
        }
        await api.post('api/spells', spell)
      }
    }
  }

  async getData(endpoint, query = '') {
    const res = await dndApi.get(`${endpoint}/${query}`)
    return res.data
  }
}

export const dndService = new DndService()
