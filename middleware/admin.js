export default defineNuxtRouteMiddleware(async (to, from) => {
    const {ip} = await $fetch("https://api.ipify.org/?format=json", {
        method: 'GET'
    })
    console.log(ip)
    return ip == "177.37.201.21" ? true : navigateTo('/')
  })