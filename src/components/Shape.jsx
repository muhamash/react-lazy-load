/* eslint-disable no-unused-vars */
import React from 'react';

import { Box, Circle, Heart, Hexagon, Square, Triangle } from 'react-feather';

const Shape = () => {
    return (
        <div>
            <Square color="black" size={ 130 } />
            <Triangle color="black" size={ 130 }/>
            <Circle color="black" size={ 130 }/>
            <Hexagon color="black" size={ 130 }/>
            <Heart color="black" size={ 130 }/>
            {/* <Pentagon color="black" size={ 130 }/> */}
            <Box color="black" size={ 130 }/>
        </div>
    );
};

export default Shape;