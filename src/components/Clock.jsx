import { useState, useEffect } from 'preact/hooks';
import Hour from './Hour';
import Minute from './Minute';
import Second from './Second';
import { get_time } from '../Utils.js';

let $ = {};
window.$ = $;

$.app = document.querySelector('#app');

export default function Clock({hours = 0, minutes = 0, seconds = 0}) {
    const [state, setState] = useState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
    })
    
    let last = 0;
    let ticked = false;

    let update = () => {
        let data = get_time();

        setState({
            hours: data.hours,
            minutes: data.minutes,
            seconds: data.seconds
        })
    }

    function tick() {
        let current_time = (new Date()).getTime();

        if ((current_time - last) > 1000) {
            last = current_time;
            update();
        }

        requestAnimationFrame(tick);
    }

    useEffect(() => {
        if (!ticked) {
            tick();
            ticked = true;
        }
    }, [ticked])

    useEffect(async () => {
        if (navigator.wakeLock) {
            let wakelock = null;
                wakelock = await navigator.wakeLock.request('screen');                
                console.log('wakelock is active!');
            try {

            } catch (err) {
                console.log(err);
            }
        } 
    }, [])

    return (
        <div className="clock">
            <div class="container">   
                <Hour value={state.hours} />
                <Minute value={state.minutes} />
                <Second value={state.seconds} />
            </div>
        </div>
    )
}