import React from 'react';
import { projects } from '../contents'; // Import projects data

const ProjectCards = () => {
  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 mx-3">
      <h2 className="text-center text-white text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="glassmorphism bg-white rounded-lg shadow-md relative h-65">
            <h3 className="text-white text-xl font-semibold text-center pt-4">{project.name}</h3>
            <p className="text-gray-300 py-2 px-4 h-20">{project.description}</p>
            <div className="absolute bottom-4 left-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`text-sm ${tag.color} mr-2`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <a
              href={project.source_code_link}
              className="absolute top-4 right-4 text-blue-500 hover:underline"
            >
              <img src={project.image} alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;