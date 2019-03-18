<template>
    <div>
        
<input type="radio" name="time" id="sunrise" checked />
<input type="radio" name="time" id="sunset" />
<div id="app">
  <div class="glow"></div>
  <div class="sky"></div>
  <div class="stars"></div>
  <div class="city">
    <div class="building">
      <div class="tower">
        <div class="windows"></div>
      </div>
      <div class="tower">
        <div class="windows"></div>
        <div class="ledge"></div>
      </div>
      <div class="tower">
        <div class="windows"></div>
      </div>
    </div>
    <div class="building">
      <div class="tower">
        <div class="windows"></div>
      </div>
      <div class="tower">
        <div class="windows"></div>
        <div class="ledge"></div>
      </div>
      <div class="tower">
        <div class="windows"></div>
        <div class="ledge"></div>
      </div>
    </div>
    <div class="building">
      <div class="tower">
        <div class="windows"></div>
      </div>
      <div class="tower">
        <div class="windows"></div>
        <div class="ledge"></div>
      </div>
      <div class="tower">
        <div class="windows"></div>
      </div>
    </div>
  </div>
  <div class="times">
    <div class="time"
      data-sunrise="7:20"
      data-sunset="9:14"
    ></div>
    <div class="time"
      data-sunrise="7:25"
      data-sunset="9:18"
    ></div>
    <div class="time"
      data-sunrise="7:29"
      data-sunset="9:23"
    ></div>
    <div class="time"
      data-sunrise="7:32"
      data-sunset="9:32"
    ></div>
    <div class="time"
      data-sunrise="7:37"
      data-sunset="9:37"
    ></div>
  </div>
  <div class="heavens">
    <label for="sunrise" class="sunrise" data-title="Sunrise"></label>
    <label for="sunset" class="sunset" data-title="Sunset"></label>
  </div>
  <div class="clouds"></div>
</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#sunset:checked ~ * {
  --sunset: 1;
  --sunrise: 0;
  --color-building-dark: #00436F;
  --color-building: #0258C6;
  --color-building-light: #1771C5;
  --color-cloud: #9ED5F8;
}

#sunrise:checked ~ * {
  --sunrise: 1;
  --sunset: 0;
  --color-building-dark: #50A8E3;
  --color-building: #9BD9FE;
  --color-building-light: #E5F7FE;
  --color-cloud: white;
}

:root {
  --color-window-dark: #3B98D8;
  --color-window-light: white;
}

#app {
  width: 800px;
  height: 370px;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  z-index: 1;
  position: relative;
  font-family: Montserrat, sans-serif;
}
#app * {
  font-weight: 600;
  letter-spacing: 1px;
}
#app > .times {
  flex: 0 0 70%;
}
#app > .heavens {
  flex: 0 0 30%;
}
#app:before, #app:after {
  content: '';
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  left: calc(50% - 50vw);
  top: calc(50% - 50vh);
  z-index: -10;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
}
#app:before {
  background: linear-gradient(to bottom, #73DAF9, #E5F7FE);
  opacity: var(--sunrise);
}
#app:after {
  background: linear-gradient(to bottom, #0846B0, #23B2EE);
  opacity: var(--sunset);
}

.sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
}
.sky:before, .sky:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  z-index: -1;
}
.sky:before {
  background: linear-gradient(to bottom, #2CA4F4, #C2E6FB);
  opacity: var(--sunrise);
}
.sky:after {
  background: linear-gradient(to bottom, #043385, #1797D7);
  opacity: var(--sunset);
}

.times {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.5rem;
  overflow: hidden;
}

.time {
  color: white;
}
.time:nth-child(1) {
  -webkit-animation-delay: 0s !important;
          animation-delay: 0s !important;
}
.time:nth-child(2) {
  -webkit-animation-delay: 0.05s !important;
          animation-delay: 0.05s !important;
}
.time:nth-child(3) {
  -webkit-animation-delay: 0.1s !important;
          animation-delay: 0.1s !important;
}
.time:nth-child(4) {
  -webkit-animation-delay: 0.15s !important;
          animation-delay: 0.15s !important;
}
.time:nth-child(5) {
  -webkit-animation-delay: 0.2s !important;
          animation-delay: 0.2s !important;
}
.time:first-child:after {
  font-size: 2.5rem;
}
.time:first-child ~ .time {
  opacity: 0.5;
}
.time:before {
  content: '';
  display: block;
  left: calc(50% - 0.8rem);
  margin-bottom: 0.5rem;
  width: 0;
  height: 0;
  border-width: 0.8rem;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: white;
}
.time:after {
  font-size: 2rem;
}

.city {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.windows {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(to top, #044DA8 0, #044DA8 6px, transparent 6px, transparent var(--window-space, 14px));
  overflow: hidden;
}
.windows, .windows:before, .windows:after {
  background-clip: content-box !important;
}
.windows:before, .windows:after {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.windows:before {
  background: repeating-linear-gradient(to top, var(--window-color, var(--color-window-light)) 0, var(--window-color, var(--color-window-light)) 6px, transparent 6px, transparent var(--window-space, 14px));
  opacity: var(--sunrise);
}
.windows:after {
  background: repeating-linear-gradient(to top, gold 0, gold 6px, transparent 6px, transparent var(--window-space, 14px));
  opacity: var(--sunset);
  transition-delay: calc(var(--sunset, 0) * 1.5s);
  transition-duration: 0.75s;
}

.ledge {
  width: 100%;
  height: 0;
  padding: 50% 0;
  overflow: hidden;
}
.ledge:before {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  -webkit-transform-origin: right top;
          transform-origin: right top;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);
}
.ledge:after {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  content: '';
  display: block;
  position: absolute;
  top: 0;
  height: 4px;
  width: 100%;
  background: var(--color-building);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.building {
  position: absolute;
  bottom: 0;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 1;
}
.building > .tower {
  bottom: 0;
  z-index: 1;
  background: currentColor;
}
.building > .tower, .building > .tower:before, .building > .tower:after {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
}
.building:nth-child(1) {
  left: 64px;
  height: 145px;
}
.building:nth-child(1) > .tower:nth-child(1) {
  --color-pointy: $color-building-dark;
  width: 21px;
  height: 70%;
  background: white;
  color: var(--color-building-dark);
  background: currentColor;
  --window-color: $color-window-dark;
}
.building:nth-child(1) > .tower:nth-child(1):after {
  content: '';
  display: block;
  position: absolute;
  width: 3px;
  height: 30px;
  bottom: 100%;
  box-shadow: 15px -5px 0 var(--color-pointy);
  z-index: -1;
}
.building:nth-child(1) > .tower:nth-child(1):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 2rem;
  width: 100%;
  z-index: -1;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  background: var(--color-pointy);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
  -webkit-transform: skewY(-45deg);
          transform: skewY(-45deg);
  z-index: -1;
}
.building:nth-child(1) > .tower:nth-child(1) .windows, .building:nth-child(1) > .tower:nth-child(1) .windows:before, .building:nth-child(1) > .tower:nth-child(1) .windows:after {
  padding-right: 8px;
}
.building:nth-child(1) > .tower:nth-child(2) {
  --color-pointy: $color-building;
  width: 50px;
  height: 100%;
  color: var(--color-building);
}
.building:nth-child(1) > .tower:nth-child(2):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 45%;
  width: 100%;
  z-index: -1;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  background: var(--color-pointy);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
  -webkit-transform: skewY(-55deg);
          transform: skewY(-55deg);
  z-index: -1;
}
.building:nth-child(1) > .tower:nth-child(2) .windows, .building:nth-child(1) > .tower:nth-child(2) .windows:before, .building:nth-child(1) > .tower:nth-child(2) .windows:after {
  padding-left: 12px;
}
.building:nth-child(1) > .tower:nth-child(3) {
  --color-pointy: $color-building;
  width: 21px;
  height: 90%;
  color: var(--color-building);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}
.building:nth-child(1) > .tower:nth-child(3):after {
  content: '';
  display: block;
  position: absolute;
  width: 3px;
  height: 30px;
  bottom: 100%;
  box-shadow: 5px -15px 0 var(--color-pointy), 10px -5px 0 var(--color-pointy);
  z-index: -1;
}
.building:nth-child(1) > .tower:nth-child(3):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 2rem;
  width: 100%;
  z-index: -1;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  background: var(--color-pointy);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
  -webkit-transform: skewY(30deg);
          transform: skewY(30deg);
  z-index: -1;
}
.building:nth-child(1) > .tower:nth-child(3) .windows, .building:nth-child(1) > .tower:nth-child(3) .windows:before, .building:nth-child(1) > .tower:nth-child(3) .windows:after {
  padding-left: 12px;
}
.building:nth-child(2) {
  left: 284px;
  height: 250px;
}
.building:nth-child(2) > .tower:nth-child(1), .building:nth-child(2) > .tower:nth-child(3) {
  width: 38px;
  height: 50%;
}
.building:nth-child(2) > .tower:nth-child(1) .windows, .building:nth-child(2) > .tower:nth-child(1) .windows:before, .building:nth-child(2) > .tower:nth-child(1) .windows:after, .building:nth-child(2) > .tower:nth-child(3) .windows, .building:nth-child(2) > .tower:nth-child(3) .windows:before, .building:nth-child(2) > .tower:nth-child(3) .windows:after {
  padding: 0 6px;
}
.building:nth-child(2) > .tower:nth-child(1) {
  color: var(--color-building-dark);
  --color-pointy: $color-building-dark;
  --window-color: $color-window-dark;
  --window-space: 20px;
}
.building:nth-child(2) > .tower:nth-child(1):after {
  content: '';
  display: block;
  position: absolute;
  width: 3px;
  height: 30px;
  bottom: 100%;
  box-shadow: 10px 15px 0 var(--color-pointy), 20px 20px 0 var(--color-pointy);
  z-index: -1;
}
.building:nth-child(2) > .tower:nth-child(1):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 4px;
  width: 100%;
  background: var(--color-building);
}
.building:nth-child(2) > .tower:nth-child(2) {
  width: 62px;
  height: 100%;
  color: var(--color-building);
  --color-pointy: $color-building;
  --window-color: $color-window-light;
  --window-space: 20px;
}
.building:nth-child(2) > .tower:nth-child(2):after {
  content: '';
  display: block;
  position: absolute;
  width: 3px;
  height: 30px;
  bottom: 100%;
  box-shadow: 20px 5px 0 var(--color-pointy), 40px 15px 0 var(--color-pointy);
  z-index: -1;
}
.building:nth-child(2) > .tower:nth-child(2):before {
  content: '';
  height: 100%;
  position: absolute;
  top: 0;
  display: block;
  width: 20px;
  background: var(--color-building-dark);
}
.building:nth-child(2) > .tower:nth-child(2) .windows, .building:nth-child(2) > .tower:nth-child(2) .windows:before, .building:nth-child(2) > .tower:nth-child(2) .windows:after {
  padding-left: 30px;
}
.building:nth-child(2) > .tower:nth-child(3) {
  color: var(--color-building);
  --window-space: 20px;
}
.building:nth-child(3) {
  left: 554px;
  height: 180px;
}
.building:nth-child(3) > .tower:nth-child(1) {
  --color-pointy: $color-building-dark;
  width: 21px;
  height: 70%;
  background: white;
  color: var(--color-building-dark);
  background: var(--color-building-dark);
  --window-color: $color-window-dark;
}
.building:nth-child(3) > .tower:nth-child(1):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 2rem;
  width: 100%;
  z-index: -1;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  background: var(--color-pointy);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
  -webkit-transform: skewY(-55deg);
          transform: skewY(-55deg);
  z-index: -1;
}
.building:nth-child(3) > .tower:nth-child(1) .windows, .building:nth-child(3) > .tower:nth-child(1) .windows:before, .building:nth-child(3) > .tower:nth-child(1) .windows:after {
  padding-right: 8px;
}
.building:nth-child(3) > .tower:nth-child(2) {
  --color-pointy: $color-building;
  width: 30px;
  height: 100%;
  color: var(--color-building);
}
.building:nth-child(3) > .tower:nth-child(2):after {
  content: '';
  display: block;
  position: absolute;
  width: 3px;
  height: 30px;
  bottom: 100%;
  box-shadow: 10px 20px 0 var(--color-pointy), 14px 23px 0 var(--color-pointy), 20px 15px 0 var(--color-pointy);
  z-index: -1;
}
.building:nth-child(3) > .tower:nth-child(2):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 4px;
  width: 100%;
  background: var(--color-building-light);
}
.building:nth-child(3) > .tower:nth-child(2) .windows, .building:nth-child(3) > .tower:nth-child(2) .windows:before, .building:nth-child(3) > .tower:nth-child(2) .windows:after {
  padding-left: 12px;
}
.building:nth-child(3) > .tower:nth-child(3) {
  --color-pointy: $color-building;
  width: 40px;
  height: 70%;
  color: var(--color-building);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}
