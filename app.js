new Vue({
  el: "#app",
  data: {
    slayerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.slayerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      const slayerMinDamage = 3;
      const slayerMaxDamage = 10;
      const monsterMinDamage = 5;
      const monsterMaxDamage = 12;

      this.monsterHealth -= this.damage(slayerMinDamage, slayerMaxDamage);
      if (this.checkWin()) {
        return;
      }
      this.slayerHealth -= this.damage(monsterMinDamage, monsterMaxDamage);
      this.checkWin();
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
    damage: function (minDamage, maxDamage) {
      return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.slayerHealth <= 0) {
        if (confirm("The monster beat you! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
