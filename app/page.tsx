import Image from "next/image";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    title: "Distributed Systems",
    description:
      "Kafka streaming, microservices, high-throughput APIs, and event-driven architecture.",
  },
  {
    title: "Security Engineering",
    description:
      "XDR, SIEM, threat detection, policy engines, and audit systems.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "AWS, Kubernetes, Terraform, observability, and production operations.",
  },
  {
    title: "AI Engineering",
    description:
      "LLM applications, AI agents, security automation, and workflow intelligence.",
  },
];

const skills = [
  "Go",
  "Python",
  "Java",
  "C++",
  "C#",
  "TypeScript",
  "React",
  "Next.js",
  "Kafka",
  "Redis",
  "ClickHouse",
  "PostgreSQL",
  "MongoDB",
  "OpenSearch",
  "Kubernetes",
  "AWS",
  "Azure",
  "Terraform",
  "Docker",
  "OpenTelemetry",
  "Prometheus",
  "LLM APIs",
  "AI Agents",
  "Security Engineering",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "James Luke",
  jobTitle: "Senior Software Engineer",
  email: "mailto:james.dev.luke2e@gmail.com",
  url: "/",
  sameAs: [
    "https://github.com/JASchilz",
    "https://linkedin.com/in/james-luke-2e34253183",
  ],
  knowsAbout: [
    "Distributed systems",
    "Security engineering",
    "Cloud infrastructure",
    "AI engineering",
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="James Luke, home">
            James Luke<span>.</span>
          </a>
          <div className="menu">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="status">
              <span aria-hidden="true" />
              Senior Software Engineer
            </p>

            <h1 id="hero-title">
              Building
              <span>
                Distributed Systems,
                <br />
                Security Platforms,
                <br />
                AI Infrastructure
              </span>
            </h1>

            <p className="hero-intro">
              I design and build scalable backend platforms, cloud-native
              systems, and cybersecurity solutions for enterprise environments.
            </p>

            <div className="actions" aria-label="Professional links">
              <a
                href="https://github.com/JASchilz"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/james-luke-2e34253183"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>
            </div>

            <dl className="metrics" aria-label="Career highlights">
              <div>
                <dt>10+</dt>
                <dd>Years experience</dd>
              </div>
              <div>
                <dt>3</dt>
                <dd>Security platforms</dd>
              </div>
              <div>
                <dt>25%</dt>
                <dd>Latency reduction</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-glow" />
            <Image
              src="/assets/hero-network.svg"
              width={700}
              height={500}
              priority
              alt=""
              className="hero-image"
            />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="section-title">
            <p className="eyebrow">About</p>
            <h2 id="about-title">Production-minded engineering</h2>
            <p>Senior Software Engineer building systems that hold up at scale.</p>
          </div>

          <div className="glass about-card">
            <div className="about-copy">
              <p>
                I am a Senior Software Engineer with 10+ years of experience
                building distributed systems, cloud platforms, and security
                products.
              </p>
              <p>
                My expertise includes backend architecture, event-driven
                systems, observability platforms, enterprise security, and
                AI-assisted engineering workflows.
              </p>
            </div>

            <div className="company-group">
              <p>Engineering experience includes</p>
              <div className="companies" aria-label="Companies">
                <div>
                  <Image
                    src="/assets/microsoft.svg"
                    width={300}
                    height={120}
                    alt="Microsoft"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/edgedelta.svg"
                    width={350}
                    height={120}
                    alt="Edge Delta"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/fortify.svg"
                    width={350}
                    height={120}
                    alt="Fortify 24x7"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="focus-title">
          <div className="section-title">
            <p className="eyebrow">Expertise</p>
            <h2 id="focus-title">Engineering focus</h2>
          </div>

          <div className="cards">
            {focusAreas.map((area, index) => (
              <article className="glass focus-card" key={area.title}>
                <span className="focus-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="section"
          aria-labelledby="projects-title"
        >
          <div className="section-title">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Featured projects</h2>
            <p>Architecture and engineering case studies.</p>
          </div>

          <div className="project-list">
            <article className="project-card">
              <div className="project-content">
                <p className="number" aria-hidden="true">
                  01
                </p>
                <h3>Security Telemetry Platform</h3>
                <p>
                  Cloud-native observability platform processing logs, metrics,
                  traces, and security events.
                </p>
                <div className="tags" aria-label="Technologies used">
                  {['Go', 'Kafka', 'Kubernetes', 'ClickHouse', 'AWS'].map(
                    (tag) => (
                      <span key={tag}>{tag}</span>
                    ),
                  )}
                </div>
              </div>
              <div className="project-image">
                <Image
                  src="/assets/telemetry-pipeline.svg"
                  width={700}
                  height={450}
                  alt="Telemetry pipeline from cloud sources through Kafka and Go to ClickHouse and OpenSearch"
                />
              </div>
            </article>

            <article className="project-card">
              <div className="project-content">
                <p className="number" aria-hidden="true">
                  02
                </p>
                <h3>AI Security Investigation Assistant</h3>
                <p>
                  AI-powered workflow that summarizes alerts, correlates
                  security signals, and helps analysts investigate incidents.
                </p>
                <div className="tags" aria-label="Technologies used">
                  {['Python', 'LLM APIs', 'AI Agents', 'Security AI'].map(
                    (tag) => (
                      <span key={tag}>{tag}</span>
                    ),
                  )}
                </div>
              </div>
              <div className="project-image">
                <Image
                  src="/assets/ai-security.svg"
                  width={700}
                  height={450}
                  alt="AI security investigation workflow architecture"
                />
              </div>
            </article>

            <article className="project-card">
              <div className="project-content">
                <p className="number" aria-hidden="true">
                  03
                </p>
                <h3>Multi-Tenant Security SaaS Platform</h3>
                <p>
                  Enterprise security platform supporting authentication,
                  authorization, audit logging, and tenant isolation.
                </p>
                <div className="tags" aria-label="Technologies used">
                  {['Java', 'Spring Boot', 'PostgreSQL', 'RBAC', 'OAuth2'].map(
                    (tag) => (
                      <span key={tag}>{tag}</span>
                    ),
                  )}
                </div>
              </div>
              <ol className="architecture" aria-label="Platform architecture">
                <li>Users</li>
                <li>API Gateway</li>
                <li>Authorization Engine</li>
                <li>Microservices</li>
                <li>Database</li>
              </ol>
            </article>
          </div>
        </section>

        <section
          id="experience"
          className="section"
          aria-labelledby="experience-title"
        >
          <div className="section-title">
            <p className="eyebrow">Career</p>
            <h2 id="experience-title">Professional experience</h2>
          </div>

          <div className="experience-list">
            <article className="experience-card">
              <div className="company-logo-wrap">
                <Image
                  src="/assets/edgedelta.svg"
                  width={350}
                  height={120}
                  alt="Edge Delta"
                  className="company-logo"
                />
              </div>
              <div>
                <p className="experience-date">2021 – Present · Seattle, WA</p>
                <h3>Senior Software Engineer</h3>
                <h4>Edge Delta</h4>
                <p>
                  Built security observability platforms, telemetry pipelines,
                  and cloud-native backend services.
                </p>
                <ul>
                  <li>Designed Go and Kafka event-processing systems.</li>
                  <li>Built alert routing and security policy engines.</li>
                  <li>Improved ingestion-to-alert latency by 25%.</li>
                  <li>Developed AI-assisted security workflows.</li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="company-logo-wrap">
                <Image
                  src="/assets/fortify.svg"
                  width={350}
                  height={120}
                  alt="Fortify 24x7"
                  className="company-logo"
                />
              </div>
              <div>
                <p className="experience-date">2017 – 2020</p>
                <h3>Software Development Engineer</h3>
                <h4>Fortify 24x7</h4>
                <p>
                  Built endpoint security and XDR platforms for threat detection
                  and SOC operations.
                </p>
                <ul>
                  <li>Developed threat-event processing pipelines.</li>
                  <li>Implemented RBAC and secure APIs.</li>
                  <li>Created security investigation dashboards.</li>
                </ul>
              </div>
            </article>

            <article className="experience-card">
              <div className="company-logo-wrap">
                <Image
                  src="/assets/microsoft.svg"
                  width={300}
                  height={120}
                  alt="Microsoft"
                  className="company-logo"
                />
              </div>
              <div>
                <p className="experience-date">2015 – 2017 · Redmond, WA</p>
                <h3>Software Engineer</h3>
                <h4>Microsoft</h4>
                <p>
                  Worked on Office client performance, telemetry analysis, and
                  experimentation infrastructure.
                </p>
                <ul>
                  <li>Optimized C++ client APIs by reducing CPU usage.</li>
                  <li>Built Azure telemetry workflows.</li>
                  <li>Improved client reliability analysis.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-title">
            <p className="eyebrow">Toolbox</p>
            <h2 id="skills-title">Technical skills</h2>
          </div>
          <ul className="skills-cloud" aria-label="Technical skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title">
          <div className="contact-box">
            <p className="eyebrow">Start a conversation</p>
            <h2 id="contact-title">Let&apos;s connect</h2>
            <p>
              Interested in distributed systems, security engineering, or AI
              infrastructure?
            </p>
            <div className="contact-buttons">
              <a
                href="mailto:james.dev.luke2e@gmail.com"
                className="button primary"
              >
                Send an email
              </a>
              <a
                href="https://github.com/JASchilz"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/james-luke-2e34253183"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 James Luke · Senior Software Engineer</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