.building:nth-child(3) > .tower:nth-child(3):before {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: -1;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  background: var(--color-pointy);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
  -webkit-transform: skewY(50deg);
          transform: skewY(50deg);
  z-index: -1;
}
.building:nth-child(3) > .tower:nth-child(3) .windows, .building:nth-child(3) > .tower:nth-child(3) .windows:before, .building:nth-child(3) > .tower:nth-child(3) .windows:after {
  padding-left: 12px;
}

.heavens {
  position: absolute;
  width: 200px;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  overflow: hidden;
}

[class^="sun"] {
  position: absolute;
  text-align: center;
  width: 100%;
  cursor: pointer;
}
[class^="sun"]:before {
  content: attr(data-title);
  display: inline-block;
  width: 100%;
  margin: 2rem 0;
  color: white;
  font-size: 1.5rem;
}
[class^="sun"]:after {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  margin-top: 1rem;
  content: '';
  display: inline-block;
  width: 100%;
  border-radius: 50%;
}

.glow {
  width: 200px;
  height: 200px;
  z-index: -1;
  position: absolute;
  right: 0;
  -webkit-filter: blur(50px);
          filter: blur(50px);
}
.glow:before, .glow:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.glow:before {
  background: #FFFAAD;
}
.glow:after {
  background: white;
}

