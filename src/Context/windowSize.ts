import React from 'react'

export const WindowSize = React.createContext(window.innerWidth < 768 && window.innerWidth < window.innerHeight);
