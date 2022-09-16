<template>
    <h1 class="h1">Listado de Posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<script lang="ts" setup>
    // importamos la clase
    import PostService from '@/services/PostService';
    import { defineComponent, onMounted } from 'vue'

    // Creamos un nuevo PostService, que es la clase
    const service = new PostService()
    // solicitamos los posts, pero todavía no ha hecho el fetch, por lo tanto está vacío posts
    const posts = service.getPosts()
    // Aquí llamamos al Fetch para que se llene de posts
    onMounted(async () => {
        await service.fetchAll()
    })

</script>
<!-- no funcionan los estilos -->
<style scoped>
    .post-list {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;
    }
    .post-list li {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
    }

</style>