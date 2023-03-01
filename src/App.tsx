import React from 'react';
import './App.css';
import Context from './Hooks/Context';
import Effect from './Hooks/Effect';
import Memo from './Hooks/Memo';
import Ref from './Hooks/Ref';
import State from './Hooks/State';

const App: React.FC = () => {
  return (
    <div className="App">
      <State /> {/* useState hook */}
      <Effect /> {/* useEffect hook */}
      <Context /> {/* useContext hook */}
      <Ref /> {/* useRef hook */}
      <Memo /> {/* useMemo hook */}
    </div>
  );
}

export default App;
