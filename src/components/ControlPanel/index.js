import React from 'react';
import Button from 'react-bootstrap/Button';

import './styles.css';

const ControlPanel = () => (
  <aside className="control-panel">
    <button  className="control-button">📷 </button>
    <button className="control-button">🎤 </button>
    <button className="control-button">🖥️ </button>
    <button className="control-button">💬 </button>
    <button className="control-button">↩ </button>
  </aside>
);

export default ControlPanel;
