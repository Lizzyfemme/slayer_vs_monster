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
      this.monsterAttack();
    },
    specialAttack: function () {
      const slayerMinDamage = 10;
      const slayerMaxDamage = 20;

      this.monsterHealth -= this.damage(slayerMinDamage, slayerMaxDamage);
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function () {
      if (this.slayerHealth <= 90) {
        this.slayerHealth += 10;
      } else {
        this.slayerHealth = 100;
      }
      this.monsterAttack();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },

    monsterAttack: function () {
      const monsterMinDamage = 5;
      const monsterMaxDamage = 12;
      this.slayerHealth -= this.damage(monsterMinDamage, monsterMaxDamage);
      this.checkWin();
    },
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
