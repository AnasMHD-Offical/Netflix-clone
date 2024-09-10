import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirebaseContext } from './FirebaseContext.jsx'
import {app} from "./Firebase.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext.Provider value={app}>
        <App />
    </FirebaseContext.Provider>
  </StrictMode>,
)
