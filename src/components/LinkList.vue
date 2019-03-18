<template>
  <div class="link-list links">
    <div class="listHeading text-center">{{linkListName}}</div>
    <ul class="list-group links" v-if="links && links.length > 0">
      <li
        class="list-group-item link"
        v-for="(link, index) in links"
        :key="index"
        @click="handleLink(index)"
      >
        <!-- <span :style="{'background-color': link.colour}" class="tag">{{link.name}}</span> -->
        {{link.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "link-list",
  props: {
    linkListName: String
  },
  data: function() {
    return {
      links: null,
      showDismissibleAlert: false,
      dismissibleAlertMessage: ""
    };
  },
  methods: {
    handleLink: function(linkId) {
      if (this.links && this.links[linkId]) {
        window.open(this.links[linkId].url, "QuickLink" + linkId);
      }
    }
  },
  mounted: function() {
    const self = this;
    this.links = [];
    var linksUri = "/link-list";
    if (process.env.NODE_ENV == "development") {
      linksUri = "http://localhost:3000/link-list";
    }

    axios
      .get(linksUri + "/" + this.linkListName)
      .then(function(response) {
        self.links = response.data;
      })
      .catch(function(error) {
        self.showDismissibleAlert = true;
        self.dismissibleAlertMessage = error;
      });
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

.listHeading {
  background-color: rgba(0, 0, 0, 0.5) !important;
  font-size: 2em;
  margin-top: 1em;
}

.links {
  background-color: rgba(0, 0, 0, 0.5) !important;
  margin-top: 0.11em;
  color: #fff;
  font-family: "Roboto Mono", sans-serif;
}

.link {
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: flex;
  padding: 0.1em;
  cursor: pointer;
}

.link .content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em;
}

.tag {
  color: #fff;
  padding: 0.1em 0.25em;
  border-radius: 3px;
}
</style>
