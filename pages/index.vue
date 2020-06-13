<template>
  <div>
    <h1 class="my-6">Игра</h1>
    <v-divider class="my-6"></v-divider>
    <v-row>
      <v-col v-for="(item, i) in $store.state.teams" :key="i" cols="12" sm="6" md="4">
        <v-card outlined>
          <v-img
            height="120px"
            :src="item.logo || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          >
            <v-overlay absolute opacity="0.7" class="white--text align-end justify-start">
              <v-card-title>{{item.name}}</v-card-title>
              <v-chip class="mx-4 mb-4" color="orange" text-color="white">
                <v-avatar left class="orange darken-4">{{item.cash}}</v-avatar>$
              </v-chip>
            </v-overlay>
          </v-img>
          <v-card-text class="px-5 py-3">
            <h3 class="mb-3">Учредители:</h3>
            <v-expansion-panels class="mb-4">
              <v-expansion-panel v-for="(player, i) in item.list" :key="i">
                <v-expansion-panel-header>
                  {{player.name || 'Noname'}}
                  <v-spacer></v-spacer>
                  <v-chip
                    class="flex-grow-0 mr-3"
                    color="green lighten-3"
                    dark
                    small
                  >{{player.steps}} / {{player.done}}</v-chip>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <strong>Заработано ходов:</strong>
                  <v-btn fab outlined x-small color="blue-grey lighten-3" class="mr-2" @click="player.steps > 0 ? player.steps-- : '' ">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  {{player.steps}}
                  <v-btn fab outlined x-small color="blue-grey lighten-3" class="ml-2" @click="player.steps++">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <br />
                  <strong>Сделано ходов:</strong>
                  {{player.done}}
                  <br />
                  <div class="text-right mt-3">
                    <v-spacer></v-spacer>
                    <v-btn small color="green lighten-3" dark outlined v-if="player.steps > player.done">
                      <v-icon>mdi-step-forward</v-icon>сделать ход
                    </v-btn>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <h3 class="mb-3">Имущество:</h3>
            <div class="d-flex">
              <p v-if="item.cards.length == 0">Пока ничего нет 🤷‍♂️</p>
              <v-tooltip top v-for="(card, j) in item.cards" :key="j">
                <template v-slot:activator="{ on, attrs }">
                  <span
                    style="font-size:40px;"
                    v-bind="attrs"
                    v-on="on"
                    class="ma-1"
                  >{{$store.state.cards[card-1].icon}}</span>
                </template>
                <span>
                  Выигрывает при
                  <v-icon
                    class="mr-1 deep-purple--text text--lighten-3"
                    v-for="(num, i) in $store.state.cards[card-1].win"
                    :key="i"
                    size="x-large"
                  >mdi-dice-{{num}}</v-icon>
                </span>
              </v-tooltip>
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
      this.diseResult = Math.floor(Math.random() * (7 - 1)) + 1;
    }
  }
};
</script>
