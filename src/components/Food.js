import * as PIXI from 'pixi.js';
import Rx from 'rxjs';

export default class Food extends PIXI.Graphics {
    constructor ({
        container,
        width = 10,
        color = Math.random() * 0xFFFFFF,
        gameWidth = 0,
        gameHeight = 0,
        x = 0,
        y = 0
    }) {
        super();

        this.x = x;
        this.y = y;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = width;

        this.beginFill(color);
        this.lineStyle(1, 0x0000FF, 1);
        this.drawRect(0, 0, width, width);
        this.endFill();

        container.addChild(this);

        this.setCoords();

        // this.addListeners();
    }

    intRandom (end, start = 0) {
        return Math.round(Math.random() * (end - start) + start)
    }

    setCoords () {
        this.x = Math.round(Math.random() * this.gameWidth / 10) * this.width - this.width;
        this.y = Math.round(Math.random() * this.gameHeight / 10) * this.width - this.width;
        if (this.x > this.gameWidth) {
            this.x = this.gameWidth - this.width;
        }
        if (this.y > this.gameHeight) {
            this.y = this.gameHeight - this.width;
        }
        console.log(this.x, this.y);
    }

    destroy () {
        super.destroy();
    }

    // addListeners () {
    //     this.interactive = true;
    //     this.buttonMode = true;
    //
    //     this.own$ = new Rx.Subject();
    //
    //     this.click$ = Rx.Observable.fromEvent(this, 'pointerdown');
    // }

}
