<script setup lang="ts">

//defineProps(['titleSummary'])

</script>

<template>
   <footer>
    <b>tmslpm</b>
  </footer>
</template>

<style scoped>
    footer {
        z-index: 999;
        padding: 15px;
        position: fixed; 
        width: 100%;
        text-align: center;
        left: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.02);
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.9px);
        -webkit-backdrop-filter: blur(4.9px);
        -webkit-app-region: drag;
        user-select: none;
    }
    
</style>