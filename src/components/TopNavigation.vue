<script setup lang="ts">
import { Routes } from "@/router/Routes";
import { ref } from "vue";
import SwitchTheme from "@/components/SwitchTheme.vue";

//defineProps(['titleSummary'])
const menu = ref<HTMLElement>((null as any));

const expandMenu = () => menu.value.classList.contains("responsive")
  ? menu.value.classList.remove("responsive")
  : menu.value.classList.add("responsive");

const menuItemOnClicked = () => menu.value.classList.contains("responsive")
  ? expandMenu()
  : () => { /* */ };

</script>

<template>
  <nav ref="menu" class="col-12">
    <template v-for="item in Routes">
      <router-link :to="item.path" :id="item.name" @click="menuItemOnClicked" v-if="!item.hidden">
        <i class="material-symbols-outlined">apps</i>
        <span>{{ item.name }}</span>
      </router-link>
    </template>

    <SwitchTheme class="btnSwitchTheme floatRight" />

    <b @click="expandMenu()" class="icon"><i class="material-symbols-outlined">expand</i></b>
  </nav>
</template>

<style scoped lang="scss">
nav {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
  -webkit-app-region: drag;
  user-select: none;

  .router-link-active {
    color: var(--color-love);
  }

  a,
  b {

    display: inline-block;
    text-align: center;
    color: rgba(var(--rgb-love), 0.5);
    padding: 14px 16px;
    text-decoration: none;
    font-size: var(--font-size);
    vertical-align: middle;

    cursor: pointer;

    span {
      vertical-align: middle
    }

    &:hover {
      color: var(--color-love);
    }

    &:hover:not(.btnSwitchTheme) {
      background-color: rgba(var(--rgb-love), 0.1);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
  }


  a.active {
    background: var(--color-love);
  }


  .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    a:not(:first-child) {
      display: none;
    }

    b.icon {
      float: right;
      display: block;
    }

    &.responsive {
      position: relative;

      .icon {
        position: absolute;
        right: 0;
        top: 0;
      }

      a {
        float: none;
        display: block;
        text-align: left;
      }
    }
  }
}
</style>