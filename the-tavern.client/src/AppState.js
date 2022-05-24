import { reactive } from 'vue'

export const AppState = reactive({
  // ANCHOR Base Objects
  user: {},
  account: {},
  activeQuestion: {},
  job: {},
  race: {},
  background: {},
  character: {},
  activeCharacter: {},

  // SECTION Base Arrays
  tieBreakers: [],
  characters: [],
  abilityScore: [],
  chooseAbilities: [],
  chooseScores: [],

  // SECTION Base Variables
  built: false,
  showActive: false,
  showStats: false,
  show: 'start',
  save: true,
  confirm: false,
  role: null,
  style: null,

  // SECTION Dictionaries
  activeRolls: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  },
  attributes: {
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
  skills: {
    choose: 0,
    from: []
  },
  languages: {
    choose: 0,
    from: []
  },
  spells: {
    choose: 0,
    from: []
  },
  cantrips: {
    choose: 0,
    from: []
  },
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
    spells: 0,
    cantrips: 0,
    skills: 0,
    equipment: 0,
    mods: 0,
    modChoice: 0,
    abilities: 0,
    score: 0
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
  stats: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
})
