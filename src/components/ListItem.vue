<script setup>
    defineProps({
        name: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: true
        },
        isDone: {
            type: Boolean,
            required: true
        }
    })

    import ActiveListItem from "./items/ActiveListItem.vue"
    import FinishedListItem from "./items/FinishedListItem.vue"
</script>

<template>
    <!-- Finished item -->
    <template v-if="isDone">
        <FinishedListItem></FinishedListItem>
    <template>

    <!-- Active item -->
    <template v-else>
        <ActiveListItem></ActiveListItem>
    </template>
</template>