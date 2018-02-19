new Vue({
  el: '#app',
  data: {
    playerHP: 0,
    monsterHP: 0,
    charged: false,
    turns: [],
    gameStarted: false,
    gameEnd: false,
  },
  methods: {
    getRandom (min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
    turn (target, action) {
      const power = this.getRandom(4, 8);
      let currentPower = power;
      let actor = target === 'player' ? 'monster' : 'player';
      switch (action) {
        case 'attack':
          this[`${target}HP`] -= power;
          break;
        case 'slug':
          this[`${target}HP`] -= 20 - power;
          currentPower = 20 - power;
          break;
        case 'heal':
          this[`${target}HP`] += Math.ceil(power * 1.3);
          currentPower = Math.ceil(power * 1.3);
          if (this.playerHP > 100) {
            this.playerHP = 100;
          }
          if (this.monsterHP > 100) {
            this.monsterHP = 100;
          }
          actor = target;
          break;
        default:
          break;
      }
      this.turns.push({
        actor,
        action,
        power: currentPower
      })
      if (this.playerHP <= 0) {
        this.playerHP = 0;
        this.gameStarted = false;
        this.gameEnd = 'You lose!'
        return
      } else if (this.monsterHP <= 0) {
        this.monsterHP = 0;
        this.gameStarted = false;
        this.gameEnd = 'You win!'
        return
      }
      this.charged = this.getRandom(0, 4) === 1 ? true : false
      if ((target === 'monster' && action !== 'heal') || (action === 'heal' && target === 'player')) {
        this.monsterAction();
      }
    },
    monsterAction () {
      if (this.charged) {
        this.turn('player', 'slug')
      } else if (this.playerHP - this.monsterHP > 20) {
        this.turn('monster', 'heal')
      } else {
        this.turn('player', 'attack')
      }
    },
  },
  updated () {
    let logs = document.querySelector('.log');
    logs.scrollTop = logs.scrollHeight;
  }
})