.sunrise:after {
  width: 78px;
  height: 78px;
  background: #FFFAAD;
  box-shadow: 0 0 0 1rem rgba(255, 250, 173, 0.3);
}

.sunset:before {
  margin-bottom: 3rem;
}
.sunset:after {
  width: 52px;
  height: 52px;
  background: white;
  box-shadow: 0 0 0 1rem rgba(255, 255, 255, 0.3), 0 0 0 2rem rgba(255, 255, 255, 0.15);
}

.clouds {
  overflow: hidden;
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  z-index: 1;
  transition: box-shadow 3s cubic-bezier(0.25, 0, 0.1, 1);
}
.clouds:before, .clouds:after {
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: cubic-bezier(0.25, 0, 0.1, 1);
          animation-timing-function: cubic-bezier(0.25, 0, 0.1, 1);
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.clouds:before {
  background: white;
  box-shadow: 73px 30px 0 white, 162px 34px 0 white, 237px 32px 0 white, 316px 60px 0 white, 405px 35px 0 white, 473px 54px 0 white, 568px 27px 0 white, 634px 43px 0 white, 721px 47px 0 white, 804px 15px 0 white;
  -webkit-animation-name: clouds-sunrise;
          animation-name: clouds-sunrise;
}
.clouds:after {
  background: #9ED5F8;
  opacity: var(--sunset);
  box-shadow: 73px 30px 0 #9ED5F8, 162px 34px 0 #9ED5F8, 237px 32px 0 #9ED5F8, 316px 60px 0 #9ED5F8, 405px 35px 0 #9ED5F8, 473px 54px 0 #9ED5F8, 568px 27px 0 #9ED5F8, 634px 43px 0 #9ED5F8, 721px 47px 0 #9ED5F8, 804px 15px 0 #9ED5F8;
  -webkit-animation-name: clouds-sunset;
          animation-name: clouds-sunset;
}
@-webkit-keyframes clouds-sunrise {
  to {
    box-shadow: 73px 22px 0 white, 162px 44px 0 white, 237px 36px 0 white, 316px 55px 0 white, 405px 35px 0 white, 473px 52px 0 white, 568px 17px 0 white, 634px 34px 0 white, 721px 42px 0 white, 804px 3px 0 white;
  }
}
@keyframes clouds-sunrise {
  to {
    box-shadow: 73px 22px 0 white, 162px 44px 0 white, 237px 36px 0 white, 316px 55px 0 white, 405px 35px 0 white, 473px 52px 0 white, 568px 17px 0 white, 634px 34px 0 white, 721px 42px 0 white, 804px 3px 0 white;
  }
}
@-webkit-keyframes clouds-sunset {
  to {
    box-shadow: 73px 22px 0 #9ED5F8, 162px 44px 0 #9ED5F8, 237px 36px 0 #9ED5F8, 316px 55px 0 #9ED5F8, 405px 35px 0 #9ED5F8, 473px 52px 0 #9ED5F8, 568px 17px 0 #9ED5F8, 634px 34px 0 #9ED5F8, 721px 42px 0 #9ED5F8, 804px 3px 0 #9ED5F8;
  }
}
@keyframes clouds-sunset {
  to {
    box-shadow: 73px 22px 0 #9ED5F8, 162px 44px 0 #9ED5F8, 237px 36px 0 #9ED5F8, 316px 55px 0 #9ED5F8, 405px 35px 0 #9ED5F8, 473px 52px 0 #9ED5F8, 568px 17px 0 #9ED5F8, 634px 34px 0 #9ED5F8, 721px 42px 0 #9ED5F8, 804px 3px 0 #9ED5F8;
  }
}
.clouds:before, .clouds:after {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  transition-timing-function: ease-in-out;
  width: 10rem;
  height: 10rem;
  top: 5rem;
  left: -5rem;
  border-radius: 50%;
  content: '';
  display: block;
  position: absolute;
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.stars:before, .stars:after {
  transition: all 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1);
  opacity: var(--sunset);
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
}
.stars:before {
  height: 3px;
  width: 3px;
  box-shadow: 574px 356px 3px white, 637px 203px 3px white, 259px 30px 1px white, 763px 59px 4px white, 20px 86px 3px white, 138px 366px 4px white, 292px 95px 4px white, 162px 78px 2px white, 361px 149px 2px white, 746px 61px 1px white, 54px 330px 1px white, 660px 2px 3px white, 598px 328px 1px white, 267px 201px 2px white, 448px 33px 2px white, 617px 85px 4px white, 551px 194px 4px white, 495px 55px 3px white, 124px 305px 4px white, 545px 359px 2px white, 644px 193px 2px white, 452px 43px 3px white, 249px 145px 2px white, 20px 339px 3px white, 606px 167px 1px white, 757px 142px 4px white, 133px 249px 4px white, 86px 176px 4px white, 800px 202px 4px white, 181px 279px 4px white;
}
.stars:after {
  height: 5px;
  width: 5px;
  box-shadow: 437px 75px 1px white, 482px 193px 1px white, 422px 51px 4px white, 687px 74px 2px white, 435px 150px 1px white, 417px 76px 3px white, 103px 5px 2px white, 265px 211px 3px white, 577px 334px 2px white, 629px 295px 1px white, 642px 216px 4px white, 442px 311px 2px white, 222px 367px 1px white, 270px 27px 3px white, 675px 340px 3px white, 555px 156px 3px white, 430px 26px 1px white, 559px 328px 4px white, 109px 262px 2px white, 701px 336px 2px white, 552px 85px 1px white, 365px 82px 3px white, 485px 359px 2px white, 493px 185px 1px white, 361px 351px 1px white, 544px 294px 4px white, 695px 252px 1px white, 104px 163px 3px white, 495px 128px 2px white, 684px 5px 2px white;
  transition-delay: calc(var(--sunset) * 1.5s);
}

input {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
}

#sunrise:checked ~ #app .time {
  -webkit-animation: time-move-sunrise 1.5s none;
          animation: time-move-sunrise 1.5s none;
}
#sunrise:checked ~ #app .time:after {
  content: '';
  -webkit-animation: time-change-sunrise 2.5s both;
          animation: time-change-sunrise 2.5s both;
}
#sunrise:checked ~ #app .heavens > .sunset:before {
  -webkit-animation: fade-out 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: fade-out 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunrise:checked ~ #app .heavens > .sunset:after {
  -webkit-animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunrise:checked ~ #app .heavens > .sunrise {
  pointer-events: none;
}
#sunrise:checked ~ #app .heavens > .sunrise:before {
  -webkit-animation: fade-in 0.75s 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: fade-in 0.75s 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunrise:checked ~ #app .heavens > .sunrise:after {
  -webkit-animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunrise:checked ~ #app .glow:before {
  -webkit-animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunrise:checked ~ #app .glow:after {
  -webkit-animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunrise:checked ~ #app .ledge:before {
  -webkit-animation: ledge-shadow-sunrise 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: ledge-shadow-sunrise 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}

