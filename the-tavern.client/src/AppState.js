import { reactive } from 'vue'

export const AppState = reactive({
  // ANCHOR Base Objects
  user: {},
  account: {},
  activeQuestion: {},
  attributes: {},
  job: {},
  race: {},
  background: {},
  proficiencies: {},
  character: {},
  activeCharacter: {},

  // SECTION Base Arrays
  tieBreakers: [],
  characters: [],
  rawData: [],
  abilityScore: [],
  chooseAbilities: [],
  chooseScores: [],

  // SECTION Base Variables
  showActive: false,
  showStats: false,
  show: 'start',
  activeScore: 0,
  activeNum: 0,

  // SECTION Dictionaries
  activeScores: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  },
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
  questions: {
    role: [],
    style: [],
    trade: []
  },
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
  stats: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
})
