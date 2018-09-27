<template>
  <v-container>
  <v-layout row wrap v-if="loading">
    <v-flex xs12 class="text-xs-center">
      <v-progress-circular
      indeterminate
      color="primary"
      :width="7"
      :size="70"
      v-if="loading"
      ></v-progress-circular>
    </v-flex>
  </v-layout>
  <v-layout row wrap v-else>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3 class="primary--text">{{ funrun.title }}</h3>
          <template v-if="userIsCreator">
            <v-spacer></v-spacer>
            <app-edit-funrun-details-dialog :funrun="funrun"></app-edit-funrun-details-dialog>
          </template>
        </v-card-title>
        <v-card-media
        :src="funrun.imageUrl"
        height="400px"
        ></v-card-media>
        <v-card-text><div class="info--text">{{ funrun.date | date }} - {{ funrun.location }}</div>
        <div>{{ funrun.description }}</div></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary">
          Register
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      funrun () {
        return this.$store.getters.loadedFunrun(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.funrun.creatorId
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
