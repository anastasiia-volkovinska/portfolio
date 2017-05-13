import * as PIXI from 'pixi.js';
import Rx from 'rxjs';

export default class Preload extends PIXI.Container {
    constructor ({
        container,
        x,
        y
    }) {
        super();

        this.x = x;
        this.y = y;

        container.addChild(this);
        this.addPlay();
    }

    addPlay () {
        let playContainer = new PIXI.Container();
        this.addChild(playContainer);
        playContainer.x = 0;
        playContainer.y = 100;

        playContainer.pivot.x = playContainer.width / 2;
        playContainer.pivot.y = playContainer.height / 2;

        let playButton = new PIXI.Graphics();
        playButton.beginFill(0xFF3300);
        playButton.lineStyle(1, 0xffffff, 1);
        playButton.drawRect(0, 0, 140, 40);
        playButton.pivot.x = playButton.width / 2;
        playButton.pivot.y = playButton.height / 2;

        let playText = new PIXI.Text('PLAY', {
            fontFamily: 'Arial',
            fontSize: 35,
            fill: 'white',
            align: 'center',
            stroke: '#000000',
            strokeThickness: 2
        });
        playText.anchor.set(0.5);

        playContainer.addChild(playButton);
        playContainer.addChild(playText);

        playContainer.interactive = true;
        playContainer.buttonMode = true;

        playContainer.click$ = Rx.Observable.fromEvent(playContainer, 'pointerdown');

        playContainer.click$
            .take(1)
            .subscribe(
                next => this.startGame()
            )
    }

    startGame() {
        this.removeChildren();
        game.createSnake();
        game.createFood();
        game.setUpStreams();
        game.moveSnake();
    }

}
