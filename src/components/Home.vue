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
        <v-carousel>
          <v-carousel-item
            v-for="funrun in funruns"
            :key="funrun.id"
            v-bind:src="funrun.imageUrl">
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
    data () {
      return {
        funruns: [
          { imageUrl: 'https://farm5.staticflickr.com/4728/25523344408_88d90c85b7_k_d.jpg', id: 'asdf12345asdf', title: 'Funrun in London' },
          { imageUrl: 'https://farm5.staticflickr.com/4414/36574024414_977fb861c2_k_d.jpg', id: 'asdf098765432asdf', title: 'Funrun in Berlin' }
        ]
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
