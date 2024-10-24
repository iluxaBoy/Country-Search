<script lang="ts" setup>
import { ref } from 'vue'

const { random } = useAvailableCountries()
const randomData = ref(random)
</script>

<template>
    <div></div>
</template>
