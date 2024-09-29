import { useEffect } from 'preact/hooks';
import { number_format, animate_flip } from '../Utils.js';

export default function Second({value = 0}) {
    if (value < 0) value = 59;
    if (value > 59) value = 0;

    let x1 = value;
    let x2 = value - 1;

    if (x2 < 0) {
        x2 = 59;
    }

    let container;

    function flip() {
        container.querySelector('.x1').innerText = number_format(x1);
        container.querySelector('.x2').innerText = number_format(x2);
        animate_flip(container, 200);
    }

    useEffect(() => {        
        container = $.app.querySelector('.seconds > .container');
        flip();            
    }, [x1, x2])

    return (
        <div className="seconds">
            <div class="container">
                <span class="x1"></span>
                <span class="x2"></span>
            </div>
        </div>
    )
}