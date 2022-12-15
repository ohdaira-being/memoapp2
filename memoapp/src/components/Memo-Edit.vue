<script setup>
import { storeToRefs } from "pinia";
import { useMemoStore } from "../stores/products";

const { memos } = storeToRefs(useMemoStore());
</script>

<template>
  <textarea
    cols="40"
    rows="30"
    v-model="memos.find((memo) => memo.id === $route.params.id).content"
  /><br />
  <RouterLink to="/"><button>編集</button></RouterLink>
</template>
