<template>
  <div>
    <h1>{{date}}</h1>
    <analog-clock :minute="time.minutes" :tick="tick"></analog-clock>
    <div class="weather">
      <h2>{{ weatherTemp }}</h2>
      <p>{{ weatherDescription }}</p>
    </div>
  </div>
</template>

<script>
import AnalogClock from '@/plugins/cuadro-plugin-clock/AnalogClock.vue'
import weather from '@/services/weather'

// Taken from Nicolas Udy
// https://vuejsexamples.com/a-text-based-and-analog-clock-with-vue-js/
export default {
  components: { AnalogClock },
  data() {
    return {
      tick: 0,
      time: { hours: 0, minutes: 0, seconds: 0 },
      date: "",
      weatherTemp: "",
      weatherDescription: ""
    }
  },
  methods: {
    updateTime(time) {

      // get the time
      this.tick++
      this.time = {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      }

      // ge the date
      this.date = time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

      setTimeout(() => this.updateTime(new Date()), 1000 - new Date().getMilliseconds())
    },
    async updateWeather() {
      let w = await weather.getCurrentWeather()
      this.weatherTemp = `${w.temp.toFixed(0)} ℉`
      this.weatherDescription = w.description
    }
  },
  mounted() {
    this.updateTime(new Date())
    this.updateWeather()
  }
}
</script>

<style>
.weather {
  margin-top: 60px;
}
</style>
