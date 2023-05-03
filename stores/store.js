import { defineStore } from "pinia";
import courses from "~/data/courses";
export const useTheme = defineStore('theme', {
    state: ()=>({
        isDark: false,
    }),
    actions: {
        updateTheTheme(){
            this.isDark = !this.isDark
            localStorage.setItem('theme', JSON.stringify(this.isDark))
        }
    }
})

export const useCourse = defineStore('Course', {
    state(){
        return{
            courseList: courses
        }
    }
})