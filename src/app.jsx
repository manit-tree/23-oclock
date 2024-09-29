import { render } from 'preact';
import Clock from './components/Clock.jsx';
import { get_time } from './Utils.js';
import './style.css';

export function App() {
  let data = get_time();

  return (
    <div>
      <Clock hours={data.hours} minutes={data.minutes} seconds={data.seconds} />
    </div>
  )
}

render(<App />, document.getElementById('app'));
