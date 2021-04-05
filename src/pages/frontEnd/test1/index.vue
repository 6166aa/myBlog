<template>
  <div>
    <div class="box">
      <div>父级区域</div>
      <input type="text" v-model="name" />
      <child :title='name' @sendArs="receiveArg"></child>
      <hr>
      receive from child arg:{{arg}}
      <hr>
      <child2></child2>
    </div>
  </div>
</template>
<script>
import child from '@/components/frontEnd/test1/child.vue';
import child2 from '@/components/frontEnd/test1/child2.vue';

export default {
  name: 'test1',
  components: {
    child,
    child2,
  },
  data() {
    return {
      name: '0',
      arg: null,
    };
  },
  methods: {
    receiveArg(arg) {
      this.arg = arg;
    },
  },
};
</script>
<style lang="stylus" scoped>
.box
  border 3px solid orange
  padding 3em
</style>
