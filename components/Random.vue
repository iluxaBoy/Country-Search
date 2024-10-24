<script lang="ts" setup>
import { ref } from 'vue'

const { random } = useAvailableCountries()
const { getHoliday, nextHoliday } = useNextPublicHolidays()
const randomData = ref(random)
const randomHoliday = ref([])

for (let i = 0; i < randomData.value.length; i++) {
    console.log(randomData.value[i])
}
</script>

<template>
    <div>
        {{ randomData }}
    </div>
</template>
