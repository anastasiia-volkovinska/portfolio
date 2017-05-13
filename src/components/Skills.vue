<template>
    <section class="skills">
        <ul class="skills-list">
            <li v-for="(item, index) in items" class="wow bounceInDown">
                <box
                    :icon="item.icon"
                    :heading="item.heading"
                    :description="item.description"
                ></box>
            </li>
        </ul>
    </section>
</template>

<script>
import Box from './Box.vue'

export default {

    name: 'skills',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        Box
    }
}
</script>

<style lang="scss" scoped>

.skills  {
    padding: 100px 0;
    background-color: rgba(0, 0, 0, 1.0);
}

li {
    display: inline-block;
    width: 20%;
    max-width: 300px;
    margin: 10px;
}
</style>
