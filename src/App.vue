<template>
  <div id="app" class="container-fluid">

    <TimeAndDate :date="date"></TimeAndDate>
    <QuickLinks></QuickLinks>
    <Search></Search>
    <div class="row">
      <div class="col">
    <LinkList linkListName="home"></LinkList>
      </div>
      <div class="col">
    <LinkList linkListName="work"></LinkList>
      </div>
      <div class="col">
    <LinkList linkListName="social"></LinkList>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <weather class="weather-widget"
        :api-key="darkskyApiKey"
        title="Weather"
        latitude="47.5886"
        longitude="-122.0387"
        language="en"
        units="us"
        barColor="#FFF"
        textColor="#FFF"
        updateInterval="600"
        hideHeader="true">
    </weather>
    </div>
    </div>
    <!-- <SunriseSunset></SunriseSunset> -->
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import TimeAndDate from "./components/TimeAndDate.vue";
import Search from "./components/Search.vue";
import QuickLinks from "./components/QuickLinks.vue";
import LinkList from "./components/LinkList.vue";
//import SunriseSunset from "./components/SunriseSunset.vue";
import moment from "moment";
import axios from "axios";

import VueWeatherWidget from 'vue-weather-widget';



export default {
  name: "app",
  data: function() {
    return {
      date: null,
      background: "",
      showDismissibleAlert: false,
      darkskyApiKey: '6f4f5c469cd230cb0b90ca2a001cc57c' //process.env.VUE_APP_DARKSKY_API_KEY
    };
  },
  components: {
    TimeAndDate,
    Search,
    QuickLinks,
    LinkList,
    'weather': VueWeatherWidget
    //SunriseSunset
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
    document.title = process.env.VUE_APP_TITLE;

    this.doTime();

    setInterval(() => {
      this.doTime();
    }, 1000);

    const self = this;
    var backgroundImageUri = "/backgroundimage";
    if (process.env.NODE_ENV == "development") {
      backgroundImageUri = "http://localhost:3000/backgroundimage";
    }

    axios
      .get(backgroundImageUri)
      .then(function(response) {
        self.background = response.data;
        document.body.style.backgroundImage =
          "url('https://www.bing.com" + self.background + "')";
      })
      .catch(function(error) {
        //console.log(error);
      });
  }
};
</script>

<style>
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

.weather-widget {
  margin-top: 1em;
  display: table;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto Mono", sans-serif;
  font-size: 2em;
  padding: 0.25em;
}
</style>
