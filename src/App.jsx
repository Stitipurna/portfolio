import profileImg from './assets/profile.jpg';

function App() {
  const skills = [
    "ABAP",
    "OO ABAP",
    "ODATA V2/V4",
    "SAP UI5",
    "FIORI",
    "CDS",
    "AMDP",
    "RAP",
    "ENHANCEMENTS",
    "SMARTFORMS",
    "TDD",
    "BOPF"
  ];

  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <div style={navLinksStyle}>
          <a style={navLinkStyle} href="#about">About</a>
          <a style={navLinkStyle} href="#experience">Experience</a>
          <a style={navLinkStyle} href="#projects">Projects</a>
          <a style={navLinkStyle} href="#contact">Contact</a>
        </div>
      </nav>

      <section style={heroCardStyle}>
        <img
          src={profileImg}
          alt="Stitipurna Parija"
          style={profileImageStyle}
        />

        <div style={heroContentStyle}>
          <div style={tagStyle}>SAP Full Stack Product Developer</div>

          <h1 style={heroTitleStyle}>
            Stitipurna Parija
          </h1>

          <p style={heroTextStyle}>
            ABAP on HANA | SAP UI5 | OData | RAP
          </p>

          <p style={heroDescStyle}>
            I build end-to-end SAP applications, from backend ABAP logic and
            OData services to modern SAP UI5 dashboards used by business teams.
          </p>

          <div style={buttonGroupStyle}>
            <a
              style={primaryButtonStyle}
              href="/Stitipurna_Parija_2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a style={primaryButtonStyle} href="#projects">
              View Projects
            </a>

            <a style={primaryButtonStyle} href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>About Me</h2>

        <p style={paragraphStyle}>
          SAP Full Stack Product Developer with experience in ABAP, OO ABAP,
          CDS views, RAP, OData, and SAP UI5. Skilled in building end-to-end
          applications, from backend business logic to intuitive frontend
          dashboards, with a focus on performance, scalability, and user
          experience.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Skills</h2>

        <div style={skillsGridStyle}>
          {skills.map((skill) => (
            <span key={skill} style={skillStyle}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Experience</h2>

        <div style={experienceGridStyle}>
          <div style={experienceCardStyle}>
            <h3 style={cardTitleStyle}>
              IBM India Pvt Ltd. (October, 2024 - Present)
            </h3>

            <p style={roleStyle}>
              ABAP on HANA / SAP UI5 Developer
            </p>

            <p style={cardTextStyle}>
                Working on SAP UI5, ABAP on HANA, OData services, reports, RFCs,
                SmartForms, AIF interfaces, and backend enhancements for ECC-based
                enterprise applications.
            </p>

            <h4 style={cardSubTitleStyle}>
              Client Engagement - Mercedes-Benz Research & Development India
            </h4>
          </div>

          <div style={experienceCardStyle}>
            <h3 style={cardTitleStyle}>
              Tata Consultancy Services (May, 2021 - October, 2024)
            </h3>

            <p style={roleStyle}>
              ABAP on HANA / SAP UI5 Developer
            </p>

            <p style={cardTextStyle}>
              Worked on OOABAP, SAP UI5, CDS views, RAP, enhancements,
              BOPF, TDD, FM, and backend development across SAP GDPR, DVS, and PEO
              projects.
            </p>

            <h4 style={cardSubTitleStyle}>
              Client Engagement - SAP Labs
            </h4>
          </div>
        </div>
      </section>

      <section id="projects" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Projects</h2>

        <div style={cardsGridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>SPM ASIA & CHINA</h3>

            <p style={cardTextStyle}>
                Working as an SAP Full Stack Developer on SAP UI5, ABAP on HANA,
                OData, and backend development. Developing responsive SAP UI5
                applications integrated with ECC systems through OData services.
                Working on custom reports, RFC developments, SmartForms, AIF
                interfaces, enhancements, CDS views, and backend business logic.
                Involved in end-to-end application development, debugging,
                performance optimization, and integration across frontend and
                backend SAP components.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>SAP PEO Enhancements</h3>

            <p style={cardTextStyle}>
              Implemented enhancements using OO ABAP, CDS views, and BOPF in
              SAP PEO environment. Developed and optimized CDS views for
              efficient data modeling and retrieval. Worked on SAP UI5 changes
              and backend logic integration for improved functionality.
              Designed value help views and performed enhancements to existing
              standard applications. Wrote ABAP Unit test cases following
              Test-Driven Development practices.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>MBPTS Digital Cockpit</h3>

            <p style={cardTextStyle}>
              Developed a real-time SAP UI5 dashboard for warehouse operations
              using OData services. Designed KPI tiles and interactive
              visualizations to monitor Pick, Loading, and PGI statuses.
              Implemented plant-wise data representation with dynamic charts and
              performance metrics. Integrated backend data from ECC and
              optimized data handling for faster UI response. Enabled
              auto-refresh and timestamp-based updates for real-time monitoring.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>RAP Applications</h3>

            <p style={cardTextStyle}>
              Built end-to-end applications using RESTful ABAP Programming
              Model. Created CDS views, behavior definitions, and service
              bindings for OData V4 exposure. Implemented actions,
              determinations, and validations using EML. Developed
              transactional applications with CRUD operations and draft
              handling. Tested and consumed services using OData V4 APIs.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={contactStyle}>
        <h2 style={sectionTitleStyle}>Let’s Connect</h2>

        <p style={paragraphStyle}>
          Open to SAP full-stack opportunities and collaborations. Feel free to
          reach out to discuss projects, ideas, or roles.
        </p>

        <div style={buttonGroupStyle}>
          <a
            style={secondaryButtonStyle}
            href="mailto:stitipurna.work@gmail.com"
          >
            Email Me
          </a>

          <a
            style={primaryButtonStyle}
            href="https://www.linkedin.com/in/stitipurna-parija-b7b09b183"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

const pageStyle = {
  background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
  color: "#0f172a",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  padding: "28px"
};

const navStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingTop: "5px"
};

const navLinksStyle = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  justifyContent: "center"
};

const navLinkStyle = {
  color: "#334155",
  fontWeight: "700",
  textDecoration: "none"
};

const heroCardStyle = {
  maxWidth: "1120px",
  margin: "90px auto 70px",
  padding: "48px",
  backgroundColor: "#ffffff",
  borderRadius: "32px",
  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.10)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "48px",
  flexWrap: "wrap",
  overflow: "hidden"
};

const profileImageStyle = {
  width: "clamp(140px, 40vw, 180px)",
  height: "clamp(140px, 40vw, 180px)",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center 18%",
  border: "6px solid #ffffff",
  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18)",
  flexShrink: 0
};

const heroContentStyle = {
  flex: 1,
  minWidth: "280px",
  textAlign: "center"
};

const tagStyle = {
  display: "inline-block",
  backgroundColor: "#e0f2fe",
  color: "#0284c7",
  padding: "10px 22px",
  borderRadius: "999px",
  fontWeight: "700",
  marginBottom: "16px"
};

const heroTitleStyle = {
  fontSize: "clamp(34px, 8vw, 48px)",
  margin: "8px 0 10px",
  color: "#0f172a",
  wordBreak: "break-word"
};

const heroTextStyle = {
  color: "#334155",
  fontSize: "clamp(17px, 4vw, 22px)",
  margin: "0 0 14px"
};

const heroDescStyle = {
  color: "#475569",
  maxWidth: "650px",
  margin: "0 auto",
  lineHeight: "1.7",
  fontSize: "18px"
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginTop: "26px",
  flexWrap: "wrap"
};

const primaryButtonStyle = {
  backgroundColor: "#0ea5e9",
  color: "#ffffff",
  padding: "13px 24px",
  borderRadius: "12px",
  fontWeight: "700",
  textDecoration: "none"
};

const secondaryButtonStyle = {
  border: "1px solid #cbd5e1",
  color: "#0f172a",
  backgroundColor: "#ffffff",
  padding: "13px 24px",
  borderRadius: "12px",
  fontWeight: "700",
  textDecoration: "none"
};

const sectionStyle = {
  maxWidth: "1050px",
  margin: "0 auto",
  padding: "45px 20px"
};

const sectionTitleStyle = {
  textAlign: "center",
  color: "#0f172a",
  fontSize: "34px",
  marginBottom: "20px"
};

const paragraphStyle = {
  textAlign: "center",
  color: "#475569",
  fontSize: "18px",
  lineHeight: "1.7"
};

const skillsGridStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap"
};

const skillStyle = {
  backgroundColor: "#ffffff",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  padding: "10px 18px",
  borderRadius: "999px",
  fontWeight: "700"
};

const experienceGridStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "24px"
};

const cardsGridStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "24px"
};

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "28px",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
  border: "1px solid #e2e8f0",
  width: "100%",
  textAlign: "left"
};

const experienceCardStyle = {
  backgroundColor: "#ffffff",
  padding: "28px",
  borderRadius: "20px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
  border: "1px solid #e2e8f0",
  width: "100%",
  textAlign: "center"
};

const cardTitleStyle = {
  color: "#0f172a",
  marginTop: 0,
  marginBottom: "8px"
};

const cardSubTitleStyle = {
  color: "#0f172a",
  marginTop: "18px",
  marginBottom: 0
};

const cardTextStyle = {
  color: "#475569",
  lineHeight: "1.7",
  fontSize: "17px"
};

const roleStyle = {
  color: "#0284c7",
  fontWeight: "700",
  margin: "6px 0"
};

const contactStyle = {
  maxWidth: "850px",
  margin: "45px auto",
  padding: "45px 30px",
  backgroundColor: "#ffffff",
  borderRadius: "28px",
  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
  border: "1px solid #e2e8f0"
};

export default App;