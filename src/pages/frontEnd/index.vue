<template>
  <!-- 门户首页 -->
  <div class="index">
    <div class="topper">
      <div class="title">欢迎来到xxx</div>
      <div class="admin">进入后台</div>
    </div>
    <header>
      <div class="logo"></div>
      <div class="title">xxx门户</div>
      <div class="search">
        <input type="text" name="val" />
        <button>search</button>
      </div>
    </header>
    <div class="navbar">
      <div>
        <div class="nav-item">title1</div>
        <div class="nav-item">title2</div>
        <div class="nav-item">title3</div>
        <div class="nav-item">title4</div>
        <div class="nav-item">title5</div>
      </div>
    </div>
    <main class="content">
      <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: 'index',
};
</script>
<style lang="stylus" scoped>
.topper,
header,
main,
footer
  padding 0 calc(50% - 500px)

.topper
  background-color #eee
  display flex
  .admin
    margin-left auto
header
  display flex
  align-items center
  .logo
    width 200px
    height 80px
    background url('~@/assets/logo.png') center/contain no-repeat
  .title
    line-height 80px
    font-weight bold
    font-size 32px
  .search
    margin-left auto
.navbar
  background-color bgc=#ffca2854
  >div
    @extends header
    display flex
    .nav-item
      padding 1em 2em
      cursor pointer
      &:hover
        background-color bgc + 1
        color #000
</style>
