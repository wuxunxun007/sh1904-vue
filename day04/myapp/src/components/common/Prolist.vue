<template>
  <ul class="prolist">
    <!-- <li class="proitem" v-for="(item, index) of prolist" :key="index">
      <div class="itemimg">
        <img :src="item.images.small" :alt="item.alt" />
      </div>
      <div class="iteminfo">
        <h3>{{ item.title }} --- {{ item.rating.average }}</h3>
        <div class="directors">
          导演：<span v-for="(itm, idx) of item.directors" :key="idx">{{ itm.name }}/</span>
        </div>
        <div class="casts">
          演员： <span v-for="(itm, idx) of item.casts" :key="idx">{{ itm.name }}/</span>
        </div>
        <Rating :rating="(item.rating.average / 2).toFixed(1)"/>
      </div>
    </li> -->
    <router-link tag="li" :to="{ name: 'detail', params: { id: item.id }}" class="proitem" v-for="(item, index) of prolist" :key="index">
      <div class="itemimg">
        <img :src="item.images.small" :alt="item.alt" />
      </div>
      <div class="iteminfo">
        <h3>{{ item.title }} --- {{ item.rating.average }}</h3>
        <div class="directors">
          导演：<span v-for="(itm, idx) of item.directors" :key="idx">{{ itm.name }}/</span>
        </div>
        <div class="casts">
          演员： <span v-for="(itm, idx) of item.casts" :key="idx">{{ itm.name }}/</span>
        </div>
        <Rating :rating="(item.rating.average / 2).toFixed(1)"/>
      </div>
    </router-link>
  </ul>
</template>

<script>
import Rating from '@/components/common/Rating'

export default {
  // props: ['prolist']
  props: {
    prolist: Array
  },
  components: {
    Rating
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.prolist {

  .proitem {
    @include flexbox();
    @include rect(100%, 1.1rem);
    @include border(0 0 1px 0,  #000, solid);
    .itemimg {
      @include rect(1.1rem, 1.1rem);
      img {
        @include rect(0.9rem, 0.9rem);
        @include margin(0.1rem);
        @include border(1px, #000, solid);
      }
    }
    .iteminfo {
      @include flex();
    }
  }
}
</style>
