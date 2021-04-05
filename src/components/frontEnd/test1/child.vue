<template>
  <div>
    <div class="box">
      <h1>child区域</h1>
      <br />
      selfProp:title:{{ title }}--from Paren
      <br />
      send param to Paren: <input type="text" v-model="arg" /> <button @click="send">send</button>
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
  mounted() {
    this.$eventBus.$on('sendArs-child1', (arg) => {
      this.arg = arg;
    });
  },
  methods: {
    send() {
      this.$emit('sendArs', this.arg);
    },
  },
};
</script>

<style lang="stylus" scoped>
.box
  border 1px solid green
  padding 2em
</style>
