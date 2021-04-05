<template>
  <div class="rate">
    <div class="stars">
      <i
        v-for="(_, index) in max"
        :key="index"
        :class="['star', { active: index < rateValue }]"
        @click="$emit('change',index+1)"
      ></i>
    </div>
    <div class="label">{{ rateValue}}</div>
  </div>
</template>

<script>
export default {
  name: 'rate',
  model: {
    prop: 'rateValue',
    event: 'change',
  },
  props: {
    rateValue: {
      type: Number,
      default() {
        return 0;
      },
    },
    max: {
      type: Number,
      default() {
        return 5;
      },
    },
  },
  beforeCreate() {
    console.log('rate-beforeCreate');
  },
  created() {
    console.log('rate-created');
  },
  beforeMount() {
    console.log('rate-beforeMount');
  },
  mounted() {
    console.log('rate-mounted');
  },
  beforeUpdate() {
    console.log('rate-beforeUpdate');
  },
  updated() {
    console.log('rate-updated');
  },
  beforeDestroy() {
    console.log('rate-beforeDestroy');
  },
  destroyed() {
    console.log('rate-destroyed');
  },
};
</script>

<style lang="stylus" scoped>
.rate
  display flex
  align-content center
.stars
  .star
    display inline-block
    width 1em
    height 1em
    background-color #ccc
    margin 0 .1em
    &.active
      background-color #ab47bc
</style>
