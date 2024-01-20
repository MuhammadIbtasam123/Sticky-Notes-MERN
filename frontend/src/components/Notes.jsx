import React from 'react'
import './Notes.css'

const Notes = ({notes}) => {
  return (
    <div className='notes'>
        {
            notes.map((note,index)=>(
                <div key={index} className='notes-list'>
                    <h4 className='note__title'> {note.title} </h4>
                    <h5 className='note__description'> {note.description} </h5>
                </div>
            ))
        }
    </div>
  )
}

export default Notes