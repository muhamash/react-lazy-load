/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import data from './data/Data.js';


function App ()
{
  const [ select, setSelect ] = useState( null );

  const handleSelect = ( file ) =>
  {
    console.log( "clicked on", file );
    setSelect( file );
  }
  return (
    <div>
      <div>
        <h1>React Lazy Load</h1>
        <div style={ {
          display: 'flex',
          gap: '10px'
        } }>
          {
            data.map( ( datum ) => (
              <button
                onClick={()=> handleSelect(datum.file)}
                key={datum.name}
              >
                {datum.name}
              </button>
            ))
          }
          {/* <button onClick={ () => handleSelect( 'shape' ) }>
            React Feather Shape
          </button>
          <button onClick={ () => handleSelect( 'color' ) } >
            React Feather Color
          </button>
          <button onClick={ () => handleSelect( 'size' ) }>
            React Feather Size
          </button> */}
        </div>
        <div>
          {
            select
          }
        </div>
      </div>
    </div>
  );
}

export default App
