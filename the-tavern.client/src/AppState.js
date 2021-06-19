import { reactive } from 'vue'

export const AppState = reactive({
  user: {},
  account: {},
  questions: {
    role: [],
    style: [],
    trade: []
  },
  activeQuestion: {},
  attributes: {},
  count: {
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
  },
  tieBreakers: [],
  jobs: [
    {
      title: 'Barbarian',
      role: 'Tank',
      style: 'Weapons'
    },
    {
      title: 'Cleric',
      role: 'Tank',
      style: 'Spells'
    },
    {
      title: 'Paladin',
      role: 'Tank',
      style: 'Balance'
    },
    {
      title: 'Fighter',
      role: 'Damage',
      style: 'Weapons'
    },
    {
      title: 'Sorcerer',
      role: 'Damage',
      style: 'Spells'
    },
    {
      title: 'Ranger',
      role: 'Damage',
      style: 'Balance'
    },
    {
      title: 'Monk',
      role: 'Support',
      style: 'Weapons'
    },
    {
      title: 'Wizard',
      role: 'Support',
      style: 'Spells'
    },
    {
      title: 'Druid',
      role: 'Support',
      style: 'Balance'
    },
    {
      title: 'Rogue',
      role: 'Utility',
      style: 'Weapons'
    },
    {
      title: 'Warlock',
      role: 'Utility',
      style: 'Spells'
    },
    {
      title: 'Bard',
      role: 'Utility',
      style: 'Balance'
    }
  ],
  job: {},
  race: {},
  background: {},
  proficiencies: {},
  character: {},
  activeCharacter: {},
  characters: [],
  rawData: [],
  showActive: false,
  show: 'basics',
  abilityScore: [],
  activeScore: 0,
  characterScores: {
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
  },
  scores: {
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
  },
  activeScores: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  },
  activeNum: 0,
  chooseAbilities: [],
  chooseScores: [],
  stats: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
})
