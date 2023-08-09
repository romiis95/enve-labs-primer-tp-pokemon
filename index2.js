const pikachu = {
};

const bulbasaur = {
};

const charmander = {
};

const squirtle = {
};

function getMoves(pokemon) {
  
}

function getPrimaryAbility(pokemon) {
  
}

function getWeaknesses(pokemon) {
  
}

function resistsType(pokemon, type) {
  
}

function resistsMove(pokemon, move) {
  
}

function isWeakAgainst(attacker, attacked) {

}

function isStrongAgainst(attacker, attacked) {
  
}

function addAbility(pokemon, abilityData) {
  
}

function addMove(pokemon, move) {

}

function removeMove(pokemon, moveToRemove) {
  
}

function getAttackModifier(attacker, attacked) {

}

function getAttackLog(attacker, attacked, damage) {

}

function calculateDamage(attacker, attacked) {
  // ...
}

function battle(pokemon1, pokemon2) {
  // ...
}


console.log("Movimientos de Pikachu:", getMoves(pikachu));
console.log("Habilidad primaria de Bulbasaur:", getPrimaryAbility(bulbasaur));
console.log("Tipos contra los que es débil Charmander:", getWeaknesses(charmander));

console.log("¿Charmander es resistente al tipo 'electric'?", resistsType(charmander, "electric"));
console.log("¿Charmander es resistente al tipo 'fire'?", resistsType(charmander, "fire"));

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

const attackData = {
  attacker: pikachu,
  attacked: squirtle
};

console.log("¿Squirtle es débil frente a Pikachu?", isWeakAgainst(attackData.attacker, attackData.attacked));

const abilityData = {
  primary: "Discharge"
};

const pikachuWithAbility = addAbility(pikachu, abilityData);
console.log("Pikachu con nueva habilidad:", pikachuWithAbility);

const newMove = "Discharge";
const pikachuWithMove = addMove(pikachu, newMove);
console.log("Pikachu con nuevo movimiento:", pikachuWithMove);

const moveToRemove = "Iron Tail";
const pikachuWithoutMove = removeMove(pikachu, moveToRemove);
console.log("Pikachu sin el movimiento 'Iron Tail':", pikachuWithoutMove);

const damageToSquirtle = calculateDamage(attackData.attacker, attackData.attacked);
console.log("Daño ocasionado a Squirtle:", damageToSquirtle);

const battleResult = battle(pikachu, squirtle);
console.log(battleResult);

  