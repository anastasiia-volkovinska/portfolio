<template>
    <transition name="bounce">
        <section class="menu" v-if="menuOpened">
            <ul class="nav">
                <li v-for="item in items"><a :href="item.link">{{ item.text }}</a></li>
            </ul>
            <div class="social">
                <ul class="social-icons icon-circle icon-zoom list-unstyled list-inline">
                    <li> <a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a> </li>
                    <li><a href="#"><i class="fa fa-github"></i></a> </li>
                    <li> <a href="#"><i class="fa fa-google-plus"></i></a> </li>
                </ul>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    name: 'menu',
    data () {
        return {
            msg: 'Test'
        }
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        menuOpened: {
            type: Boolean,
            required: false,
            default: function () {
                return false
            }
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

p {
    margin: 0;
}

.menu {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: black;
    opacity: 0.9;
    z-index: 2;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.nav {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: auto;
    margin-top: 10em;
    & li {
        padding: 2em;
        transition: background .3s;
        &:hover {
            background-color: rgba(255, 255, 255, 0.8);
        }
        &:hover a {
            color: black;
        }
        &:hover a::after {
            width: 100%;
        }
        & a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-size: 1.5em;
            position: relative;
            &::after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0px;
                height: 1px;
                background: black;
                transition: width .3s;
            }
        }
    }
}

.list-unstyled {
    padding-left: 0;
    margin-top: 3em;
    list-style: none;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
}
.list-inline li {
    display: inline-block;
    padding: 10px;
    margin-bottom: 10px;
}

.social-icons .fa {
	font-size: 1.8em;
}

.social-icons .fa {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #FFF;
    color: rgba(255, 255, 255, 0.8);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    // -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.social-icons.icon-circle .fa{
    border-radius: 50%;
    border: 1px solid black;
}

.social-icons .fa:hover, .social-icons .fa:active {
    color: #FFF;
    -webkit-box-shadow: 1px 1px 3px #333;
    -moz-box-shadow: 1px 1px 3px #333;
    box-shadow: 1px 1px 3px #333;
    border: 1px solid white;
}
.social-icons.icon-zoom .fa:hover, .social-icons.icon-zoom .fa:active {
    	-webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    // -o-transform: scale(1.1);
    transform: scale(1.1);
}


</style>
