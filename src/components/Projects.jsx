/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'react-bootstrap'
import { 
  FaCode, 
  FaExternalLinkAlt, 
  FaFolder,
  FaGithub,
  FaLink,
  FaBullseye,
  FaLightbulb,
  FaCheckCircle
} from 'react-icons/fa'
import { 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiTensorflow,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiDocker
} from 'react-icons/si'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Railway Safety Enhancement System",
      overview: "An AI-powered system for enhancing railway safety and protecting wildlife using computer vision and cloud technologies.",
      keyPoints: [
        "Real-time wildlife detection using YOLOv8",
        "Weather forecasting integration",
        "Voice command alerts for train pilots",
        "Cloud-based data processing"
      ],
      challenges: [
        "Complex integration of multiple data sources",
        "Real-time processing requirements",
        "Environmental factor considerations"
      ],
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Docker", icon: <SiDocker /> }
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/yourusername/railway-safety",
          icon: <FaGithub />,
          label: "Source Code"
        },
        {
          type: "external",
          url: "https://railway-safety-demo.com",
          icon: <FaLink />,
          label: "Live Demo"
        }
      ]
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      overview: "A comprehensive Learning Management System using Django framework for educational institutions.",
      keyPoints: [
        "User authentication and role management",
        "Course content management system",
        "Student progress tracking",
        "Assessment and grading tools"
      ],
      challenges: [
        "Complex user role management",
        "Real-time progress tracking",
        "Secure content delivery"
      ],
      technologies: [
        { name: "Python", icon: <SiPython /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Django", icon: <FaCode /> }
      ],
      links: [
        {
          type: "github",
          url: "https://github.com/yourusername/lms-project",
          icon: <FaGithub />,
          label: "Source Code"
        }
      ]
    },
    {
      id: 3,
      title: "Poster & Logo Creation",
      overview: "Creating stunning posters and logos for various clients using professional design tools.",
      keyPoints: [
        "Brand identity development",
        "Marketing material design",
        "Visual communication",
        "Client collaboration"
      ],
      challenges: [
        "Meeting diverse client requirements",
        "Brand consistency across platforms",
        "Deadline management"
      ],
      technologies: [
        { name: "Photoshop", icon: <FaCode /> },
        { name: "Illustrator", icon: <FaCode /> },
        { name: "Figma", icon: <FaCode /> }
      ],
      links: [
        {
          type: "external",
          url: "https://www.behance.net/yourprofile",
          icon: <FaExternalLinkAlt />,
          label: "View Portfolio"
        }
      ]
    },
    {
      id: 4,
      title: "Dynamic Portfolio UI",
      overview: "An intuitive user interface design for a dynamic portfolio platform using Figma.",
      keyPoints: [
        "Responsive design system",
        "Interactive prototypes",
        "User-centered approach",
        "Modern aesthetics"
      ],
      challenges: [
        "Complex state management",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      technologies: [
        { name: "Figma", icon: <FaCode /> }
      ],
      links: [
        {
          type: "external",
          url: "https://www.figma.com/file/yourfigmalink",
          icon: <FaExternalLinkAlt />,
          label: "View Design"
        }
      ]
    }
  ];
  
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">
          <FaCode className="title-icon" />
          Featured Projects
        </h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="header-content">
                  <FaFolder className="folder-icon" />
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-links">
                  {project.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-content">
                <div className="content-section">
                  <h4 className="section-title">
                    <FaBullseye className="section-icon" />
                    Overview
                  </h4>
                  <p className="project-overview">{project.overview}</p>
                </div>

                <div className="content-section">
                  <h4 className="section-title">
                    <FaLightbulb className="section-icon" />
                    Key Features
                  </h4>
                  <ul className="feature-list">
                    {project.keyPoints.map((point, index) => (
                      <li key={index}>
                        <FaCheckCircle className="list-icon" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="content-section">
                  <h4 className="section-title">
                    <FaCode className="section-icon" />
                    Technical Challenges
                  </h4>
                  <ul className="challenge-list">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>
                        <span className="bullet">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4 className="section-title">Technologies Used</h4>
                  <div className="tech-icons">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="tech-item" title={tech.name}>
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects