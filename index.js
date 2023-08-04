const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod"
  },
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90
  },
  moves: [
    "Quick Attack",
    "Volt Tackle",
    "Iron Tail",
    "Thunderbolt"
  ],
  modifiers: {
    weakness: ["ground"],
    resistances: ["electric", "flying", "water", "steel"]
  }
};

const bulbasaur = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll"
  },
  stats: {
    hp: 45,
    attack: 49,
    defense: 59,
    speed: 45
  },
  moves: [
    "Growl",
    "Tackle",
    "Vine Whip",
    "Razor Leaf"
  ],
  modifiers: {
    weakness: ["fire", "ice", "flying", "psychic"],
    resistances: ["water", "grass", "electric", "fighter"]
  }
};

const charmander = {
  name: "Charmander",
  type: "fire",
  ability: {
    primary: "Blaze",
    hidden: "Solar Power"
  },
  stats: {
    hp: 39,
    attack: 52,
    defense: 43,
    speed: 65
  },
  moves: [
    "Growl",
    "Scratch",
    "Flamethrower",
    "Dragon Breath"
  ],
  modifiers: {
    weakness: ["water", "ground", "rock"],
    resistances: ["fire", "ice", "grass", "steel"]
  }
};

const squirtle = {
  name: "Squirtle",
  type: "water",
  ability: {
    primary: "Torrent",
    hidden: "Rain Dish"
  },
  stats: {
    hp: 44,
    attack: 48,
    defense: 50,
    speed: 43
  },
  moves: [
    "Tackle",
    "Tail Whip",
    "Water Gun",
    "Hydro Pump"
  ],
  modifiers: {
    weakness: ["electric", "grass"],
    resistances: ["water", "fire", "ice", "steel"]
  }
};

function getMoves(pokemon) {
  return pokemon.moves;
}

console.log("Movimientos de Pikachu:", getMoves(pikachu));

function getPrimaryAbility(pokemon) {
  return pokemon.ability?.primary || "Habilidad no disponible";
}

console.log("Habilidad primaria de Bulbasaur:", getPrimaryAbility(bulbasaur));

function getWeaknesses(pokemon) {
  return pokemon.modifiers.weakness;
}

console.log("Tipos contra los que es débil Charmander:", getWeaknesses(charmander));

function resistsType(pokemon, type) {
  const resistances = pokemon.modifiers.resistances;
  return resistances.includes(type);
}

console.log("¿Charmander es resistente al tipo 'electric'?", resistsType(charmander, "electric"));
console.log("¿Charmander es resistente al tipo 'fire'?", resistsType(charmander, "fire"));

function resistsMove(pokemon, move) {
  const resistances = pokemon.modifiers.resistances;
  return resistances.includes(move.type);
}

const rainDanceMove = {
  name: "Rain dance",
  type: "water"
};
const flamethrowerMove = {
  name: "Flamethrower",
  type: "fire"
};

console.log("¿Pikachu es resistente al movimiento 'Rain dance'?", resistsMove(pikachu, rainDanceMove));
console.log("¿Pikachu es resistente al movimiento 'Flamethrower'?", resistsMove(pikachu, flamethrowerMove));

function isWeakAgainst(attacker, attacked) {
  const attackerType = attacker.type;
  const attackedWeaknesses = attacked.modifiers.weakness;

  return attackedWeaknesses.includes(attackerType);
}

const attackData = {
  attacker: pikachu,
  attacked: squirtle
};

console.log("¿Squirtle es débil frente a Pikachu?", isWeakAgainst(attackData.attacker, attackData.attacked));

function isStrongAgainst(attacker, attacked) {
  const attackerType = attacker.type;
  const attackedResistances = attacked.modifiers.resistances;

  return attackedResistances.includes(attackerType);
}

function addAbility(pokemon, abilityData) {
  const abilityType = Object.keys(abilityData)[0];
  const abilityName = abilityData[abilityType];

  if (abilityType === "primary" || abilityType === "hidden") {
    if (!pokemon.ability[abilityType]) {
      pokemon.ability[abilityType] = abilityName;
    } else {
      console.log(`El Pokémon ya tiene una habilidad ${abilityType}`);
    }
  } else {
    console.log(`Tipo de habilidad no válido: ${abilityType}`);
  }

  return pokemon;
}

