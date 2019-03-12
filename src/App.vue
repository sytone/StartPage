<template>
  <div id="app">
    <TimeAndDate :date="date"></TimeAndDate>
    <QuickLinks></QuickLinks>
    <Search></Search>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import TimeAndDate from "./components/TimeAndDate.vue";
import Search from "./components/Search.vue";
import QuickLinks from "./components/QuickLinks.vue";
import moment from "moment";
import axios from "axios";

export default {
  name: "app",
  data: function() {
    return {
      date: null,
      background: ""
    };
  },
  components: {
    TimeAndDate,
    Search,
    QuickLinks
  },
  methods: {
    doTime: function() {
      this.date = moment();
    }
  },
  created: function() {
    this.date = moment();
  },
  mounted: function() {
    this.doTime();

    setInterval(() => {
      this.doTime();
    }, 1000);

    const self = this;
    axios
      .get("/backgroundimage")
      .then(function(response) {
        self.background = response.data;
        document.body.style.backgroundImage =
          "url('https://www.bing.com" + self.background + "')";
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: url() no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Roboto Mono", sans-serif;
  font-size: 14px;

  padding: 2em;
}

p {
  margin: 0;
}

#app {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
