import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { products,users } from './Db.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App  products={ products}  users={ users}/>
</BrowserRouter>
)
