<template>
  <div class="app-header" id="app">
    <div class="app-header_container container">
      <h4 class="title">
        InhGrp
        <span v-if="familyName" class="family-name"><Icon name="cancel" />\ {{ formatFamilyName }}</span>
      </h4>
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
          <Icon :name="item.icon" width="20px" height="20px" />
          <span class="link">
            {{ item.label }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import Icon from "@/components/ui/Icon.vue";
import Button from "./ui/Button.vue";

const navItems = ref([
  { route: "/bio", label: "Bio", icon: "history" },
  { route: "/tree", label: "Tree", icon: "parent_node" },
  { route: "/timeline", label: "Timeline", icon: "timeline" },
]);

const familyName = ref<string>("Corleone");

const formatFamilyName = computed(() => {
  return `The ${familyName.value}'s`;
});
</script>
<style lang="scss">
.app-header {
  padding: 100px 0 0;
  background-color: var(--bg-primary);
  color: #fff;
  & &_container {
    padding: 40px 30px;
    .title {
      font-size: 4rem;
      display: flex;
      align-items: center;
      .button{
        margin-left: 4rem;
      }
      .family-name {
        position: relative;
        cursor: pointer;
        color: var(--bg-secondary);
        font-style: italic;

        &:hover .icon {
          display: block;
        }

        .icon {
          display: none;
          position: absolute;
          top: 0;
          left: 50%;
        }
      }
    }
  }
  & &_nav {
    border-top: 1px solid #393939;
    .container {
      padding: 0 20px;
      .item {
        cursor: pointer;
        padding: 10px 30px 10px 15px;
        color: #ffffff;
        display: inline-block;
        transition: all 0.2s;
        .icon {
          margin-right: 5px;
        }
        &.active,
        &:hover {
          background: #393939;
          border-top: 3px solid var(--bg-white);
        }
        .link {
          color: #ffffff;
        }
      }
    }
  }
}
</style>