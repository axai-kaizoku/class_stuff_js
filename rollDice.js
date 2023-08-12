function rollDice () {
  let roll1;
  let roll2;
  let input;
  let total;
  while (input !== 'n') {
      roll1 = Math.floor(Math.random()*6)+1;
      roll2 = Math.floor(Math.random()*6)+1;
      total = Number(roll1) + Number(roll2);
      alert(`Roll 1 : ${roll1}`);
      alert(`Roll 2 : ${roll2}`);
      alert(`Total : ${total}`);
      input = prompt(`Do you want to roll again?(y/n)`);
  }
}

rollDice();