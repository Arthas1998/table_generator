import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useNavStore = defineStore('nav', () => {
    const activeName = ref('latex')
    function switchPage(index) {
        activeName.value = index;
    }

    return {
        activeName,
        switchPage,
    }
})