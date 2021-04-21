<template>
  <div class="home-container">
    <div class="container-fluid banner">
      <div class="container">
        <img src="@/assets/images/home/banner.png" />
        <div class="banner-content">
          <p class="title">未来画像产品体系</p>
          <p class="subtit">
            通过构建好未来画像标签体系以及联通用户信息，为集团各业务提供好未来集团画像标签&关键行为查询、用户档案、画像分析、人群圈选、人群放大等服务，以数据驱动业务，赋能业务层精细化运营。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Home",
  components: {},
})
</script>

<style lang="scss" scoped>
$width: 1208px;
.home-container {
  .container-fluid {
    width: 100%;
  }
  .banner {
    position: relative;
    background: #1a2031;

    // height:560px;
    .container {
      width: 1392px;
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
    .banner-content {
      width: $width;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      padding-left: 50px;
      p {
        margin: 0;
        padding: 0;
      }
      p.title {
        font-size: 40px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      p.subtit {
        padding-top: 16px;
        max-width: 546px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        line-height: 22px;
      }
    }
  }
}
</style>
