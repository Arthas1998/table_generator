import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {createRouter} from "vue-router";

export const useWebStore = defineStore('web', () => {
    const web = reactive({
        title:"table_generator",
        url:"/table_generator",
    })

    return {
        web
    }
})

export const useNavRouteStore = defineStore('navRoute', () => {
    const tabs = ref('latex')

    const switchPage = (newPage) => {
        tabs.value = newPage
    }

    return {
        tabs
    }
})