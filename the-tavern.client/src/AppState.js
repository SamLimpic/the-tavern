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
  showStats: false,
  show: 'start',
  save: true,
  confirm: false,
  role: null,
  style: null,
  quiz: undefined,

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
    score: 0,
    select: 0
  },
  jobs: [
    {
      title: 'Barbarian',
      role: 'Tank',
      style: 'Weapons',
      description: 'Powerful martial warriors that take and dish out damage better than anyone else.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Bard',
      role: 'Utility',
      style: 'Balance',
      description: 'An inspiring musician whose power echoes the music of creation.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Cleric',
      role: 'Tank',
      style: 'Spells',
      description: 'A priestly champion who wields divine magic in service of a higher power.',
      subclass: false,
      subjob: [
        {
          title: 'Knowledge',
          subclass: true,
          description: "You've devoted yourself to an all-knowing divine being",
          subjob: []
        },
        {
          title: 'Life',
          subclass: true,
          description: 'You cherish life and seek to preserve it above all else',
          subjob: []
        },
        {
          title: 'Light',
          subclass: true,
          description: "You've devoted yourself to a being of pure divine light",
          subjob: []
        },
        {
          title: 'Nature',
          subclass: true,
          description: 'You seek to protect and preserve the natural world',
          subjob: []
        },
        {
          title: 'Tempest',
          subclass: true,
          description: "You've pledged yourself to the wild and willful storm",
          subjob: []
        },
        {
          title: 'Trickery',
          subclass: true,
          description: "You've devoted yourself to a capricious and inexplicable being",
          subjob: []
        },
        {
          title: 'War',
          subclass: true,
          description: 'You seek to honor your god through bravery and combat',
          subjob: []
        }
      ]
    },
    {
      title: 'Druid',
      role: 'Support',
      style: 'Balance',
      description: 'A priest of the Old World, wielding the powers of nature and adopting animal forms.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Fighter',
      role: 'Damage',
      style: 'Weapons',
      description: 'A master of martial combat, skilled with a variety of weapons and armor.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Monk',
      role: 'Support',
      style: 'Weapons',
      description: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Paladin',
      role: 'Tank',
      style: 'Balance',
      description: 'A holy warrior whose divine powers are strictly bound by sacred oaths.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Ranger',
      role: 'Damage',
      style: 'Balance',
      description: 'A warrior who uses martial prowess and nature magic to combat threats in the wild.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Rogue',
      role: 'Utility',
      style: 'Weapons',
      description: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
      subclass: false,
      subjob: []
    },
    {
      title: 'Sorcerer',
      role: 'Damage',
      style: 'Spells',
      description: 'A spellcaster who draws on inherent magic from a gift or bloodline.',
      subclass: false,
      subjob: [
        {
          title: 'Draconic',
          subclass: true,
          description: 'You are descended from an ancient dragonic bloodline',
          subjob: []
        },
        {
          title: 'Wild Magic',
          subclass: true,
          description: 'Wild and unexplained magic imbues your bloodline from ages past',
          subjob: []
        }
      ]
    },
    {
      title: 'Warlock',
      role: 'Utility',
      style: 'Spells',
      description: 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
      subclass: false,
      subjob: [
        {
          title: 'Archfey',
          subclass: true,
          description: "You've pledged yourself to a wild and willful fey being",
          subjob: []
        },
        {
          title: 'Fiend',
          subclass: true,
          description: "You've pledged yourself to a dark and sinister fiend",
          subjob: []
        },
        {
          title: 'Great Old One',
          subclass: true,
          description: "You've pledged yourself to an incomprehensible ancient being",
          subjob: []
        }
      ]
    },
    {
      title: 'Wizard',
      role: 'Support',
      style: 'Spells',
      description: 'A scholarly magic-user capable of manipulating the structures of reality.',
      subclass: false,
      subjob: []
    }
  ],
  races: [
    {
      title: 'Dragonborn',
      description: 'Descendants of dragons, they live in clans who they value more than their life itself. They tend to be as strong as they are charismatic, just like their ancestors.',
      subrace: []
    },
    {
      title: 'Dwarf',
      description: 'Short, stout and hardworking, Dwarves live their long lives with a spirit of good and justice. Their sturdiness allows them to be more resistant than other classes in combat as well as resist poison.',
      subrace: [
        {
          title: 'Hill Dwarf',
          description: 'Wiser than their mountain siblings, they also tend to be even more sturdy than them, meaning they are able to withstand more hits before falling in combat.',
          subrace: []
        },
        {
          title: 'Mountain Dwarf',
          description: 'The mountain and the labor therein has made them stronger. They tends to be lighter-skinned as well as a bit taller.',
          subrace: []
        }
      ]
    },
    {
      title: 'Elf',
      description: 'Magical and gracious beings, long-lived Elves develop many different attitudes during their life.  They make for excellent artists and tend to be quite chaotic when it comes to laws',
      subrace: [
        {
          title: 'Dark Elf',
          description: 'Dark Elves were banished from the surface world in ages past, and developed a hate towards other elves. Despite this, they are quite charismatic and can master Drow magic.',
          subrace: []
        },
        {
          title: 'High Elf',
          description: 'High elves are more studious and value art more than the rest. In addition, they master both longswords and shortswords, as well as shortbows and longbows.',
          subrace: []
        },
        {
          title: 'Wood Elf',
          description: 'Their intuition and keen senses are found to be the best among all elves. Their training with weapons is extensive, making them proficient in the use of longswords, shortswords, shortbows and longbows.',
          subrace: []
        }
      ]
    },
    {
      title: 'Gnome',
      description: 'Great inventors, pranksters, and even better intellectuals, Gnomes live in solitude away from other communities. However, curiosity often drives many to adventure.',
      subrace: [
        {
          title: 'Forest Gnome',
          description: 'Forest Gnomes move stealthily through the wilderness, creating illusions to trick whoever gets close. Their affinity with animals let them communicate simple ideas to these beasts.',
          subrace: []
        },
        {
          title: 'Rock Gnome',
          description: 'Rock gnomes are known as the best tinkerers. These hardy beings can create little gadgets or things with a specific purpose, to be used for commodity or to maybe get them out of trouble.',
          subrace: []
        }
      ]
    },
    {
      title: 'Half-Elf',
      description: 'These beings combine the best of elves and humans, or so they say. Isolated from both worlds, they often work as ambassadors. They often wander in search of adventurers with whom they can find a sense of belonging.',
      subrace: []
    },
    {
      title: 'Halfling',
      description: 'Halflings are isolated, cheerful folk who love their homes and communities. However, a strong sense of curiosity inhabits most of them. They are extremely agile, but not as fast as other races',
      subrace: [
        {
          title: 'Lightfoot Halfling',
          description: 'Lightfoot Halflings can easily hide behind anything that is taller than themselves and tend to be more charismatic than the rest from their race.',
          subrace: []
        },
        {
          title: 'Stout Halfling',
          description: 'Stout Halflings are similar in a certain way to dwarves. They are as stout as their name implies, and have a resistance to poison.',
          subrace: []
        }
      ]
    },
    {
      title: 'Half-Orc',
      description: 'Half orcs have orc blood running through their veins, which makes them much stronger and hardier than normal people. Their high endurance makes them almost impossible to fell in combat.',
      subrace: []
    },
    {
      title: 'Human',
      description: 'Well… I suppose you are a human, so you should know what we are good at. Humans are quite more anxious and eager to adventure than the other races due to their relatively short lives.',
      subrace: []
    },
    {
      title: 'Tiefling',
      description: 'These are beings of infernal blood due to an ancient demonic pact somewhere in their long lineage. They tend to be received with mistrust by superstitious people.',
      subrace: []
    }
  ],
  backgrounds: [
    {
      title: 'Acolyte',
      description: 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world.'
    },
    {
      title: 'Charlatan',
      description: "You have always had a way with people. You know what makes them tick, and with a few leading questions you can read them like they were children's books."
    },
    {
      title: 'Criminal',
      description: 'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.'
    },
    {
      title: 'Entertainer',
      description: 'You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Whatever techniques you use, your art is your life.'
    },
    {
      title: 'Folk Hero',
      description: 'You come from a humble social rank, but your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.'
    },
    {
      title: 'Guild Artisan',
      description: "You are a member of an artisan's guild. You've made your way from an apprentice to a master artisan, under the sponsorship of your guild, you became a master in your own right."
    },
    {
      title: 'Hermit',
      description: 'You lived in seclusion for a formative part of your life. In your time apart from the clamor of society, you found quiet solitude, and perhaps some of the answers you were looking for.'
    },
    {
      title: 'Noble',
      description: 'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.'
    },
    {
      title: 'Outlander',
      description: "The wilds are in your blood, whether you were a nomad, an explorer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild."
    },
    {
      title: 'Sage',
      description: 'You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.'
    },
    {
      title: 'Sailor',
      description: 'You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.'
    },
    {
      title: 'Soldier',
      description: 'War has been your life for as long as you care to remember. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.'
    },
    {
      title: 'Urchin',
      description: "You grew up on the streets alone, orphaned, and poor, You had no one to watch over you or to provide for you, so you learned to provide for yourself. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each."
    }
  ],
  stats: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']
})
