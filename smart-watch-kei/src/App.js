import "./App.scss"
import React, { useRef } from 'react'
import { useDoubleTap } from 'use-double-tap'
import { Swiper, SwiperSlide } from 'swiper/react'

function App() {
  const buttonsScreen_Ref = useRef(null)
  const scheduleScreen_Ref = useRef(null)
  const changesScreen_Ref = useRef(null)

  function goToButtonsScreen(){
    if (scheduleScreen_Ref.current && changesScreen_Ref.current && buttonsScreen_Ref.current) {
      scheduleScreen_Ref.current.style.display = 'none'
      changesScreen_Ref.current.style.display = 'none'
      buttonsScreen_Ref.current.style.display = 'flex'
    }
  }
  function goToSchedule() {
    if (scheduleScreen_Ref.current && changesScreen_Ref.current && buttonsScreen_Ref.current) {
      scheduleScreen_Ref.current.style.display = 'flex'
      buttonsScreen_Ref.current.style.display = 'none'
    }
  }
  function goToChanges() {
    if (changesScreen_Ref.current && scheduleScreen_Ref.current && buttonsScreen_Ref.current) {
      changesScreen_Ref.current.style.display = 'flex'
      buttonsScreen_Ref.current.style.display = 'none'
    }
  }
  const doubleTap = useDoubleTap(() => {
    goToButtonsScreen()
  })
  
  class ExercisePart extends React.Component{
    render(){
      return (
        <div className="exerciseMain">
          <div className="exerciseNumber">
            <span>1</span>
          </div>
        <div className="exerciseName">
          <span>Название предмета</span>
          <span>Преподователь</span>
        </div>
        <div className="exerciseClass">
          <span>1-212</span>
        </div>
        <div className="exerciseTime">
          <span>11:30 12:50</span>
        </div>
      </div>
      )
    }
  }

  return (
    <div className="App">
      <div ref={buttonsScreen_Ref} id="buttonsScreen">
        <button id="groupMainButton">"Группа"</button>
        <button id="scheduleMainButton" onClick={goToSchedule}>Расписание</button>
        <button id="changesMainButton" onClick={goToChanges}>Изменения</button>
      </div>
      <div ref={scheduleScreen_Ref} id="scheduleScreen" {...doubleTap}>
        <Swiper id="SwiperMain" slidesPerView={1} direction="vertical">
          <SwiperSlide className="SwiperSlideMain">
            <Swiper id="Swiper" slidesPerView={1} direction="horizontal">
              <SwiperSlide className="SwiperSlide">
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
              </SwiperSlide>
              <SwiperSlide className="SwiperSlide">
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlideMain">
            <Swiper id="Swiper" slidesPerView={1} direction="horizontal">
              <SwiperSlide className="SwiperSlide">
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
              </SwiperSlide>
              <SwiperSlide className="SwiperSlide">
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
                <ExercisePart/>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
      <div ref={changesScreen_Ref} id="changesScreen" {...doubleTap}></div>
    </div>
  );
}

export default App;


/*
Экран расписания:
  Свайп вверх (или вниз) - смена недели "Вверх - следующая, Вниз - предыдущая"
  Свайп влево (или вправо) - открытие дня недели "Влево - следующий, Вправо - предыдущий"
*/