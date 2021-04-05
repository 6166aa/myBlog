<template>
  <div class="article">
    article  {{$route.params.id}}

    <ul>
      <!-- eslint-disable-next-line -->
      <li v-for="(_, index) in 5">
        <router-link :to="{ name: 'articleDetail', params: { id: index } }"
          >article-{{ index }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myArticle',
};
</script>

<style lang="stylus" scoped></style>
