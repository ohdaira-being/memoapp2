<script setup>
import { RouterLink, RouterView } from "vue-router";
import MemoList from "./components/Memo-List.vue";
</script>

<template>
  <div>
    <MemoList msg="メモ帳!" class="MemoList" />

    <RouterLink to="/addition" class="AddMemo">＋</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.MemoList {
  width: 100%;
  display: inline-block;

  text-align: left;
}
.AddMemo {
  font-size: 30px;
  text-align: left;
}
</style>
