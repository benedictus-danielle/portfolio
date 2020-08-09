// @flow
import * as React from 'react';
import $ from 'jquery';
import "./Extras.scss";


type Props = {

};
type State = {

};

export class Extras extends React.Component<Props, State> {

    render() {

        $(() => {

            let velocityX = 4;
            let velocityY = 2;
            let x = 1;
            let y = 1;
            const width = 50;
            const height = 50;
            let draw = () => {
                ctx.clearRect(0,0,canvas.width,canvas.height)
                ctx.fillRect(x,y,width,height);
            }
            let update = () => {
                if(x <= 0 || x + width >= canvas.width || y <= 0 || y + height >= canvas.height){
                    ctx.fillStyle = `rgb(
                        ${Math.ceil(Math.random() * 255)},
                        ${Math.ceil(Math.random() * 255)},
                        ${Math.ceil(Math.random() * 255)}
                    )`
                    if(x <= 0 || x + width >= canvas.width){
                        velocityX *= -1;
                    }
                    if(y <= 0 || y + height >= canvas.height){
                        velocityY *= -1;
                    }
                }


                x += velocityX;
                y += velocityY;
            }

            let render = () => {
                update()
                draw()
                requestAnimationFrame(render)
            }



            const canvas = document.getElementById('bouncing-box') as HTMLCanvasElement;
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            const parent = $('#bouncing-box').parent()
            canvas.height = (parent.height() as number) - 5
            canvas.width = parent.width() as number


            window.onresize = () => {
                const parent = $('#bouncing-box').parent()
                console.log(parent)
                canvas.height = (parent.height() as number) - 5
                canvas.width = parent.width() as number
            }

            render()

        })
        return (
            <canvas id="bouncing-box"/>
        );
    };
};