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
  },
});
