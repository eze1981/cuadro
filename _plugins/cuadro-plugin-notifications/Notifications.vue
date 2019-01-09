<template>
  <div>
    <p v-for="notification in notifications">
      {{notification}}
    </p>
    <button @click="addHey">Add Hey!</button>
  </div>
</template>

<script>
import state from "./state";

export default {
  computed: {
    notifications() {
      return this.$store.state.notifications;
    }
  },
  methods: {
    addHey() {
      this.$store.commit("addNotification", "Hey!");
    }
  },
  created() {
    this.$store.registerModule("notifications", state);
  }
};
</script>

