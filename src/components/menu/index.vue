<template>
  <div class="menuContainer">
    <div class="layoutContainer">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Menu",
})
</script>

<style scoped lang="scss">
.menuContainer {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  .layoutContainer {
    margin: 0 auto;
    width: 1200px;
    ul {
      display: flex;
      margin: 0;
      justify-content: flex-start;
      list-style: none;
      li {
        padding: 0 20px;
        line-height: 60px;
      }
    }
  }
}
</style>
