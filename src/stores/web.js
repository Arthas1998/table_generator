import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useWebStore = defineStore('web', () => {
    const web = reactive({
        title:"table_generator",
        url:"/table_generator",
    })

    return {
        web
    }
})