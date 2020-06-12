<template>
  <div>
    <h1 class="my-6">Настройка команд</h1>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" class="d-flex align-center">
        <v-text-field label="Кол-во команд" @change="setTeamsCount" v-model="teamsCount"></v-text-field>
        <v-btn fab x-small color="red" outlined class="ml-2" @click="teamsCount > 1 ? setTeamsCount(--teamsCount) : ''">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn fab x-small color="green" outlined class="ml-1" @click="setTeamsCount(++teamsCount)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in $store.state.teams" :key="i" cols="12" sm="4">
        <v-card>
          <v-img
            height="150px"
            :src="item.logo || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
          >
            <v-overlay absolute opacity="0.7" class="white--text align-end justify-start">
              <v-card-title>{{item.name}}</v-card-title>
            </v-overlay>
          </v-img>
          <v-card-text class="px-5 py-3">
            <h3>Информация</h3>
            <v-text-field label="Название корпорации" v-model="item.name"></v-text-field>
            <v-text-field label="Фото-обложка" v-model="item.logo"></v-text-field>
            <v-text-field label="Капитал" v-model="item.cash"></v-text-field>
            <h3>
              Учредители
              <v-btn
                class="mx-2"
                x-small
                fab
                outlined
                color="green"
                @click="item.list.push({name:'', steps: 0, done: 0})"
              >
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </h3>
            <v-text-field
              label="Новый учредитель"
              v-for="(player, i) in item.list"
              :key="i"
              v-model="player.name"
            ></v-text-field>
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
