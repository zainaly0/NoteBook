import React, {useState} from 'react'
import './NoteInput.css'
import NoteList from './NoteList.js'

const NoteInput = () => {
  const [inputdata, setInputData] = useState("")
  const [ind, setInd] = useState(-1)

  const [textvalue, setTextValue] = useState("")
  const [data, setData] = useState([])
  const alldata = {
    inputField: inputdata,
    taxtField: textvalue,
  }

  function addData(){
    if(inputdata.length === 0 || textvalue.length === 0){
      alert("please enter data")
    }else{
      setData([...data, alldata])
      setInputData("")
      setTextValue("")
      console.log(data)
    }
  }

const deleteNote = () => {
  const newArr = data.filter((el,i)=>{
    return i !== ind
  })
  setData(newArr)
  setInputData('')
  setTextValue('')
}


  return (
    <div className='container'>
      <section className='sectionLift'>
      <NoteList data= {data} setInputData={setInputData} setTextValue= {setTextValue} setInd={setInd}/>
      </section>

      <section className='sectionRight'>
      <input className='noteinput' type="text" placeholder='Note Name' value={inputdata} onChange={(e) => setInputData(e.target.value)}/>
      <textarea name="" id="" cols="30" rows="10" placeholder='Takes a Note' value={textvalue} onChange={(e) => setTextValue(e.target.value)}></textarea><br />
      <div className="butt">
      <button className='btn' onClick={() => addData()}>Add</button>
      <button className='btn' onClick={()=>deleteNote()}>Delete</button>
      </div>
      </section>
      
       
    </div>
  )
}

export default NoteInput