const abilityData = {
  primary: "Discharge"
};

const pikachuWithAbility = addAbility(pikachu, abilityData);
console.log("Pikachu con nueva habilidad:", pikachuWithAbility);

function addMove(pokemon, move) {
  return {
    ...pokemon,
    moves: [...pokemon.moves, move]
  };
}

const newMove = "Discharge";
const pikachuWithMove = addMove(pikachu, newMove);
console.log("Pikachu con nuevo movimiento:", pikachuWithMove);

function removeMove(pokemon, moveToRemove) {
  const updatedMoves = pokemon.moves.filter((move) => move !== moveToRemove);

  return {
    ...pokemon,
    moves: updatedMoves
  };
}

const moveToRemove = "Iron Tail";
const pikachuWithoutMove = removeMove(pikachu, moveToRemove);

console.log("Pikachu sin el movimiento 'Iron Tail':", pikachuWithoutMove);

function getAttackModifier(attacker, attacked) {
  const attackerType = attacker.type;
  const attackedWeaknesses = attacked.modifiers.weakness;
  const attackedResistances = attacked.modifiers.resistances;

  if (attackedWeaknesses.includes(attackerType)) {
    return 2;
  } else if (attackedResistances.includes(attackerType)) {
    return 0.5;
  } else {
    return 1;
  }
}


function getAttackLog(attacker, attacked, damage) {
  const effectiveness = getAttackModifier(attacker, attacked);
  const isSuperEffective = effectiveness > 1;
  const move = attacker.moves[Math.floor(Math.random() * attacker.moves.length)];

  let log = `${attacker.name} used ${move}! ${attacked.name} lost ${damage} HP!`;
  if (isSuperEffective) {
    log += " It's super effective!";
  }

  return log;
}


function calculateDamage(attacker, attacked) {
  const attackerAttack = attacker.stats.attack;
  const attackedDefense = attacked.stats.defense;
  const modifier = getAttackModifier(attacker, attacked);

  const damage = 0.5 * attackerAttack * (attackerAttack / attackedDefense) * modifier;
  return damage;
}

const damageToSquirtle = calculateDamage(attackData.attacker, attackData.attacked);
console.log("Daño ocasionado a Squirtle:", damageToSquirtle)

function battle(pokemon1, pokemon2) {
  let winner = null;
  let loser = null;
  let rounds = 0;
  const history = [];

  while (pokemon1.stats.hp > 0 && pokemon2.stats.hp > 0) {
    const firstAttacker = pokemon1.stats.speed >= pokemon2.stats.speed ? pokemon1 : pokemon2;
    const secondAttacker = firstAttacker === pokemon1 ? pokemon2 : pokemon1;

    const damageToSecond = calculateDamage(firstAttacker, secondAttacker);
    secondAttacker.stats.hp -= damageToSecond;

    const damageToFirst = calculateDamage(secondAttacker, firstAttacker);
    firstAttacker.stats.hp -= damageToFirst;

    const logFirst = getAttackLog(firstAttacker, secondAttacker, damageToSecond);
    history.push(logFirst);

    if (secondAttacker.stats.hp <= 0) {
      winner = firstAttacker;
      loser = secondAttacker;
      break;
    }

    const logSecond = getAttackLog(secondAttacker, firstAttacker, damageToFirst);
    history.push(logSecond);

    if (firstAttacker.stats.hp <= 0) {
      winner = secondAttacker;
      loser = firstAttacker;
      break;
    }

    rounds++;
  }

  const results = {
    winner: {
      name: winner.name,
      hp: winner.stats.hp
    },
    loser: {
      name: loser.name,
      hp: loser.stats.hp
    }
  };

  return {
    rounds: rounds,
    results: results,
    history: history
  };
}

const battleResult = battle(pikachu, squirtle);
console.log(battleResult);

