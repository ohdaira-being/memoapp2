<script setup>
import { onMounted } from "vue";
import { useMemoStore } from "../stores/products";

const { getMemos, addMemo } = useMemoStore();

onMounted(() => {
  getMemos();
});
</script>

<template>
  <p>【新規メモ】</p>
  <!-- <p v-if="required">内容を入力してください</p> -->
  <textarea cols="40" rows="30" v-model="newcontent"></textarea><br />
  <p>{{ activateSubmit }}</p>
  <RouterLink to="/"
    ><input
      type="submit"
      value="追加"
      v-on:click="addMemo(newcontent)"
      v-bind:disabled="activateSubmit"
  /></RouterLink>
</template>
