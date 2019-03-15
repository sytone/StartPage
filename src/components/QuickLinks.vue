<template>
  <div class="table">
    <div class="row">
      <div class="col text-center">
        <a :href="links[0].url" v-if="links && links[0]">{{links[0].name}}</a>
      </div>
      <div class="col text-center">
        <a :href="links[1].url" v-if="links && links[1]">{{links[1].name}}</a>
      </div>
      <div class="col text-center">
        <a :href="links[2].url" v-if="links && links[2]">{{links[2].name}}</a>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <a :href="links[3].url" v-if="links && links[3]">{{links[3].name}}</a>
      </div>
      <div class="col text-center">
        <a :href="links[4].url" v-if="links && links[4]">{{links[4].name}}</a>
      </div>
      <div class="col text-center">
        <a :href="links[5].url" v-if="links && links[5]">{{links[5].name}}</a>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <a :href="links[6].url" v-if="links && links[6]">{{links[6].name}}</a>
      </div>
      <div class="col text-center">
        <a :href="links[7].url" v-if="links && links[7]">{{links[7].name}}</a>
      </div>
      <div class="col text-center">
        <a :href="links[8].url" v-if="links && links[8]">{{links[8].name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "quick-links",
  data: function() {
    return {
      links: null
    };
  },
  methods: {
    onKeydown: function(ev) {
      var keyOverrideNeeded = false;
      switch (ev.code) {
        case "Numpad7":
          this.openLink(0);
          keyOverrideNeeded = true;
          break;
        case "Numpad8":
          this.openLink(1);
          keyOverrideNeeded = true;
          break;
        case "Numpad9":
          this.openLink(2);
          keyOverrideNeeded = true;
          break;
        case "Numpad4":
          this.openLink(3);
          keyOverrideNeeded = true;
          break;
        case "Numpad5":
          this.openLink(4);
          keyOverrideNeeded = true;
          break;
        case "Numpad6":
          this.openLink(5);
          keyOverrideNeeded = true;
          break;
        case "Numpad1":
          this.openLink(6);
          keyOverrideNeeded = true;
          break;
        case "Numpad2":
          this.openLink(7);
          keyOverrideNeeded = true;
          break;
        case "Numpad3":
          this.openLink(8);
          keyOverrideNeeded = true;
          break;
        default:
        // code block
      }
      if (keyOverrideNeeded) {
        ev.preventDefault();
        return false;
      }

      //   if (ev.ctrlKey && ev.which === 83) {
      //     // Check for the Ctrl key being pressed, and if the key = [S] (83)
      //     console.log("Ctrl+S!");
      //     ev.preventDefault();
      //     return false;
      //   }
    },
    openLink: function(linkId) {
      if (this.links && this.links[linkId]) {
        window.open(this.links[linkId].url, "QuickLink" + linkId);
      }
    }
  },
  mounted: function() {
    const self = this;
    var linksUri = "/links";
    if (process.env.NODE_ENV == "development") {
      linksUri = "http://localhost:3000/links";
    }
    axios
      .get(linksUri)
      .then(function(response) {
        //console.log(response);
        self.links = response.data;
      })
      .catch(function(error) {
        //console.log(error);
      });

    document.addEventListener("keydown", this.onKeydown);
  },
  beforeDestroy: function() {
    document.removeEventListener("keydown", this.onKeydown);
  }
};
</script>

<style>
a:link {
  text-decoration: none;
  color: white;
}
a:visited {
  text-decoration: none;
  color: white;
}
a:active {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  background-color: white;
  color: black;
}

.table {
  margin-bottom: 1em;
  display: table;
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto Mono", sans-serif;
  font-size: 2em;
  padding: 0.25em;
}
/*
.row {
  display: table-row;
  height: 100%;
}
.cell1,
.cell2,
.cell3 {
  display: table-cell;
  width: 33%;
  height: 100%;
  border: none;
  color: #fff;
  text-align: center;
}
.cell1 > img,
.cell2 > img,
.cell3 > img {
  width: 100%;
  height: auto;
} */
</style>
