import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoute from './route/myRoute'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyRoute />
  </React.StrictMode>,
)
