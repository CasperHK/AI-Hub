import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { ToolDetailPage } from './pages/ToolDetailPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tool/:id" element={<ToolDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
