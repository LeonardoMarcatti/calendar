import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import storage from './storage/storage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={storage}> <App /></Provider>)
