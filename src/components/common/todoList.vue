<template>
  <div class="todo">
    <div class="todo__header" v-if="header || $scopedSlots.header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="todo__body">
      <div class="todo__item" v-for="(item, index) in data" :key="index">
        <slot name="item" :item="{ index: index, ...item }">
          <div class="todo__item-name">{{ item.name }}</div>
          <div class="todo__item-time">{{ item.date }}</div>
          <div class="todo__item-action" v-if="$scopedSlots.action && !$scopedSlots.item">
            <slot name="action" :item="{ index: index, ...item }"></slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  props: {
    header: {
      type: String,
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    console.log(this.$scopedSlots, this.$slots);
  },
};
</script>

<style lang="stylus" scoped>
.todo
  border 1px solid #ebeef5
  box-shadow 0 2px 12px 0 rgba(0 0 0 .1)
  border-radius 3px
  .todo__header
    border-bottom 1px solid #ebeef5
    display flex
    justify-content center
    align-items bottom
    padding .5em 0
  .todo__body
    .todo__item
      display flex
      padding .5em 1em
      &:hover
        background-color  #fbc02d
        color white
      &:nth-child(n+2)
        border-top 1px solid #ebeef5
      .todo__item-time
        color #c1c1c1
        margin-left 3em
      .todo__item-action
        margin-left auto
</style>
