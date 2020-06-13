<template>
  <div>
    <h1 class="my-6">Карточки объектов</h1>
    <p>Здесь Вы можете настроить игровые объекты, которые можно будет покупать по ходу игры</p>
    <v-row>
      <v-col cols="12" sm="3" v-for="(item, i) in $store.state.cards" :key="i">
        <v-card :color="getCardColor(item.winTrigger)">
          <v-card-text>
            <h2 class="text-center mb-4" style="font-size: 50px;line-height:1.1;">{{item.icon}}</h2>
            <v-text-field label="Название" v-model="item.title" dense></v-text-field>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Emoji" v-model="item.icon" dense></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="winTriggers"
                  v-model="item.winTrigger"
                  label="Условие выигрыша"
                  dense
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Цена" v-model="item.price" dense></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Прибыль" v-model="item.profit" dense></v-text-field>
              </v-col>
            </v-row>

            <strong class="mt-6 mb-0">
              Победные ходы
              <v-btn x-small fab color="green" outlined @click="item.win.push(1)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </strong>

            <v-row>
              <v-col cols="12" sm="3" dense v-for="(num, index) in item.win" :key="index">
                <v-text-field v-model="item.win[index]"></v-text-field>
              </v-col>
            </v-row>
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
      winTriggers: ["self", "all", "other"]
    };
  },
  methods: {
    getCardColor(type) {
      if (type == "all") return "blue lighten-5";
      if (type == "self") return "green lighten-5";
      if (type == "other") return "red lighten-5";
    }
  }
};
</script>