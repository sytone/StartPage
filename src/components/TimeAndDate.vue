<template id="timeanddate">
  <div class="time-date">
    <p class="date">{{ formattedDate }}</p>
    <p class="time">{{ formattedTime }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
      date: moment
  },
  computed: {
    formattedDate: function() {
      var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      return (
        this.zeroPadding(this.date.year(), 4) +
        "-" +
        this.zeroPadding(this.date.month() + 1, 2) +
        "-" +
        this.zeroPadding(this.date.day(), 2) +
        " " +
        week[this.date.day()]
      );
    },
    formattedTime: function() {
      return (
        this.zeroPadding(this.date.hour(), 2) +
        ":" +
        this.zeroPadding(this.date.minute() + 1, 2) +
        ":" +
        this.zeroPadding(this.date.second(), 2) 
      );
    }    
  },
  methods: {
    zeroPadding: function(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>

<style>
</style>
