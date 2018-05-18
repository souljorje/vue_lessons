<template>
  <v-card>
    <v-card-media
      class="white--text"
      src="https://uploads-ssl.webflow.com/590c7017b65f8f486bbd1fca/5a9900b1a69cd80001f6e5f4_FOREX_Market-today_FXPIG%2065.jpg"
      height="300px">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">Awesome trading WebApp</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <v-card-title>
      <div>
        <span class="headline">Start trading now!</span>
      </div>
      <v-card-actions>
      <v-btn
        exact
        :to="{ name: 'stocks' }"
        color="primary">Start</v-btn>
    </v-card-actions>
    </v-card-title>

  </v-card>
</template>

<script>
export default {

};
</script>
