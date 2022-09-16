<template>
    <h1>Listado de Posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<script lang="ts">
    import PostService from '@/services/PostService';
    import { defineComponent, onMounted } from 'vue'

    export default defineComponent({
        name: 'PostList',
        setup() {
            // Creasmos un nuevo PostService, que es la clase
            const service = new PostService()
            // solicitamos los posts, pero todavía no ha hecho el fetch, por lo tanto está vacío posts
            const posts = service.getPosts()
            // Aquí llamamos al Fetch para que se llene de posts
            onMounted(async () => {
                await service.fetchAll()
            })
            return {posts}
        }
    })
</script>

<style scoped>

</style>