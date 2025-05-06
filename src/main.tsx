import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/Projects';
import Ultrawide from './pages/projects/Ultrawide';
import LinuxTerminal from './pages/projects/LinuxTerminal';
import TechStack from './pages/projects/TechStack';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/ultrawide" element={<Ultrawide />} />
        <Route path="/projects/linux-terminal" element={<LinuxTerminal />} />
        <Route path="/projects/tech-stack" element={<TechStack />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
