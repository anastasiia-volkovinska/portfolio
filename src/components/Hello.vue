<template>
<div class="hello">
    <menuCustom :menuOpened="this.menuOpened" :items="navItems"></menuCustom>
    <home @home-click="homeClicked"></home>
    <skills :items="skillsItems"></skills>

    <section class="game_section">
        <h1>GAME EXAMPLE</h1>
        <div id="game"></div>
    </section>
    <projects></projects>

    <section class="technologies section">{{ msg }}</section>
    <section class="contacts section">{{ msg }}</section>

    <footer class="footer"></footer>
</div>
</template>

<script>
import Menu from './Menu.vue'
import Home from './Home.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'

export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            navItems: [{
                    link: '#',
                    text: 'Home'
                },
                {
                    link: '#',
                    text: 'My Skills'
                },
                {
                    link: '#',
                    text: 'Game Example'
                },
                {
                    link: '#',
                    text: 'Projects Done'
                },
                {
                    link: '#',
                    text: 'Technologies Used'
                },
                {
                    link: '#',
                    text: 'Contacts'
                }
            ],
            skillsItems: [{
                    icon: 'fa fa-gamepad',
                    heading: 'JS Game Dev',
                    description: [
                        'ES6',
                        'Canvas/WebGL',
                        'Phaser/Pixi',
                        'Git'
                    ]
                },
                {
                    icon: 'fa fa-picture-o',
                    heading: 'HTML5/CSS3',
                    description: [
                        'Jade',
                        'Sass',
                        'Photoshop'
                    ]
                },
                {
                    icon: 'fa fa-mobile fa-lg',
                    heading: 'Mobile-first',
                    description: [
                        'Responsive web design',
                        'Developing for touch devices'
                    ]
                }
            ],
            device: null,
            menuOpened: false
        }
    },

    methods: {
        onResize: function () {
            let currentWidth = window.innerWidth
            if (currentWidth < 600) {
                this.device = 'mobile'
            } else {
                this.device = 'desktop'
            }
        },
        homeClicked: function () {
            this.menuOpened = !this.menuOpened
        }
    },
    components: {
        menuCustom: Menu,
        home: Home,
        skills: Skills,
        projects: Projects
    },
    beforeMount: function () {
        this.onResize()
        window.addEventListener('resize', this.onResize.bind(this))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body {
    height: 100%;
}

body {
    margin: 0;
    box-sizing: border-box;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}


a {
    color: #42b983;
}

.hello {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.footer{
    height: 40px;
    /*background-color: black;*/
}

.game {
    padding: 100px;
}

.game_section {
    background-image: url("../assets/bg5.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 20vh 0;
}


</style>
