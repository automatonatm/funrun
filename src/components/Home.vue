<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs-12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/funruns" class="info">Explore Funruns</v-btn>
      </v-flex>
      <v-flex xs-12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/funrun/new" class="info">Organise Funrun</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="funrun in funruns"
            :key="funrun.id"
            v-bind:src="funrun.imageUrl" @click="onLoadFunrun(funrun.id)">
          <div class="text-xs-center title">
            {{ funrun.title }}
          </div>
        </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs-12 class="text-xs-center">
        <p>Join our awesome funruns!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      funruns () {
        return this.$store.getters.featuredFunruns
      }
    },
    methods: {
      onLoadFunrun(id) {
        this.$router.push('/funruns/' + id)
      }
    }
  }

</script>

<style scoped>
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 4em;
    padding: 20px;
  }
</style>
