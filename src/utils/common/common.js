export default {
  filters: {
    toPercent(val) {
      let result = '';
      if (val) {
        result = +val;
        result = `${(result * 100).toFixed(2)}%`;
      }
      return result;
    },
  },
};
