<template>
  <v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h3 class="primary--text">{{ funrun.title }}</h3>
        </v-card-title>
        <v-card-media
        :src="funrun.imageUrl"
        height="400px"
        ></v-card-media>
        <v-card-text><div class="info--text">{{ funrun.date }} - {{ funrun.location }}</div>
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
      }
    }
  }
</script>
