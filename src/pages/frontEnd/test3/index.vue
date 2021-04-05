<template>
  <div class="test3">
    <!-- <rate v-model="parentRate"></rate> -->
    <card v-if="showCard" :rateValue="parentRate" title="头呢"></card>
    <button @click="showCard = !showCard">toggleCard</button>
    <input type="number" name="" id="" v-model.number="parentRate">
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import commonMixin from '@/utils/common/common.js';
import card from '@/components/common/card.vue';

export default {
  name: 'test3',
  mixins: [commonMixin],
  data() {
    return {
      parentRate: 2,
      showCard: true,
    };
  },
  components: {
    card,
  },
  methods: {
    chenage(val) {
      this.parentRate = val;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
