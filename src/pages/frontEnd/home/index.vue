<template>
  <div>
    this is home
    <button @click='test($event,"123",32)'>clickme!</button>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    test(...args) {
      console.log(this);
      console.log(args);
    },
  },
};
</script>
