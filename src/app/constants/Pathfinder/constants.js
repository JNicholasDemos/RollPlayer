export const attributeTypes = {
  STRENGTH: "strength",
  WISDOM: "wisdom",
  CHARISMA: "charisma",
  INTELLIGENCE: "intelligence",
  DEXTERITY: "dexterity",
  CONSTITUTION: "constitution",
};

export const classTypes = {
  ALCHEMIST: "alchemist",
  BARBARIAN: "barbarian",
  BARD: "bard",
  CAVALIER: "cavalier",
  CLERIC: "cleric",
  DRUID: "druid",
  FIGHTER: "fighter",
  GUNSLINGER: "gunslinger",
  INQUISITOR: "inquisitor",
  MAGUS: "magus",
  MONK: "monk",
  ORACLE: "oracle",
  PALADIN: "paladin",
  RANGER: "ranger",
  ROGUE: "rogue",
  SORCERER: "sorcerer",
  SUMMONER: "summoner",
  WITCH: "witch",
  WIZARD: "wizard",
};

export const skillTypes = [
  {
    name: "",
    dependentAttribute: "",
    untrained: true,
    armorPenalty: false,
    availableClasses: [],
  },
  {
    name: "Acrobatics",
    dependentAttribute: attributeTypes.DEXTERITY,
    classSkill: false,
    untrained: true,
    armorPenalty: true,
    availableClasses: [
      classTypes.BARBARIAN,
      classTypes.BARD,
      classTypes.GUNSLINGER,
      classTypes.MONK,
      classTypes.ROGUE,
    ],
  },
  {
    name: "Appraise",
    dependentAttribute: attributeTypes.INTELLIGENCE,
    untrained: true,
    armorPenalty: false,
    availableClasses: [
      classTypes.ALCHEMIST,
      classTypes.BARD,
      classTypes.CLERIC,
      classTypes.ROGUE,
      classTypes.SORCERER,
      classTypes.WIZARD,
    ],
  },
  {
    name: "Bluff",
    dependentAttribute: attributeTypes.CHARISMA,
    untrained: true,
    armorPenalty: false,
    availableClasses: [
      classTypes.BARD,
      classTypes.CAVALIER,
      classTypes.GUNSLINGER,
      classTypes.INQUISITOR,
      classTypes.ROGUE,
      classTypes.SORCERER,
    ],
  },
  {
    name: "Climb",
    dependentAttribute: attributeTypes.STRENGTH,
    untrained: true,
    armorPenalty: true,
    availableClasses: [
      classTypes.BARBARIAN,
      classTypes.BARD,
      classTypes.CAVALIER,
      classTypes.DRUID,
      classTypes.FIGHTER,
      classTypes.GUNSLINGER,
      classTypes.INQUISITOR,
      classTypes.MAGUS,
      classTypes.MONK,
      classTypes.RANGER,
      classTypes.ROGUE,
    ],
  },
  {
    name: "Craft",
    dependentAttribute: attributeTypes.INTELLIGENCE,
    untrained: true,
    armorPenalty: false,
    availableClasses: [
      classTypes.ALCHEMIST,
      classTypes.BARBARIAN,
      classTypes.BARD,
      classTypes.CAVALIER,
      classTypes.CLERIC,
      classTypes.DRUID,
      classTypes.FIGHTER,
      classTypes.GUNSLINGER,
      classTypes.INQUISITOR,
      classTypes.MAGUS,
      classTypes.MONK,
      classTypes.ORACLE,
      classTypes.PALADIN,
      classTypes.RANGER,
      classTypes.ROGUE,
      classTypes.SORCERER,
      classTypes.SUMMONER,
      classTypes.WITCH,
      classTypes.WIZARD,
    ],
  },
  {
    name: "Diplomacy",
    dependentAttribute: attributeTypes.CHARISMA,
    untrained: true,
    armorPenalty: false,
    availableClasses: [
      classTypes.BARD,
      classTypes.CAVALIER,
      classTypes.CLERIC,
      classTypes.INQUISITOR,
      classTypes.ORACLE,
      classTypes.PALADIN,
      classTypes.ROGUE,
    ],
  },
  {
    name: "Disable Device",
    dependentAttribute: attributeTypes.DEXTERITY,
    untrained: false,
    armorPenalty: true,
    availableClasses: [classTypes.ALCHEMIST, classTypes.ROGUE],
  },
  {
    name: "Disguise",
    dependentAttribute: attributeTypes.CHARISMA,
    untrained: true,
    armorPenalty: false,
    availableClasses: [
      classTypes.BARD,
      classTypes.INQUISITOR,
      classTypes.ROGUE,
    ],
  },
  {
    name: "Escape Artist",
    dependentAttribute: attributeTypes.DEXTERITY,
    untrained: true,
    armorPenalty: true,
    availableClasses: [
      classTypes.BARD,
      classTypes.INQUISITOR,
      classTypes.ROGUE,
    ],
  },
  {
    name: "Fly",
    dependentAttribute: attributeTypes.DEXTERITY,
    untrained: true,
    armorPenalty: true,
    availableClasses: [
      classTypes.ALCHEMIST,
      classTypes.DRUID,
      classTypes.MAGUS,
      classTypes.SORCERER,
      classTypes.SUMMONER,
      classTypes.WIZARD,
      classTypes.WITCH,
    ],
  },
];

/*
            <div>
              <div>Handle Animal</div>
              <div>Heal</div>
              <div>Knowledge (arcana)*</div>
              <div>Knowledge (dungeoneering)*</div>
              <div>Knowledge (engineering)*</div>
              <div>Knowledge (geography)*</div>
              <div>Knowledge (history)*</div>
              <div>Knowledge (local)*</div>
              <div>Knowledge (nature)*</div>
              <div>Knowledge (nobility)*</div>
            </div>
            <div>
              <div>Knowledge (planes)*</div>
              <div>Knowledge (religion)*</div>
              <div>Linguistics*</div>
              <div>Perception</div>
              <div>Perform</div>
              <div>Perform</div>
              <div>Profession*</div>
              <div>Ride</div>
              <div>Sense Motive</div>
              <div>Sleight of Hand*</div>
            </div>
            <div>
              <div>Spellcraft*</div>
              <div>Stealth</div>
              <div>Survival</div>
              <div>Swim</div>
              <div>Use Magic Device*</div>
            </div>
*/
