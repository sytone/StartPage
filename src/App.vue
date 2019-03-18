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

export default {
  name: "app",
  data: function() {
    return {
      date: null,
      background: "",
      showDismissibleAlert: false
    };
  },
  components: {
    TimeAndDate,
    Search,
    QuickLinks,
    LinkList,
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
</style>
