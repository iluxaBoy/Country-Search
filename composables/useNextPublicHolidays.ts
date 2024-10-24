import { ref } from 'vue'

export const useNextPublicHolidays = () => {
    const nextHoliday = ref([])

    const getHoliday = (countryCode: string) => {
        fetch(
            `https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`,
            {
                method: 'GET',
            },
        )
            .then((res) => res.json())
            .then((data) => (nextHoliday.value += data))
            .catch((err) => console.log(err.message))
    }

    return {
        nextHoliday,
        getHoliday,
    }
}
