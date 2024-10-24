import { useRuntimeConfig } from 'nuxt/app'
import { ref } from 'vue'

export const useAvailableCountries = () => {
    const countrys = ref()
    const config = useRuntimeConfig()
    const random = ref([])

    const countrysData = () => {
        fetch(config.public.api_root, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                countrys.value = data

                for (let i = 0; i < 3; i++) {
                    random.value.push(
                        countrys.value[
                            Math.floor(Math.random() * (113 - 0 + 1))
                        ],
                    )
                }
            })
            .catch((err) => console.log(err.message))
    }

    const
    countrysData()
    return {
        countrys,
        random,
    }
}
