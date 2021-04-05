<template>
  <div>
    <header v-if="$scopedSlots.header">
      <slot name="header"></slot>
    </header>
    <main v-if="$scopedSlots.default">
      slots:{{ $slots }}
      <hr />
      scopedSlots:{{ $scopedSlots }}
      <hr />
      <slot> </slot>
    </main>
    <footer v-if="$scopedSlots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'slotsTest',
  data() {
    return {
      data: '1',
    };
  },
};
</script>

<style lang="stylus"></style>
