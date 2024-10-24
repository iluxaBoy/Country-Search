<script lang="ts" setup>
import { ref } from 'vue'

const { countrys } = useApiData()
const countryData = ref(countrys)
const search = ref('')
const temp = ref(true)
</script>

<template>
    <div>
        <div class="search">
            <input
                placeholder="Search input"
                type="search"
                name="search"
                id="search"
                v-model="search"
            />
        </div>
        <div class="result">
            <h2>Countries List</h2>
            <p
                v-show="
                    country.name.toUpperCase().includes(search.toUpperCase())
                "
                v-for="country in countryData"
                :key="country"
            >
                <NuxtLink :to="`/country/${country.countryCode}`">{{
                    country.name
                }}</NuxtLink>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
