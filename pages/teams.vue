<template>
  <div>
    <h1 class="my-6">Настройка команд</h1>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" class="d-flex align-center">
        <v-text-field label="Кол-во команд" @change="setTeamsCount" v-model="teamsCount"></v-text-field>
        <v-btn
          fab
          x-small
          color="deep-purple darken-1"
          outlined
          class="ml-2"
          @click="teamsCount > 1 ? setTeamsCount(--teamsCount) : ''"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn fab x-small color="deep-purple darken-1" outlined class="ml-1" @click="setTeamsCount(++teamsCount)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in $store.state.teams" :key="i" cols="12" sm="4">
        <v-card>
          <v-img
            height="120px"
            :src="item.logo || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          >
            <v-overlay absolute opacity="0.7" class="white--text align-end justify-start">
              <v-card-title>{{item.name}}</v-card-title>
            </v-overlay>
          </v-img>
          <v-card-text>
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header><v-icon class="flex-grow-0 mr-1">mdi-clipboard-text-outline</v-icon> Информация</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-text-field color="deep-purple darken-1" label="Название корпорации" v-model="item.name"></v-text-field>
                  <v-text-field color="deep-purple darken-1" label="Фото-обложка" v-model="item.logo"></v-text-field>
                  <v-text-field color="deep-purple darken-1" label="Капитал" v-model="item.cash" suffix="$"></v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header><v-icon class="flex-grow-0 mr-1">mdi-account-tie-outline</v-icon> Учредители</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="(player, i) in item.list" :key="i">
                    <v-text-field
                      :label="`Учредитель ${i+1}`"
                      append-outer-icon="mdi-trash-can-outline"
                      v-model="player.name"
                      color="deep-purple darken-1"
                      @click:append-outer="item.list.splice(i, 1)"
                    ></v-text-field>
                  </div>

                  <v-btn
                    outlined
                    color="deep-purple darken-1"
                    @click="item.list.push({name:'', steps: 0, done: 0})"
                  >
                    <v-icon dark class="mr-2">mdi-account-plus-outline</v-icon> Добавить
                  </v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamsCount: 1
    };
  },
  methods: {
    setTeamsCount() {
      this.$store.commit("setTeamsCount", this.teamsCount);
    }
  }
};
</script>
