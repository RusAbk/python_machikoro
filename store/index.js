import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    teamsCount: 1,
    studentList:[],
    teams: [
      {
        name: 'Инста-килограмм',
        logo: 'https://avatars.mds.yandex.net/get-zen_doc/1707291/pub_5dea15533d873600aeef0b78_5dea15cf78125e00ae3c3ad0/scale_1200',
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
        win: [1],
        profit: 1,
        price: 1
      },
      {
        win: [2],
        profit: 1,
        price: 1
      },
      {
        win: [2, 3],
        profit: 1,
        price: 1
      },
      {
        win: [3],
        profit: 1,
        price: 2
      },
      {
        win: [4],
        profit: 3,
        price: 2
      },
      {
        win: [5],
        profit: 2,
        price: 4
      },
      {
        win: [6],
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
            logo: 'https://avatars.mds.yandex.net/get-zen_doc/1707291/pub_5dea15533d873600aeef0b78_5dea15cf78125e00ae3c3ad0/scale_1200',
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