<template>
  <div id="app">
    <TimeAndDate :date="date"></TimeAndDate>
    <Search></Search>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import TimeAndDate from "./components/TimeAndDate.vue";
import Search from "./components/Search.vue";
import moment from "moment";


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
    Search
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

  
    fetch(
      "https://prod-23.westcentralus.logic.azure.com/workflows/45d3d0cc1ce34c97b13e77b8f0860121/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tIy37ZhqrqKoe_QQMPTWAyQQ1jnjFbvRoW-5dK_-q3g"
    ).then(function(data) {
        this.background = data;
      });
    document.body.style.backgroundImage = "url('https://www.bing.com" + this.background + "')";
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: url(https://www.bing.com/az/hprichbg/rb/Policewomen_EN-US7694110536_1920x1080.jpg)
    no-repeat center center fixed;
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

input {
  border: none;
  outline: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Roboto Mono", sans-serif;
  font-size: 2em;
  padding: 0.25em;
  width: 100%;
}

.results {
  margin-top: 1em;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
  width: 100%;
}

.result {
  display: flex;
  padding: 0.5em;
  cursor: pointer;
}

.result .number {
  font-size: 2em;
  padding: 0.25em;
}

.result .content {
  padding: 0.5em;
}

.tag {
  color: #fff;
  padding: 0.1em 0.25em;
  border-radius: 3px;
}

.time-date {
  margin-bottom: 1em;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1em;
  width: 100%;
  text-align: center;
}

.time {
  font-size: 4em;
}

.date {
  font-size: 2em;
}
</style>
