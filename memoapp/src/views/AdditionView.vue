<script setup>
import Addition from "../components/Memo-Add.vue";
</script>

<template>
  <main>
    <Addition />
    <RouterLink to="/"><input type="submit" value="キャンセル" /></RouterLink>
  </main>
</template>
