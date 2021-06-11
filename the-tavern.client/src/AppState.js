import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  // quiz: [],
  // question: {},
  questions: {
    role: [],
    style: [],
    trade: []
  },
  activeQuestion: {},
  // resultsArr: ['Tank', 'Damage', 'Support', 'Utility', 'Weapons', 'Spells', 'Balance'],
  // results: {},
  // attributesArr: ['Tank', 'Damage', 'Support', 'Utility', 'Weapons', 'Spells', 'Balance'],
  attributes: {},
  count: {},
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
  abilityScore: [],
  activeScores: {},
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
  activeNum: 0,
  chooseAbilities: [],
  chooseScores: []
})
