import * as PIXI from 'pixi.js'
import Element from './Element.js'

export default class Snake extends PIXI.Container {

    constructor ({
        container,
        x,
        y
    }) {
        super();
        container.addChild(this);
        this.x = x;
        this.y = y;
        this.elements = [];

        this.createElements(3);
        this.head = this.elements[0];

        // this.last = this.elements[this.elements.length - 1];
    }

    createElements (amount) {
        for (let i = 0; i < amount; i++) {
            let newElement;
            if (i === 0) {
                newElement = new Element({
                    container: this
                });
            } else {
                this.elementWidth = this.elements[0].width;
                newElement = new Element({
                    container: this,
                    x: this.elements[i - 1].x - this.elementWidth
                });
            }
            this.elements.push(newElement);
            this.addChild(newElement);
        }
    }

    addElement () {
        this.elementWidth = this.elements[0].width;
        this.elementPrev = this.elements.length - 1;
        let newElement = new Element({
            container: this,
            x: this.elementPrev.x - this.elementWidth,
            y: this.elementPrev.y - this.elementWidth
        });
        this.elements.push(newElement);
        this.addChild(newElement);
    }

    move () {
        // this.moveDown();
    }

    moveLeft () {
        game.direction = 'left';
        this.last = this.elements.pop()

        this.last.x = this.head.x;
        this.last.y = this.head.y;

        this.elements.splice(1, 0, this.last);

        this.head.moveLeft();
    }

    moveRight () {
        game.direction = 'right';
        this.last = this.elements.pop()

        this.last.x = this.head.x;
        this.last.y = this.head.y;

        this.elements.splice(1, 0, this.last);

        this.head.moveRight();
    }

    moveDown () {
        game.direction = 'down';
        this.last = this.elements.pop()

        this.last.x = this.head.x;
        this.last.y = this.head.y;

        this.elements.splice(1, 0, this.last);

        this.head.moveDown();
    }

    moveUp () {
        game.direction = 'up';
        this.last = this.elements.pop()

        this.last.x = this.head.x;
        this.last.y = this.head.y;

        this.elements.splice(1, 0, this.last);

        this.head.moveUp();
    }

    eat () {
        this.addElement();
    }

    // checkDirection (direction) {
    //     console.log('i am direction', direction);
    //     switch (direction) {
    //         case 'up':
    //             this.moveUp();
    //             break;
    //         case 'down':
    //             this.moveDown();
    //             break;
    //         case 'left':
    //             this.moveLeft();
    //             break;
    //         case 'right':
    //             this.moveRight();
    //             break;
    //         default:
    //             console.log('no such direction!');
    //     }
    // }

}
