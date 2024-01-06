import React from 'react';
import Button from './Button';

function Card(props) {
  return (
    <div className='w-1/5 flex justify-center items-center'>
      <div className='m-5 bg-gray-300 p-4 rounded-xl shadow-xl'>
        <div className='text-lg font-semibold mb-2'>{props.name}</div>
        <div className='text-sm text-gray-600 mb-4'>{props.description}</div>
        <div className='text-sm text-gray-700 mb-4'>{props.interest}</div>
        <div>
          <a href={props.link1} className='bg-gray-700 px-3 py-2 text-white rounded-full shadow-lg mt-2 inline-block'>
            {props.s1}
          </a>
        </div>
        <div>
          <a href={props.link2} className='bg-gray-700 px-3 py-2 text-white rounded-full shadow-lg mt-2 inline-block'>
            {props.s2}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
