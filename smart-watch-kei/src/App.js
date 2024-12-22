import "./App.scss"
import React, { useRef } from 'react';

function App() {
  const buttonsScreen_Ref = useRef(null);
  const scheduleScreen_Ref = useRef(null);
  const changesScreen_Ref = useRef(null);

  function goToSchedule() {
    if (scheduleScreen_Ref.current && changesScreen_Ref.current && buttonsScreen_Ref.current) {
      scheduleScreen_Ref.current.style.display = 'flex';
      changesScreen_Ref.current.style.display = 'none';
      buttonsScreen_Ref.current.style.display = 'none';
    }
  }

  function goToChanges() {
    if (changesScreen_Ref.current && scheduleScreen_Ref.current && buttonsScreen_Ref.current) {
      changesScreen_Ref.current.style.display = 'flex';
      scheduleScreen_Ref.current.style.display = 'none';
      buttonsScreen_Ref.current.style.display = 'none';
    }
  }

  return (
    <div className="App">
      <div ref={buttonsScreen_Ref} id="buttonsScreen">
        <button id="scheduleMainButton" onClick={goToSchedule}>Расписание</button>
        <button id="changesMainButton" onClick={goToChanges}>Изменения</button>
      </div>
      <div ref={scheduleScreen_Ref} id="scheduleScreen"></div>
      <div ref={changesScreen_Ref} id="changesScreen"></div>
    </div>
  );
}

export default App;
