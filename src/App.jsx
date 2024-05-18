/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Shape from './components/Shape';


function App ()
{
  const [ select, setSelect ] = useState( null );

  const handleSelect = ( type ) =>
  {
    console.log( "clicked on", type );
    setSelect( type );
  }
  return (
    <div>
      <div>
        <h1>React Lazy Load</h1>
        <div style={ {
          display: 'flex',
          gap: '10px'
        }}>
          <button onClick={ () => handleSelect( 'shape' ) }>
            React Feather Shape
          </button>
          <button onClick={ () => handleSelect( 'color' ) } >
            React Feather Color
          </button>
          <button onClick={ () => handleSelect( 'size' ) }>
            React Feather Size
          </button>
        </div>
        <div>
          {
            select === "shape" && <Shape/>
          }
        </div>
      </div>
    </div>
  );
}

export default App
