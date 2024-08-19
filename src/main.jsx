import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Solana from "./wallets/Solana.jsx"
import Ethereum from "./wallets/Ethereum.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Solana />
    <Ethereum />
  </StrictMode>,
)
