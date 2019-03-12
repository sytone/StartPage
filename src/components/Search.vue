<template>
  <div id="seach-component">
    <input
      class="search"
      placeholder="Search for anything..."
      ref="this.search"
      v-model="search"
      @keydown="keypress"
    >

    <div class="results" v-if="search.trim().length > 0">
      <div
        class="result"
        v-for="(result, index) in results"
        :key="index"
        @click="handleResult(index)"
      >
        <div class="number">{{index+1}}</div>
        <div class="content">
          <p>
            <span :style="{'background-color': result.colour}" class="tag">{{result.name}}</span>
          </p>
          <p>{{result.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as searchProviders from '../assets/js/providers.js'
export default {
    
  data: function() {
    return {
      search: String
    };
  },
  methods: {
    keypress: function(ev) {
      if (ev.key === "Enter") {
        this.handleResult(0);
      } else {
        if (parseInt(ev.key) && ev.altKey) {
          // is a number
          this.handleResult(parseInt(ev.key) - 1);
        }
      }
    },
    handleResult: function(id) {
      if (this.results[id]) {
        window.location.href = this.results[id].url;
      }
    }
  },
  computed: {
    results: function() {
      return searchProviders.providers
        .filter(provider => provider.display(this.search.trim()))
        .map(provider => {
          return {
            name: provider.name,
            colour: provider.colour,
            description: provider.description(this.search.trim()),
            url: provider.handler(this.search.trim())
          };
        });
    }
  },
  created: function() {
    this.search = "";
  },
  mounted: function() {
    this.$nextTick(function() {
      this.$refs.search.focus();
    });
    // let providersScript = document.createElement("script");
    // providersScript.setAttribute("src", "/js/providers.js");
    // document.head.appendChild(providersScript);
  }
};
</script>

<style>
</style>
