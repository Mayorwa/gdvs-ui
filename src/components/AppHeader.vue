<template>
  <div class="app-header">
    <div class="app-header_container container">
      <h4 class="title">Lineage Visual: The Soprano's</h4>
    </div>
    <div class="app-header_nav">
      <ul class="container">
        <li>
          <Icon
              name="history"
              width="20px"
              height="20px"
          />
          <a href="" class="link">
            History
          </a>
        </li>
        <li class="active">
          <Icon
              name="parent_node"
              width="20px"
              height="20px"
          />
          <a href="" class="link">
            Tree
          </a>
        </li>
        <li>
          <Icon
              name="timeline"
              width="20px"
              height="20px"
          />
          <a href="" class="link">
            Timeline
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Icon from "@/components/ui/Icon.vue";
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
    ul{
      padding: 0 20px;
      li{
        cursor: pointer;
        padding: 10px 30px 10px 15px;
        color: #ffffff;
        display: inline-block;
        .icon{
          margin-right: 5px;
        }
        &.active{
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