<template>
  <div id="app">
    <!-- <div class="container">
      <header class="header">购物车头部</header>
      <div class="content">购物车内容</div>
    </div> -->
    <router-view></router-view>
    <footer class="footer">
      <ul>
        <router-link to="/home" tag="li">
          <span class = "iconfont icon-shouye"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/kind" tag="li">
          <span class = "iconfont icon-tubiao113"></span>
          <p>分类</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <span class = "iconfont icon-gouwuche"></span>
          <p>购物车</p>
        </router-link>
        <router-link to="/user" tag="li">
          <span class = "iconfont icon-weibiaoti2fuzhi12"></span>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<style lang="scss">
// 导入清除样式的文件 ---- 内部又导入了其他的文件
@import '@/lib/reset.scss';
html, body, #app {
  @include rect(100%, 100%); // width: 100%;height: 100%;
}

#app {
  @include flexbox(); // display: -webkit-box;display: -ms-flexbox;display: flex;
  @include flex-direction(column); //     -webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;
  .container {
    @include flex(); // -webkit-box-flex: 1;-ms-flex: 1;flex: 1;width: .1px;
    @include rect(100%, auto); // 修改上面的width
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li {
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(24px);
        }
        p {
          @include font-size(12px);
        }

        &.router-link-active { // li.router-link-active {}
          @include color(#f66);
        }
      }
    }
  }
}
</style>
