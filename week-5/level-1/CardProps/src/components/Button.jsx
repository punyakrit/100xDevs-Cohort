import React from 'react'

function Button(props) {
  return (
    <div>
      <a href={props.link} className='bg-slate-500 px-3 py-2 text-white rounded-full shadow-lg mt-6'>{props.name}</a>
    </div>
  )
}

export default Button
