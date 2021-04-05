<template>
  <div class="login">
    <form action="">
      <fieldset>
        <label for="username">用户名</label>
        <input type="text" name="username" id="username" />
      </fieldset>
      <fieldset>
        <label for="pwd">密码</label>
        <input type="password" name="pwd" id="pwd" />
      </fieldset>
      <button type="submit" @click.prevent="login">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login() {
      const username = document.forms[0].username.value;
      const pwd = document.forms[0].pwd.value;
      if (username === 'admin' && pwd === 'admin') {
        sessionStorage.setItem('userToken', username + pwd);
        this.$router.push({ name: 'admin' });
      } else {
        // eslint-disable-next-line no-alert
        alert('用户名或密码不正确');
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
