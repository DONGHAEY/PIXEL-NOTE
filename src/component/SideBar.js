import React from "react";

export default function Sidebar(props) {

    const workElemnts = props.tbdt.map((work, index) => (
        <div key={work.id}>
          <div
            className={`title ${
              work.id === props.currentWorkId ? "selected-note" : ""
            }`}
            onClick={() => props.changeCurrentWork(work.id)}
          >
            <h4 className="text-snippet">{work.title}</h4>
            <button
              className="delete-btn"
              onClick={() => props.deleteWork(work.id)}
            >
              <i className="gg-trash trash-icon"></i>
            </button>
          </div>
        </div>
      ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>works</h3>
        <button className="new-pixel" onClick={()=> props.newWork()}>
          +
        </button>
      </div>
      {workElemnts}
    </section>
  );
}
