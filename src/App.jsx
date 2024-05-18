/* eslint-disable no-unused-vars */
import { Suspense, useState } from 'react';
import './App.css';
import data from './data/Data.js';
import LazyImport from './utils/LazyImport';


function App ()
{
  const [ select, setSelect ] = useState( null );

  const loadComponent = async ( file ) =>
  {
    const ComponentFile = await LazyImport( file );
    return <ComponentFile />
  }

  const handleSelect = async ( file ) =>
  {
    console.log( "clicked on", file );
    // setSelect( file );
    // const ComponentFile = await LazyImport( file );
    // const component = <ComponentFile/>
    const component = await loadComponent( file );
    setSelect( component );
  }

  return (
    <div>
      <div style={ {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    }}>
        <h1>React Lazy Load</h1>
        <div style={ {
          display: 'flex',
          gap: '20px',
          justifyContent:'center'
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
          <Suspense fallback={
            <h1>.....loading!!</h1>
          }>
            {
            select
          }
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App
