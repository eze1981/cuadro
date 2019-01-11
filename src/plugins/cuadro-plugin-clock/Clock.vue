<template>
  <analog-clock :minute="time.minutes" :tick="tick"></analog-clock>
</template>

<script>
import AnalogClock from '@/plugins/cuadro-plugin-clock/AnalogClock.vue'

// Taken from Nicolas Udy
// https://vuejsexamples.com/a-text-based-and-analog-clock-with-vue-js/
export default {
  components: { AnalogClock },
  data() {
    return {
      tick: 0,
      time: { hours: 0, minutes: 0, seconds: 0 }
    }
  },
  methods: {
    updateTime(time) {
      // console.log(3333)
      this.tick++
      this.time = {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      }

      setTimeout(() => this.updateTime(new Date()), 1000 - new Date().getMilliseconds())
    }
  },
  mounted() {
    this.updateTime(new Date())
  } 
}
</script>

<style>

</style>
