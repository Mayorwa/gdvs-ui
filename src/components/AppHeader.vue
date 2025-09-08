<template>
  <div class="app-header" id="app">
    <div class="app-header_container container">
      <h4 class="title">Lineage Visual</h4>
    </div>
    <div class="app-header_nav">
      <div class="container">
        <router-link
            v-for="(item, index) in navItems"
            :key="index"
            class="item"
            active-class="active"
            :to="item.route"
        >
          <Icon
              :name="item.icon"
              width="20px"
              height="20px"
          />
          <span class="link">
            {{item.label}}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import Icon from "@/components/ui/Icon.vue";

const navItems = ref([
  { route: '/bio', label: 'Bio', icon: 'history' },
  { route: '/tree', label: 'Tree', icon: 'parent_node' },
  { route: '/timeline', label: 'Timeline', icon: 'timeline' }
])

</script>
<style lang="scss">
.app-header {
  padding: 100px 0 0;
  background-color: #000;
  color: #fff;
  & &_container{
    padding: 40px 30px;
    .title{
      font-size: 4rem;
    }
  }
  & &_nav{
    border-top: 1px solid #393939;
    .container{
      padding: 0 20px;
      .item{
        cursor: pointer;
        padding: 10px 30px 10px 15px;
        color: #ffffff;
        display: inline-block;
        transition: all .2s;
        .icon{
          margin-right: 5px;
        }
        &.active, &:hover{
          background: #393939;
          border-top: 3px solid #0f62fe;
        }
        .link{
          color: #ffffff;
        }
      }
    }
  }
}
</style>