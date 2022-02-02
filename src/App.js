import { useState } from 'react';
import Countdown from './countdown/Countdown.js';
import Product from './product/Product.js';
import './styles/countdown.css';

function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  const closeCountDown = () => {
    setShowCountdown(false)
  }

  return (
    <div >
      {showCountdown && <Countdown handleCloseCountdown={() => {
        closeCountDown();
      }} />}
      <Product />
    </div>
  );
}

export default App;
