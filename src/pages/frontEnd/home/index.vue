<template>
  <div>
    this is home
    <div style="padding:2em;border:1px solid red">
      <button>clickme!</button>
      <br />
      num:<input type="text" name="num" v-model="num" />
      <br />
      {{ num }}
      <br />
      num2:<input type="text" name="num" v-model="obj.num2" />
      <br />
      {{ obj }}
      <br />
      <div
        class="box content main"
        :class="[obj.num2 == 100 ? 'success' : 'error', boxColor, { active: isActive }]"
      ></div>
    </div>
    {{ testObj }}
    <button @click="addList(10)">add</button>
    <button @click="test3">addPoperity</button>
    <ul style="border:5px solid green" v-for="(item, index) of test" :key="index">
      <!-- <li :class="['li'+item]" v-for="item in item.list" :key="item">{{ item }}</li> -->
    </ul>
    {{ test[0].list }}
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      num: 1,
      obj: {
        num2: 1,
        obj2: { list: [] },
      },
      test: [
        {
          list: [],
        },
      ],
      testObj: {
        default: true,
      },
      isActive: true,
    };
  },
  beforeCreate() {
    console.log('==============beforeCreat=================');
    console.log(this);
    console.log('$el:', this.$el);
    console.log('$data:', this.$data);
    console.log(this.test0);
  },
  created() {
    console.log('================created=================');
    console.log(this);
    console.log('$el:', this.$el);
    console.log('$data:', this.$data);
    console.log(this.test0);
    this.test[0].list.push(1);
    this.testObj.created = true;
  },
  beforeMount() {
    console.log('===============beforeMount=================');
    console.log(this);
    console.log('$el:', this.$el);
    console.log('$data:', this.$data);
    this.test[0].list.push(2);
    this.testObj.beforeMount = true;
  },
  mounted() {
    console.log('===============mounted=================');
    console.log(this);
    console.log('$el:', this.$el);
    console.log('$data:', this.$data);

    console.log(document.querySelector('.li1'));
    // this.addList(5);
    setTimeout(() => {
      // this.test[0].list.push(3);
      this.testObj.mounted = true;
    }, 0);
    // this.$nextTick(() => {
    //   console.log(document.querySelector('.li1'));
    // });
  },
  beforeUpdate() {},
  computed: {
    boxColor() {
      const classObj = {};
      if (this.num < 50) classObj.low = true;
      else if (this.num < 70) classObj.medium = true;
      else classObj.high = true;
      return classObj;
    },
  },
  methods: {
    test0() {
      this.obj.obj2.list.push(this.obj.obj2.list.length + 1);
    },
    test3() {
      this.testObj[`testobj-${Object.keys(this.testObj).length}`] = true;
      console.log(this.testObj);
    },
    addList(n) {
      for (let i = n; i < 1000000000; i += 1) {
        this.test[0].list.push(i);
      }
    },
    // test(...args) {
    //   console.log(args[0].target);
    //   console.log(args[0].currentTarget);
    //   if (args[0].target === args[0].currentTarget) {
    //     console.log('ok');
    //   }
    //   console.log(args);
    // },
  },
  watch: {
    // num(...args) {
    //   console.log(args);
    // },
    // obj: {
    //   deep: true,
    //   immediate: true,
    //   handler(newVal, old) {
    //     console.log(newVal);
    //     console.log(old);
    //   },
    // },
  },
};
</script>
<style lang="stylus" scoped>
.box
  width 300px
  height 300px
  border 10px solid green
  &.low
    // border @border
    border-color red
  &.medium
    // border @border
    border-color orange
  &.high
    border-color green
  &.success
    background-color green
  &.error
    background-color red
</style>
