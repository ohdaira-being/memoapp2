<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useMemoStore } from "../stores/products";

const { memos } = storeToRefs(useMemoStore());
const { getMemos } = useMemoStore();

onMounted(() => {
  getMemos();
});

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in memos" v-bind:key="item.id">
        <RouterLink :to="{ name: 'edit', params: { id: item.id } }">
          {{ item.content.split("\n", 1)[0] }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

li {
  list-style: none;
  padding: 5px 0px;
  margin: 5px 0px;
  line-height: 1.6;
}
</style>
