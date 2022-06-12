import './App.css';
import WorkBar from './component/WorkBar';
import WorkSpace from './component/WorkSpace';
import boardData from './util/board';
import Sidebar from './component/SideBar';
import Split from "react-split";
import { useState, useEffect } from 'react';
import {nanoid } from 'nanoid';

function App() {
  const [clicking, setClicking] = useState(false);
  const [currentColor, setCurrentColor] = useState('white');
  // const [ mtdt, setMtdt ] = useState(() => JSON.parse(localStorage.getItem("MetaDatas")) || []);
  const [ tbdt, setTbdt ] = useState(() => JSON.parse(localStorage.getItem("TableDatas")) || []);
  const [currentWorkId, setCurrentWorkId] = useState(tbdt[0] && tbdt[0].id || "");
  const [render, setRender] = useState(false);

  function clickForDrag() {
    setClicking(isClick => !isClick);
  }

  function setColor(i, j) {
      setTbdt(prev => {
        findCurrentWork().data[i][j].color = currentColor;
        return prev;
      })
      setRender(prev => !prev);
  }

  function setDragColor(i, j) {
    if(clicking) {
      setColor(i, j);
    }
  }

  function changeTitle(title) {
    setTbdt(prev => {
      findCurrentWork().title = title;
      return prev;
    }) 
    setRender(prev => !prev);
  }

  function findCurrentWork() {
    return (
        // mtdt : mtdt.find(e => {
        //   return ( e.id === currentWorkId)
        // }) || mtdt[0],
        tbdt.find((work ) => {
          return (work.id === currentWorkId)
        }) || tbdt[0]
      )
  }

  function changeCurrentWork(uuid) {
    setCurrentWorkId(uuid);
    // setRender(prev => !prev);s
  }
  
  function newWork() {
    let dt = boardData();
    let id = nanoid();
    setTbdt(prev => [{
      id,
      title:'input title',
      data : dt
    }, ...prev]);
    changeCurrentWork(id);
    setRender(prev => !prev);
  }
  
  function deleteWork(id) {
    // event.stopPropagation();
    setTbdt(oldTbdt => oldTbdt.filter((dt) => dt.id !== id));
    setCurrentWorkId(tbdt && tbdt[0] && tbdt[0].id || "");
    setRender(prev => !prev);
  }

  useEffect(() => {
    localStorage.setItem("TableDatas", JSON.stringify(tbdt));
  }, [render]);

  return (
    <main>
      {tbdt.length > 0 ? (<Split sizes={[15, 85]} direction="horizontal" className="split">
          <Sidebar tbdt={tbdt} 
                  currentWorkId={currentWorkId}
                  changeCurrentWork={changeCurrentWork}
                  newWork={newWork}
                  deleteWork={deleteWork}
          />
          <div className='App'>
            <WorkBar 
                    currentColor={currentColor}
                    setCurrentColor={setCurrentColor}
            >
            </WorkBar>
            <WorkSpace  
                    setDragColor={setDragColor} 
                    currentColor={currentColor} 
                    tbdt={findCurrentWork()} 
                    setColor={setColor} 
                    clickForDrag={clickForDrag}
                    changeTitle={changeTitle}
            >
            </WorkSpace>
          </div>
        </Split>) : 
        <div className="App">
            <h1>No Data..</h1>
            <p>start to click below button</p>
            <button onClick={() => {
              newWork()
            }}>new work</button>
        </div>
        }
    </main>
  );
}

export default App;