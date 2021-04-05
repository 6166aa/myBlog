<template>
<div class="card">
  <div class="card__header" v-if="$slots.header||header">
    <slot name="header">
      {{header}}
    </slot>
  </div>
  <div class="card__body">
    <slot name="default">
      <rate v-model="rateValue"></rate>
    </slot>
  </div>
</div>
</template>

<script>
import rate from '@/components/common/rate.vue';

export default {
  name: 'card',
  components: {
    rate,
  },
  props: {
    header: {
      type: String,
      default() {
        return '标题';
      },
    },
    rateValue: {
      type: Number,
    },
  },
  beforeCreate() {
    console.log('-'.repeat(20));
    console.log('card-beforeCreate');
  },
  created() {
    console.log('card-created');
  },
  beforeMount() {
    console.log('card-beforeMount');
  },
  mounted() {
    console.log('card-mounted');
  },
  beforeUpdate() {
    console.log('card-beforeUpdate');
  },
  updated() {
    console.log('card-updated');
  },
  beforeDestroy() {
    console.log('card-beforeDestroy');
  },
  destroyed() {
    console.log('card-destroyed');
  },
};
</script>

<style lang="stylus" scoped>
.card
  border 1px solid #ebeef5
  box-shadow 0 2px 12px 0 rgba(0 0 0 .1)
  border-radius 3px
  .card__header
    border-bottom 1px solid #ebeef5
    display flex
    justify-content center
    padding .5em 0
    .card__right-action
      color #409eff
  .card__body
    padding .5em
</style>
