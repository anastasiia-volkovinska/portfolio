import * as PIXI from 'pixi.js';
import Rx from 'rxjs';

export default class Element extends PIXI.Graphics {
    constructor ({
        container,
        width = 10,
        color = 0xff00ff,
        velocity = 10,
        x = 0,
        y = 0
    }) {
        super();
        this.vx = velocity;
        this.vy = velocity;

        this.x = x;
        this.y = y;
        this.width = width;

        this.beginFill(color);
        this.lineStyle(1, 0x0000FF, 1);
        this.drawRect(0, 0, width, width);
        this.endFill();

        container.addChild(this);

        this.addListeners();
    }

    addListeners () {
        this.interactive = true;
        this.buttonMode = true;

        this.own$ = new Rx.Subject();

        this.click$ = Rx.Observable.fromEvent(this, 'pointerdown');
    }

    moveRight () {
        this.x += this.width;
        if (this.x > game.width) {
            this.x = 0;
        }
    }

    moveDown () {
        this.y += this.width;
        if (this.y > game.width) {
            this.y = 0;
        }
    }

    moveLeft () {
        this.x -= this.width;
        if (this.x < 0) {
            this.x = game.width;
        }
    }

    moveUp () {
        this.y -= this.width;
        if (this.y < 0) {
            this.y = game.width;
        }
    }

}
