<template>
    <div>
        <h1 class="ma-6">Карточки</h1>
        <v-row>
            <v-card v-for="(item, i) in $store.state.cards" :key="i">
                <v-card-title>
                    <h3></h3>
                </v-card-title>
            </v-card>
        </v-row>
    </div>
</template>