@-webkit-keyframes ledge-shadow-sunrise {
  50% {
    -webkit-transform: skewX(-25deg);
            transform: skewX(-25deg);
  }
  60% {
    -webkit-transform: skewX(-80deg);
            transform: skewX(-80deg);
  }
  from, to {
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-transform: skewX(-45deg);
            transform: skewX(-45deg);
  }
}

@keyframes ledge-shadow-sunrise {
  50% {
    -webkit-transform: skewX(-25deg);
            transform: skewX(-25deg);
  }
  60% {
    -webkit-transform: skewX(-80deg);
            transform: skewX(-80deg);
  }
  from, to {
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-transform: skewX(-45deg);
            transform: skewX(-45deg);
  }
}
@-webkit-keyframes time-move-sunrise {
  50% {
    -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes time-move-sunrise {
  50% {
    -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
    opacity: 0;
  }
}
#sunset:checked ~ #app .time {
  -webkit-animation: time-move-sunset 1.5s none;
          animation: time-move-sunset 1.5s none;
}
#sunset:checked ~ #app .time:after {
  content: '';
  -webkit-animation: time-change-sunset 2.5s both;
          animation: time-change-sunset 2.5s both;
}
#sunset:checked ~ #app .heavens > .sunrise:before {
  -webkit-animation: fade-out 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: fade-out 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunset:checked ~ #app .heavens > .sunrise:after {
  -webkit-animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunset:checked ~ #app .heavens > .sunset {
  pointer-events: none;
}
#sunset:checked ~ #app .heavens > .sunset:before {
  -webkit-animation: fade-in 0.75s 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: fade-in 0.75s 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunset:checked ~ #app .heavens > .sunset:after {
  -webkit-animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunset:checked ~ #app .glow:after {
  -webkit-animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-enter 0.75s 0.75s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunset:checked ~ #app .glow:before {
  -webkit-animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: circle-leave 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}
