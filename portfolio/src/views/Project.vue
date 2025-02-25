<template>
    <div>
        <h1>{{ $store.state.projects[$route.params.id].title }}</h1>
        <h3>{{ $store.state.projects[$route.params.id].description }}</h3>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>