import React from "react";
import "./NoteList.css";

const NoteList = ({ data, setInputData, setTextValue ,setInd }) => {

  function setNote(data,index) {
    setInputData(data.inputField)
    setTextValue(data.taxtField)
    setInd(index)

  }

  return (
    <div className="notelist">
      <table>
        <thead>
          <tr>
            <th>
              <button id="button">+ Note Book</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => {
            return (
              <tr key={index} className="tbody__tr">
                <button className="list__button" onClick={() =>{setNote(elem,index)}}>{index}. {elem.inputField}</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
