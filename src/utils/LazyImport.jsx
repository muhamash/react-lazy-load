/* eslint-disable no-undef */
import React from 'react';

export default function LazyImport(file) {
    return React.lazy( () => import( `../components/${file}` ) );
}
