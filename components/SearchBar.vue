<script lang="ts" setup>
import { ref } from 'vue'

const { countries } = useAvailableCountries()
const countryData = ref(countries)
const search = ref('')
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
