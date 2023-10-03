<script setup lang="ts">
import TopNavigation from "@/components/TopNavigation.vue";
import MyFooter from "@/components/MyFooter.vue";
import JsonDataGists from "@json/gist_data.last.json";
import { onMounted, ref } from "vue";
//defineProps(['titleSummary'])

const allGists = ref([])



JsonDataGists.forEach(gist => {
  console.log(gist)
  for (const [_, value] of Object.entries(gist.files)) {
    fetch(value.raw_url)
      .then((response) => response.text())
      .then((text) => {
        allGists.value.push({
          text: gist.description,
          raw: text,
          language: value.language.toLowerCase()
        });
      });
  }
});

</script>

<template>
  <TopNavigation />
  <main class="col-12">
    <h1>Hello World !</h1>

    <template v-for="item in allGists">
      <section>
        <p>{{ item.text }}</p>
        <highlightjs :language=item.language :code=item.raw />
      </section>
    </template>
  </main>
  <MyFooter />
</template>

<style scoped>
main {
  padding: 10px;
  margin-bottom: 55px;
}
</style>
