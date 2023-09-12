<script setup lang="ts">
import { UsePreferenceDarkStyle } from "@/modules/UseWebStore";

const { isDark, switchTheme } = UsePreferenceDarkStyle();
</script>

<template>
  <a @click="switchTheme"
    href="javascript:void(0);"
    class="pointer"
    :title="isDark ? 'Select light theme' : 'Select dark theme'">
    <i class="material-symbols-outlined pointer">
      {{ isDark? "wb_sunny": "nightlight" }}
    </i>
  </a>
</template>

<style scoped lang="scss">
.pointer {
  cursor: pointer;
}
</style>
