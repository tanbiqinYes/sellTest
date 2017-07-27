<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view> 
    <v-goods></v-goods>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import goods from './components/goods/goods.vue';

const ERR_OK = 0;

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      }
    });
  },
  components: {
    'v-header': header,
    'v-goods': goods
  }
};
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "./common/stylus/mixin.styl"
  .tab
      display:flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex:1
        & > a
          display: block
          text-align: center
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
