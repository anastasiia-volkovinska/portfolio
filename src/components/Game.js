import * as PIXI from 'pixi.js'
import Rx from 'rxjs';
import Snake from './Snake.js'
import Food from './Food.js'
import Preload from './Preload.js'

export default class Game extends PIXI.Application {

    constructor ({
        div,
        width,
        height,
        options
    }) {
        super(width, height, options); // this = new PIXI.App(width, height, options)
        this.width = width;
        this.height = height;
        this.options = options;
        this.direction = null;

        this.mountOn(div)
        this.showPreload();
        this.checkFoodCatch();
        this.checkDeath();
        // this.moveSnake();
    }

    mountOn (div) {
        let element = document.querySelector(div);
        element.appendChild(this.view);
    }

    showPreload () {
        this.preload = new Preload({
            container: this.stage,
            x: this.width / 2,
            y: this.height / 2
        });
    }

    createSnake () {
        this.snake = new Snake({
            container: this.stage,
            x: 0,
            y: 0
        });
        this.snake.food$ = new Rx.Subject();
        this.snake.death$ = new Rx.Subject();
    }

    createFood () {
        this.food = new Food({
            container: this.stage,
            gameWidth: this.width,
            gameHeight: this.height
        });
    }

    moveSnake () {
        let counter = 0;
        this.ticker.add(() => {
            counter++;
            if (counter % 10 === 0) {
                this.snake.move();
            }
        });
    }

    checkFoodCatch () {
        this.ticker.add(() => {
            if (this.food) {
                if (this.snake.head.x < this.food.x + this.food.width / 2 &&
                    this.snake.head.x + this.snake.head.width / 2 > this.food.x &&
                    this.snake.head.y < this.food.y + this.food.height / 2 &&
                    this.snake.head.height / 2 + this.snake.head.y > this.food.y) {
                        this.snake.food$.next(this.food);
                }
            }
        });
    }

    checkDeath () {
        this.ticker.add(() => {
            if (this.snake) {
                this.snake.elements.forEach((el, index) => {
                    if (index !== 0) {
                        if (this.snake.head.x < el.x + el.width / 2 &&
                            this.snake.head.x + this.snake.head.width / 2 > el.x &&
                            this.snake.head.y < el.y + el.height / 2 &&
                            this.snake.head.height / 2 + this.snake.head.y > el.y) {
                                this.snake.death$.next(this.snake);
                        }
                    }
                });
            }
        });
    }

    showFail () {
        let failText = new PIXI.Text('GAME OVER!', {
            fontFamily: 'Arial',
            fontSize: 35,
            fill: 'white',
            align: 'center',
            stroke: '#000000',
            strokeThickness: 6
        });
        failText.anchor.set(0.5);
        failText.x = this.width / 2;
        failText.y = this.height / 2;
        this.stage.addChild(failText);
        this.ticker.stop();
        setTimeout(() => {
            this.gameReload();
        }, 1000);
    }

    gameReload () {
        this.ticker.start();
        console.log('i am here');
        this.stage.removeChildren();
        this.showPreload();
    }

    createKeyStream (stream, name) {
        this[`${name}$`] = stream
            .do(event => {
                if (window.scrollY > 1250 && window.scrollY < 2000) {
                    event.preventDefault()
                }
            })
            .pluck('key')
            .filter(key => key === `Arrow${name.charAt(0).toUpperCase() + name.slice(1)}`)
    }

    setUpStreams () {
        this.keyDown$ = Rx.Observable.fromEvent(document, 'keydown');

        this.createKeyStream(this.keyDown$, 'left');
        this.createKeyStream(this.keyDown$, 'right');
        this.createKeyStream(this.keyDown$, 'up');
        this.createKeyStream(this.keyDown$, 'down');

        // this.merge$ = Rx.Observable.merge(this.left$, this.right$, this.up$, this.down$);
        //
        // this.merge$
        //     .subscribe(next => console.log(next));

        this.snake.food$
            .distinct()
            .subscribe(
                next => {
                    this.snake.eat();
                    this.food.destroy();
                    this.createFood();
                }
            )

        this.snake.death$
            .distinct()
            .subscribe(
                next => {
                    this.showFail();
                }
            )

        this.left$
            .filter(next => this.direction !== 'right')
            .subscribe(
                next => {
                    this.snake.move = this.snake.moveLeft;
                }
            )
        this.right$
            .filter(next => this.direction !== 'left')
            .subscribe(
                next => {
                    this.snake.move = this.snake.moveRight;
                }
            )
        this.up$
            .filter(next => this.direction !== 'down')
            .subscribe(
                next => {
                    this.snake.move = this.snake.moveUp;
                }
            )
        this.down$
            .filter(next => this.direction !== 'up')
            .subscribe(
                next => {
                    this.snake.move = this.snake.moveDown;
                }
            )
    }
}

// this.element.keyDown$
//     .pluck('key')
//     .filter(key => key === 'ArrowLeft')
//     .subscribe(
//         next => console.log(next)
//     )

// Rx examples

// this.element.click$
//     .bufferTime(500)
//     .filter(arr => arr.length > 1)
//     .subscribe(
//         next => {
//             this.element.moveDown();
//             this.element.own$.next('I am next');
//         }
//     )

// this.element.own$
//     .delay(500)
//     .bufferTime(2000)
//     .subscribe(
//         next => console.log(next)
//     )
//
// this.element.own$
//     .delay(500)
//     .subscribe(
//         next => console.log('Another stream', next)
//     )
