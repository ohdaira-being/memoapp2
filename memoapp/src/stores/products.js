import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useMemoStore = defineStore("memos", {
  state: () => ({
    memos: useLocalStorage("memos", []),
  }),

  actions: {
    getMemos() {
      this.memos.push();
    },
    addMemo(newcontent) {
      const uid = self.crypto.randomUUID();
      if (newcontent == null) {
        newcontent = "空白のメモ";
      }
      const memo = {
        id: uid,
        content: newcontent,
      };
      this.memos.push(memo);
      this.saveMemos();
    },
    saveMemos() {
      localStorage.setItem("memos", JSON.stringify(this.memos));
    },
    deleteMemo(deleteid) {
      this.memos = this.memos.filter((memo) => memo.id !== deleteid);
    },
    // editMemo(editid) {
    //   this.memos.find((memo) => memo.id === editid).content;
    // },
  },
});
