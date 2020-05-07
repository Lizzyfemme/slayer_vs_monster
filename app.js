new Vue({
  el: "#app",
  data: {
    slayerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.slayerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      const slayerMinDamage = 3;
      const slayerMaxDamage = 10;

      const slayerHit = this.damage(slayerMinDamage, slayerMaxDamage);

      this.monsterHealth -= slayerHit;
      this.turns.unshift({
        isPlayer: true,
        text: "Slayer hits Monster for " + slayerHit,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function () {
      const slayerMinDamage = 10;
      const slayerMaxDamage = 20;
      const slayerHit = this.damage(slayerMinDamage, slayerMaxDamage);

      this.monsterHealth -= slayerHit;
      this.turns.unshift({
        isPlayer: true,
        text: "Slayer hits Monster HARD for " + slayerHit,
      });
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
      this.turns.unshift({
        isPlayer: true,
        text: "Slayer heals",
      });
      this.monsterAttack();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },

    monsterAttack: function () {
      const monsterMinDamage = 5;
      const monsterMaxDamage = 12;
      const monsterHit = this.damage(monsterMinDamage, monsterMaxDamage);
      this.slayerHealth -= monsterHit;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Slayer for " + monsterHit,
      });
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
