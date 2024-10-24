import { useRuntimeConfig } from 'nuxt/app'
import { ref } from 'vue'

export const useApiData = () => {
    const countrys = ref()
    const config = useRuntimeConfig()
    const random = ref([])

    fetch(config.public.api_root, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => {
            countrys.value = data

            for (let i = 0; i < 3; i++) {
                random.value.push(
                    countrys.value[Math.floor(Math.random() * (113 - 0 + 1))]
                )
            }
        })
        .catch((err) => console.log(err.message))
    return {
        countrys,
        random,
    }
}
