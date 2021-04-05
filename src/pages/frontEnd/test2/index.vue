<template>
  <div class="demo">
    <h1>自定义一个卡片组件</h1>
    <div class="item">
      <card>
        <template #header>
          <div>头部</div>
        </template>
        内容测试
      </card>
    </div>
    <hr />
    <todo-list class="demo2" :data="todoList" >
      <template #header>
          <div>头部</div>
      </template>
      <template v-slot:action="{item}">
        <span class="del" @click="del(item.index)">删除</span>
      </template>
      <!-- <template #item>
        item内容
      </template> -->
    </todo-list>

    <slotsTest>
      <template #header>
        我是头部
      </template>
      <template #default="{data}">
        我是内容{{data}}
      </template>
      <template #footer>
        我是脚部
      </template>
    </slotsTest>
  </div>
</template>

<script>
import card from '@/components/common/card.vue';
import todoList from '@/components/common/todoList.vue';
import slotsTest from '@/components/common/slotsTest.vue';

export default {
  name: 'test2',
  components: {
    card,
    todoList,
    slotsTest,
  },
  data() {
    return {
      todoList: [
        { name: '复习vuex-1', date: '2021-03-30' },
        { name: '复习vuex-2', date: '2021-03-30' },
        { name: '复习vuex-3', date: '2021-03-30' },
        { name: '复习vuex-4', date: '2021-03-30' },
        { name: '复习vuex-5', date: '2021-03-30' },
      ],
    };
  },
  methods: {
    del(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style lang="stylus" scoped>
.demo
.item
  width 300px
  padding 10em
.demo2
  margin-top 2em
.del
  cursor pointer
  color #c75d3d
</style>
