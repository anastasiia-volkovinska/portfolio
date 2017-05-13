<template>
    <section class="projects">
        <ul class="projects-list">
            <li v-for="(item, index) in items" class="wow bounceInDown">

            </li>
        </ul>
    </section>
</template>

<script>

export default {

    name: 'projects',
    props: {
        items: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>

.projects  {
    padding: 100px 0;
}

li {
    display: inline-block;
    width: 20%;
    max-width: 300px;
    height: 300px;
    margin: 10px;
    background-color: black;
}
</style>
