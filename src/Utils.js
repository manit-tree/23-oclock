export function number_format(value) {
    return String(value).padStart(2, '0');
}

export function animate_flip(el, duration = 200, cb = null) {
    let keyframes = [
        {"transform": 'translateY(-50%)'},
        {"transform": 'translateY(0)'}
    ]

    let settings = {
        duration: duration,
        iterations: 1,
        fill: 'both',
        easing: 'ease-in-out'
    }

    let animation = el.animate(keyframes, settings);  

    if (typeof cb === 'function') {
        let finish_handler = () => {
            animation.removeEventListener('finish', finish_handler);
            cb();

        }

        animation.addEventListener('finish', finish_handler);
    }
}

export function get_time() {
    let dt = new Date();

    return {
        hours: dt.getHours(),
        minutes: dt.getMinutes(),
        seconds: dt.getSeconds()
    }
}
