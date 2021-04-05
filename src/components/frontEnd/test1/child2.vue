<template>
  <div>
    <div class="box">
      <h1>child2区域</h1>
      <br />
      receive from child1 title:{{title}}
      <br />
      send param to child1: <input type="text" v-model="arg" /> <button @click="send">send</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'child',
  props: ['title'],
  data() {
    return {
      arg: '',
    };
  },
  methods: {
    send() {
      this.$eventBus.$emit('sendArs-child1', this.arg);
    },
  },
};
</script>

<style lang="stylus" scoped>
.box
  border 1px solid green
  padding 2em
</style>
