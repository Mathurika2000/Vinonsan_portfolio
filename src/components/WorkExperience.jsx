import React from 'react'
import { Container } from 'react-bootstrap'
import {
  FaBriefcase,
  FaUniversity,
  FaChalkboardTeacher,
  FaPalette,
  FaCode,
  FaCalendarAlt,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaTools,
  FaGithub,
  FaDatabase,
  FaPhp,
  FaGoogle
} from 'react-icons/fa'
import {
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiOpenai,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiJupyter
} from 'react-icons/si'
import './WorkExperience.css'

function WorkExperience() {
  const tools = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", icon: <FaReact />, proficiency: 90 },
        { name: "JavaScript", icon: <FaJs />, proficiency: 85 },
        { name: "HTML/CSS", icon: <FaCode />, proficiency: 90 },
        { name: "Redux", icon: <FaCode />, proficiency: 85 }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, proficiency: 88 },
        { name: "Express.js", icon: <SiExpress />, proficiency: 85 },
        { name: "PHP", icon: <FaPhp />, proficiency: 75 },

        { name: "RESTful APIs", icon: <FaCode />, proficiency: 90 }
      ]
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql />, proficiency: 85 },
        { name: "MongoDB", icon: <SiMongodb />, proficiency: 80 },
        { name: "Git/GitHub", icon: <FaGithub />, proficiency: 90 },
        { name: "MySQL", icon: <FaDatabase />, proficiency: 80 }

      ]
    },
    {
      category: "AI & ML Tools",
      items: [
        { name: "TensorFlow", icon: <SiTensorflow />, proficiency: 80 },
        { name: "YOLOv8", icon: <FaTools />, proficiency: 85 },
        { name: "OpenCV", icon: <FaCode />, proficiency: 80 },
        { name: "Pandas", icon: <FaPython />, proficiency: 85 }
      ]
    }
  ]

  const experiences = [
    {
      id: 1,
      icon: <FaUniversity />,
      title: "Research Project",
      company: "Rajarata University of Sri Lanka",
      duration: "December 2023 – February 2025",
      description: "This research develops a system to enhance railway safety and protect wildlife, specifically elephants and bulls, from train-related accidents. It utilizes YOLOv8 for real-time animal detection via cameras positioned along the tracks.",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Python", icon: <FaPython /> },
        { name: "YOLOv8", icon: <FaTools /> },
        { name: "Google Colab", icon: <FaGoogle />, proficiency: 70 }

      ]
    },
    {
      id: 2,
      icon: <FaCode />,
      title: "Frontend Developer (React.js)",
      company: "Self-Employed",
      duration: "2024 – Present",
      description: "Developing dynamic and responsive web applications with React.js. My focus is on delivering seamless, user-friendly experiences while ensuring scalability and performance.",
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs />, proficiency: 85 },
        { name: "HTML", icon: <FaHtml5 />, proficiency: 90 }
        , { name: "CSS", icon: <FaCss3Alt />, proficiency: 85 }
        , { name: "Bootstrap", icon: <FaBootstrap />, proficiency: 80 }
        ,
        { name: "GitHub", icon: <FaGithub /> },
      ]
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Freelance Graphic Designer",
      company: "Self-Employed",
      duration: "2024 – Present",
      description: "Creating visually striking and professional designs for diverse clients, with an emphasis on brand identity, digital media, and marketing materials.",
      technologies: [
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Illustrator", icon: <SiAdobeillustrator /> },
        { name: "Figma", icon: <SiFigma /> }
      ]
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher />,
      title: "Teaching",
      company: "Grades 6 to 11",
      duration: "August 2024 – Present",
      description: "Empowering students by delivering engaging and interactive lessons in computer science and mathematics.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "Jupyter", icon: <SiJupyter /> },
        { name: "OpenAI", icon: <SiOpenai /> }
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">
          <FaBriefcase className="title-icon" />
          Work Experience & Skills
        </h2>

        {/* Tools Section */}
        <div className="tools-section">
          <h3 className="tools-title">Technical Toolset</h3>
          <div className="tools-grid">
            {tools.map((category, idx) => (
              <div key={idx} className="tool-category">
                <h4 className="category-title">{category.category}</h4>
                <div className="tools-list">
                  {category.items.map((tool, index) => (
                    <div key={index} className="tool-item">
                      <div className="tool-header">
                        <span className="tool-icon">{tool.icon}</span>
                        <span className="tool-name">{tool.name}</span>
                      </div>
                      <div className="tool-progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${tool.proficiency}%` }}
                        >
                          <span className="progress-label">{tool.proficiency}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <div className="duration">
                      <FaCalendarAlt className="calendar-icon" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>

                {/* Technologies Used Section */}
                <div className="technologies-used">
                  <h4 className="tech-title">Technologies Used</h4>
                  <div className="tech-icons">
                    {exp.technologies.map((tech, idx) => (
                      <div key={idx} className="tech-icon-wrapper" title={tech.name}>
                        {tech.icon}
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="animated-line">
                  <div className="line-dot"></div>
                  <div className="line-dot"></div>
                  <div className="line-dot"></div>
                </div>
              </div>
              {index !== experiences.length - 1 && (
                <div className="connector">
                  <FaArrowRight className="connector-icon" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default WorkExperience