<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      mini-variant
      clipped
      fixed
      app
      temporary
    >
      <v-list class="mt-6">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left="true"
      fixed
      app
      dark
      short
      color="deep-purple darken-1"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      fixed
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-play-outline',
          title: 'Игра',
          to: '/'
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Команды',
          to: '/teams'
        },
        {
          icon: 'mdi-store-outline',
          title: 'Карточки',
          to: '/cards'
        },
        {
          icon: 'mdi-account-details-outline',
          title: 'Список учеников',
          to: '/students'
        }
      ],
      title: 'Компьютерная долина'
    }
  },
  methods: {
    setTeamsCount(){
      this.$store.commit('setTeamsCount', this.teamsCount);
    }
  },
  created(){
    this.teamsCount = this.$store.state.teamsCount;
  }
}
</script>
