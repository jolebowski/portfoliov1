import React from 'react'
import ImageLoader from './ImageLoader'

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <ImageLoader
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.demoLink}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          aria-label={`Voir la démo de ${project.title}`}
        >
          Voir la démo
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
