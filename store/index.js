import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    teamsCount: 1,
    studentList:[],
    teams: [
      {
        name: 'Лицо-книга инкорпорейтед',
        logo: 'http://placeimg.com/640/320/arch',
        cash: 3,
        cards: [1, 3, 6],
        list: [{
          name: '',
          steps: 0,
          done: 0
        }],
        stepInProgress: false
      }
    ],
    cards: [
      {
        title: 'Поле солнечных панелей',
        icon: '🌅',
        win: [1],
        winTrigger: 'all',
        profit: 1,
        price: 1
      },
      {
        title: 'Ферма биткоинов',
        icon: '₿',
        win: [2],
        winTrigger: 'all',
        profit: 1,
        price: 1
      },
      {
        title: 'Столовая',
        icon: '🍝',
        win: [2, 3],
        winTrigger: 'self',
        profit: 1,
        price: 1
      },
      {
        title: 'Модное кафе',
        icon: '🍹',
        win: [3],
        winTrigger: 'other',
        profit: 1,
        price: 2
      },
      {
        title: 'Полигон для роботов',
        icon: '🤖',
        win: [4],
        winTrigger: 'self',
        profit: 3,
        price: 2
      },
      {
        title: 'Производственный цех',
        icon: '🏭',
        win: [5],
        winTrigger: 'all',
        profit: 2,
        price: 4
      },
      {
        title: 'Склад инновационных материалов',
        icon: '💎',
        win: [6],
        winTrigger: 'other',
        profit: 1,
        price: 5
      }
    ]
  },
  mutations: {
    setTeamsCount(state, newCount) {
      let oldCount = state.teamsCount;
      state.teamsCount = newCount;

      if (oldCount > newCount) {
        state.teams.splice(newCount, oldCount - newCount);
      } else {
        for (let i = 0; i < newCount - oldCount; i++) {
          let newTeam = {
            name: 'Супер корпорация',
            logo: 'http://placeimg.com/640/320/arch?salt=' + Math.random(),
            cash: 3,
            cards: [],
            list: [{
              name: '',
              steps: 0,
              done: 0
            }],
            stepInProgress: false
          };
          state.teams.push(newTeam);
        }
      }
      console.log(state.teams);
    }
  }
})

export default store