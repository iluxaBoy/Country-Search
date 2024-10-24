import { useRuntimeConfig } from 'nuxt/app'
import { ref } from 'vue'

export const useAvailableCountries = () => {
    const config = useRuntimeConfig()
    const countries = ref()
    const random = ref([])

    fetch(config.public.api_root, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then(async (data) => {
            countries.value = await data

            for (let i = 0; i < 3; i++) {
                random.value.push(
                    countries.value[Math.floor(Math.random() * (113 - 0 + 1))],
                )
            }
        })
        .catch((err) => console.log(err.message))

    return {
        countries,
        random,
    }
}
