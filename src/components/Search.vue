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
import * as searchProviders from "../assets/js/providers.js";
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
      if (this.$refs.search) {
        this.$refs.search.focus();
      }
    });
  }
};
</script>

<style>
input {
  border: none;
  outline: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
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

</style>
