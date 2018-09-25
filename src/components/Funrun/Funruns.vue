<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-card-media
              src="https://farm5.staticflickr.com/4728/25523344408_88d90c85b7_k_d.jpg"
              height="125px"
              ></v-card-media>
            </v-flex>
            <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                <div>
                  <h2 class="white--text mb-0">My Funrun</h2>
                  <div>25th September 2018</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat to="/funruns/1"><v-icon left light>arrow_forward</v-icon>View Funrun</v-btn>
              </v-card-actions>
          </v-flex>
          </v-layout>
      </v-container>
    </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
