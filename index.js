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
      deffense: 40,
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
      deffense: 59,
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
      deffense: 43,
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
      resistances: ["fire", "ice", "grass", "steal"]
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
      deffense: 50,
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
    return pokemon.ability.primary;
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
    name: "flamethower",
    type: "fire"
  };
  
  console.log("¿Pikachu es resistente al movimiento 'Rain dance'?", resistsMove(pikachu, rainDanceMove));
  console.log("¿Pikachu es resistente al movimiento 'Flamethrower'?", resistsMove(pikachu, flamethrowerMove));
  
  function isWeakAgainst(attackData) {
    const attackerType = attackData.attacker.type;
    const attackedWeaknesses = attackData.attacked.modifiers.weakness;
  
    return attackedWeaknesses.includes(attackerType);
  }
  
  const attackData = {
    attacker: pikachu,
    attacked: squirtle
  };
  
  console.log("¿Squirtle es débil frente a Pikachu?", isWeakAgainst(attackData));
  
  function isStrongAgainst(attackData) {
    const attackerType = attackData.attacker.type;
    const attackedResistances = attackData.attacked.modifiers.resistances;
  
    return attackedResistances.includes(attackerType);
  }
  
  function addAbility(pokemon, abilityData) {
    const abilityType = Object.keys(abilityData)[0];
    const abilityName = abilityData[abilityType];
  }

  const abilityData = {
    secondary: "Discharge"
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

  
  function getAttackModifier(attackData) {
    const attackerType = attackData.attacker.type;
    const attackedWeaknesses = attackData.attacked.modifiers.weakness;
    const attackedResistances = attackData.attacked.modifiers.resistances;
  
    if (attackedWeaknesses.includes(attackerType)) {
      return 2;
    } else if (attackedResistances.includes(attackerType)) {
      return 0.5;
    } else {
      return 1;
    }
  }
  const attackModifier = getAttackModifier(attackData);
  console.log("Modificador de ataque:", attackModifier);


function getAttackLog(attackData) {
    const { attacker, attacked, move, damage } = attackData;
    return `${attacker} used ${move}! ${attacked} lost ${damage} HP!`;
  }
  
  const attackLog = getAttackLog(attackData);
  console.log(attackLog);

  function calculateDamage(attacker, attacked) {
    const attackPower = attacker.stats.attack;
    const deffensePower = attacked.stats.deffense;
    const modifiers = getAttackModifier({
            attacker: attacker,
            attacked: attacked,
    });
    return Math.floor((2 * attacker.level / 5 + 2) * attackPower / deffensePower);
}

function getRandomMove(pokemon) {
    const moves = pokemon.moves
    const randomIndex = Math.floor(Math.random() * moves.length)
    return moves [randomIndex];
}

function bettle(pokemon1, pokemon2) {
    const bettleResult ={
        rounds: 0,
        results: {
            winner: null,
            loser: null
        },
        history: []
    };
}


function battle(pokemon1, pokemon2) {
    let rounds = 0;
    const history = [];
  
    while (pokemon1.stats.hp > 0 && pokemon2.stats.hp > 0) {
      const attackingPokemon = pokemon1.stats.speed >= pokemon2.stats.speed ? pokemon1 : pokemon2;
      const attackedPokemon = attackingPokemon === pokemon1 ? pokemon2 : pokemon1;
  
      const move = getRandomMove(attackingPokemon);
      const damage = calculateDamage(attackingPokemon, attackedPokemon);
      attackedPokemon.stats.hp = Math.max(attackedPokemon.stats.hp - damage, 0);
  
      const attackLog = getAttackLog({
        attacker: attackingPokemon.name,
        attacked: attackedPokemon.name,
        move: move,
        damage: damage,
        modifier: damage > calculateDamage(attackingPokemon, attackedPokemon) ? "weak" : "resistant"
      });
  
      history.push(attackLog);
      rounds++;
  
      if (attackedPokemon.stats.hp <= 0) {
        break; 
      }
    }
  
    const winner = pokemon1.stats.hp > 0 ? pokemon1 : pokemon2;
    const loser = pokemon1.stats.hp > 0 ? pokemon2 : pokemon1;
  
    return {
      rounds: rounds,
      results: {
        winner: {
          name: winner.name,
          hp: winner.stats.hp
        },
        loser: {
          name: loser.name,
          hp: loser.stats.hp
        }
      },
      history: history
    };
}
  const battleResult = battle(pikachu, squirtle);
  console.log(battleResult);
  
  
      
      