#sunset:checked ~ #app .ledge:before {
  -webkit-animation: ledge-shadow-sunset 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
          animation: ledge-shadow-sunset 1.5s cubic-bezier(0.25, 0, 0.1, 1) both;
}

@-webkit-keyframes ledge-shadow-sunset {
  50% {
    -webkit-transform: skewX(-25deg);
            transform: skewX(-25deg);
  }
  60% {
    -webkit-transform: skewX(-80deg);
            transform: skewX(-80deg);
  }
  from, to {
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-transform: skewX(-45deg);
            transform: skewX(-45deg);
  }
}

@keyframes ledge-shadow-sunset {
  50% {
    -webkit-transform: skewX(-25deg);
            transform: skewX(-25deg);
  }
  60% {
    -webkit-transform: skewX(-80deg);
            transform: skewX(-80deg);
  }
  from, to {
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-transform: skewX(-45deg);
            transform: skewX(-45deg);
  }
}
@-webkit-keyframes time-move-sunset {
  50% {
    -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes time-move-sunset {
  50% {
    -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
    opacity: 0;
  }
}
@-webkit-keyframes circle-leave {
  50% {
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    opacity: 1;
  }
  to {
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    -webkit-transform: translateY(60vh);
            transform: translateY(60vh);
    opacity: 0;
  }
}
@keyframes circle-leave {
  50% {
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    opacity: 1;
  }
  to {
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    -webkit-transform: translateY(60vh);
            transform: translateY(60vh);
    opacity: 0;
  }
}
@-webkit-keyframes circle-enter {
  from {
    opacity: 0;
    -webkit-transform: translateY(-50vh);
            transform: translateY(-50vh);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes circle-enter {
  from {
    opacity: 0;
    -webkit-transform: translateY(-50vh);
            transform: translateY(-50vh);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@-webkit-keyframes time-change-sunrise {
  from {
    content: attr(data-sunset);
  }
  to {
    content: attr(data-sunrise);
  }
}
@keyframes time-change-sunrise {
  from {
    content: attr(data-sunset);
  }
  to {
    content: attr(data-sunrise);
  }
}
@-webkit-keyframes time-change-sunset {
  from {
    content: attr(data-sunrise);
  }
  to {
    content: attr(data-sunset);
  }
}
@keyframes time-change-sunset {
  from {
    content: attr(data-sunrise);
  }
  to {
    content: attr(data-sunset);
  }
}
@-webkit-keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  position: relative;
}

</style>
