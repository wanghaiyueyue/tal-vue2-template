<template>
  <div class="el-button">
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
@Component
export default class Button extends Vue {
  handleClick(): void {
    // console.log("按钮点击")
  }
}
</script>

<style lang="scss" scoped></style>
