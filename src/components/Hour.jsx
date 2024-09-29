import { useEffect } from 'preact/hooks';
import { number_format, animate_flip } from '../Utils.js';

export default function Hour({value = 0}) {
    if (value < 0) value = 23;
    if (value > 23) value = 0;

    let x1 = value;
    let x2 = value - 1;

    if (x2 < 0) {
        x2 = 23;
    }

    let container;

    function flip() {
        container.querySelector('.x1').innerText = number_format(x1);
        container.querySelector('.x2').innerText = number_format(x2);
        animate_flip(container, 400);
    }

    useEffect(() => {
        container = $.app.querySelector('.hours > .container');
        flip();            
    }, [x1, x2])

    return (
        <div className="hours">
            <div class="container">
                <span class="x1"></span>
                <span class="x2"></span>
            </div>
        </div>
    )
}