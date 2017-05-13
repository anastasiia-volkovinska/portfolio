<template>
    <section class="home" @mousemove="handleMouseMove">
        <div class="overlay">
            <header class="header">
                <div class="hamburger-menu" @click="handleMenuClick">
                    <div class="bar" :class="{ animate: menuActive }"></div>
                </div>
                <a href="/" class="logo-link"><img src="../assets/logo.png" alt="" class="logo-img" /></a>
            </header>
            <div class="home-text wow bounceInDown" data-wow-duration=".7s" data-wow-delay=".2s">
                <h1>{{ msg }}</h1>
                <p>{{ msg2 }}</p>
                <p>{{ msg3 }}</p>
            </div>
            <div class="mouse">
                <span></span>
            </div>
        </div>
    </section>
</template>

<script>

export default {

    name: 'home',
    data () {
        return {
            msg: 'Hello, my name is Anastasia Volkovinska,',
            msg2: 'Frontend Web Developer from Kyiv, Ukraine',
            msg3: 'currently doing Javascript Game Development, Another Games Studio. ',
            menuActive: false
        }
    },
    methods: {
        handleMenuClick: function () {
            this.menuActive = !this.menuActive
            this.$emit('home-click')
        },
        handleMouseMove: function (event) {
            let coef = 0.03
            let screenX = event.screenX
            let screenY = event.screenY
            let centerX = window.innerWidth / 2
            let centerY = window.innerHeight / 2

            let element = document.querySelector('.home-text')
            element.style.top = -(screenX - centerX) * coef + 'px'
            element.style.left = -(screenY - centerY) * coef + 'px'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

html { height: 100% }
body { height: 100% }

.js-Parallaxify {
  position: relative;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
/* stretch body child for wow effect*/
body > .js-Parallaxify { background-size: cover }
/* for "hoverable" child, see rules below (that use absolute) */
.js-Parallaxify > * { position: relative }
.js-Parallaxify > .js-Parallaxify {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

$section-height: 950px;
$bar-width: 40px;
$bar-height: 3px;
$bar-spacing: 10px;
$color2: #fff; // for mouse

h1 {
    font-size: 2em;
}

p {
    font-size: 1.2em;
}
.home {
    background-image: url("../assets/bg2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: $section-height;
}

.overlay {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.4);
    height: $section-height;
}

.header {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    height: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    z-index: 3;
}

.logo-link{
    position: absolute;
    left: 30px;
    top: 15px;
}

.logo-img {
    width: 30px;
    height: 30px;
}

.home-text {
    position: relative;
    width: 50%;
    margin: auto;
    text-align: center;
    // background: rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: #eee;
}

// Menu-toggle
.hamburger-menu {
    position: absolute;
    top: 15px;
    right: 30px;
    // right: 0;
    // bottom: 0;
    margin: auto;
    width: $bar-width;
    height: $bar-height + $bar-spacing*2;
    cursor: pointer;
}

.bar,
.bar:after,
.bar:before {
    width: $bar-width;
    height: $bar-height;
}

.bar {
	position: relative;
	transform: translateY($bar-spacing);
	background: rgba(255, 255, 255, 1);
	transition: all 0ms 300ms;

  &.animate {
    background: rgba(255, 255, 255, 0);
  }
}

.bar:before {
	content: "";
	position: absolute;
	left: 0;
	bottom: $bar-spacing;
	background: rgba(255, 255, 255, 1);
	transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar:after {
	content: "";
	position: absolute;
	left: 0;
	top: $bar-spacing;
	background: rgba(255, 255, 255, 1);
	transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar.animate:after {
	top: 0;
	transform: rotate(45deg);
	transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
}

.bar.animate:before {
	bottom: 0;
	transform: rotate(-45deg);
	transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);;
}

.mouse {
  display: block;
  margin: 0 auto;
  width: 26px;
  height: 46px;
  border-radius: 13px;
  border: 1px solid $color2;
  bottom: 60px;
  position: absolute;
  left: 50%;
  margin-left: -14px;
  cursor: pointer;
  span {
    display: block;
    margin: 6px auto;
    width: 2px;
    height: 2px;
    border-radius: 4px;
    background: $color2;
    border: 1px solid transparent;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: scroll;
    animation-name: scroll;
  }
}

@-webkit-keyframes scroll {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}


@keyframes scroll {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
}

</style>
