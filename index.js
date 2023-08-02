const getPikachu = () => ({

        name: "Pikachu",
        type: "electric",
        ability: {
            "primary": "Static",
            "hidden": "Lightning rod"
        },
        stats: {
            hp: 35,
            attack: 55,
            deffense: 40,
            speed: 90
        },
        moves: [
            "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
        ],
        modifiers: {
            "weakness": ["ground"],
            "resistances": ["electric", "flying", "water", "steel"]
        }
    
})
function getMoves (pokemon) {
    return pokemon.moves;
}
const pokemonPikachu = getPikachu();
console.log("Movimientos de Pikachu:", getMoves(pokemonPikachu));


const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
    
} 

function getPrimaryAbility(pokemon) {
    return pokemon.ability.primary;
}
console.log("Habilidad primaria de Bulbasaur:", getPrimaryAbility(bulbasaur));


const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}

function getWeaknesses(pokemon) {
    return pokemon.modifiers.weakness;
}
console.log("Tipos contra los que es débil Charmander:", getWeaknesses(charmander));



const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}


//function getResistances(pokemon) {
//    return pokemon.modifiers.weakness;
//  }
  
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
      "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
      "weakness": ["ground"],
      "resistances": ["electric", "flying", "water", "steel"]
    }
  };
  
  function getResistances(pokemon) {
      return pokemon.modifiers.resistances;
  }
console.log("Tipos contra los que es débil Pikachu:", getResistances(pikachu));
  

function resistsType(pokemon, type) {
    const resistances = pokemon.modifiers.resistances;
    return resistances.includes(type);
    
}
  console.log("¿pikachu es recistente al tipo 'electric'?",resistsType(pikachu,"electric"));
  console.log("¿pikachu es recistente al tipo 'fire'?",resistsType(pikachu, "fire"));
  //const pikachu= getPikachu();
  console.log("Tipos contra los que es resistente Squirtle:", getResistances(squirtle));
  console.log("Tipos contra los que es resistente Pikachu:", getResistances(pikachu));
  


function resistsMove(pokemon, move ) {
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
  
  
  
  
  
  