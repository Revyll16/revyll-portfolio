import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Mes Projets</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/projects/ultrawide" className="text-pink-400 hover:underline">
            Triple Ultra-Wide Monitors
          </Link>
        </li>
        <li>
          <Link to="/projects/linux-terminal" className="text-pink-400 hover:underline">
            Linux OS & Glowing Terminal
          </Link>
        </li>
        <li>
          <Link to="/projects/tech-stack" className="text-pink-400 hover:underline">
            Tech Stack
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
