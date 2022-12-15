<script setup>
import { onMounted } from "vue";
import { useMemoStore } from "../stores/products";

const { getMemos } = useMemoStore();
const { deleteMemo } = useMemoStore();

onMounted(() => {
  getMemos();
});
</script>

<template>
  <RouterLink to="/"
    ><button v-on:click="deleteMemo($route.params.id)">削除</button></RouterLink
  >
</template>
