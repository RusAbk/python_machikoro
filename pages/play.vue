<template>
  <div>
    <h1 class="my-6">Игра</h1>
    <img src="/to_win.png" />
    <v-divider class="my-6"></v-divider>
    <v-row>
      <v-col v-for="(item, i) in $store.state.teams" :key="i" cols="12" sm="6" lg="4">
        <v-card outlined>
          <v-img
            height="120px"
            :src="item.logo || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          >
            <v-overlay absolute opacity="0.7" class="white--text align-end justify-start">
              <v-card-title>
                <h2>{{item.name}}</h2>
              </v-card-title>
              <v-chip class="mx-4 mb-4" color="orange" text-color="white">
                <v-avatar left class="orange darken-4">{{item.cash}}</v-avatar>$
              </v-chip>
            </v-overlay>
          </v-img>
          <v-card-text class="px-5 py-3">
            <h3 class="mb-3">Учредители:</h3>
            <v-simple-table dense class="mb-5">
              <thead>
                <tr>
                  <th>Фамилия</th>
                  <th>Ходов</th>
                  <th>Уже сделано</th>
                  <th>Ходить</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(player, i) in item.list" :key="i">
                  <td>{{player.name || 'Noname'}}</td>
                  <td><v-text-field dense v-model="player.steps" type="number"></v-text-field></td>
                  <td>{{player.done}}</td>
                  <td><v-btn x-small><v-icon dark>mdi-step-forward</v-icon></v-btn></td>
                </tr>
              </tbody>
            </v-simple-table>
            <h3 class="mb-3">Имущество:</h3>
            <div class="d-flex">
              <p v-if="item.cards.length == 0">Пока ничего нет 🤷‍♂️</p>
              <v-card
                v-for="(card, j) in item.cards"
                :key="j"
                width="60"
                class="ma-2 pa-1"
                flat
                outlined
                tile
              >
                <v-badge color="green" :content="$store.state.cards[card-1].win" offset-x="10">
                  <img :src="`/objects/${card}.png`" style="max-width: 100%;" />
                </v-badge>
              </v-card>
            </div>
          </v-card-text>
          <div v-if="stepInProgress">
            <v-divider></v-divider>
            <v-card-actions>
              <p>{{random}}</p>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diseResult: 1
    };
  },
  methods: {
    getDiseResult() {
        this.diseResult =  Math.floor(Math.random() * (7 - 1)) + 1;
    }
  }
};
</script>
