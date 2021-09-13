import React from 'react';
import { PageLayout, PageTitle, Project } from '../components';
import { SEO } from '../utils';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <PageLayout>
      <SEO title="Projects" />
      <PageTitle title="Projects" />
      <Container className="text-left">
        <section style={{ marginBottom: '2rem' }}>
          <Project
            title="CrowdHub"
            affiliation="University of Trento"
            from="Feb 2019"
            to="Oct 2019"
            tags={['Node.js', 'Express', 'Jest', 'PostgreSQL', 'Heroku', 'TravisCI', 'React', 'Figure Eight', 'Toloka']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              As part of my Ph.D. work, I designed and contributed to the implementation of CrowdHub, a platform for
              running controlled crowdsourcing experiments. To implement the initial version of the platform, I
              supervised two bachelor students that were in charge of implementing CrowdHub's backend and frontend.
            </p>
            <div>
              <a href="https://github.com/TrentoCrowdAI/crowdhub-web" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="icons github"
                  title="Github"
                  style={{ fontSize: '2rem' }}
                />
              </a>
            </div>
          </Project>

          <Project
            title="CrowdRev"
            affiliation="University of Trento"
            from="Jan 2018"
            to="Jul 2018"
            tags={['Node.js', 'Express', 'Jest', 'Flask', 'PostgreSQL', 'Heroku', 'React', 'Amazon Mechanical Turk']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              As part of my Ph.D. work, I designed and implemented CrowdRev, a platform that allows users to perform
              citation screening using crowdsourcing. During this work, I also supervised two bachelor students in
              designing and implementing the reporting module.
            </p>
            <div>
              <a href="https://github.com/TrentoCrowdAI/crowdai" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="icons github"
                  title="Github"
                  style={{ fontSize: '2rem' }}
                />
              </a>
            </div>
          </Project>

          <Project
            title="Open Data portal, Ministry of Finance"
            affiliation="Codium S.A."
            from="May 2017"
            to="Dec 2017"
            tags={['Java EE', 'Oracle', 'AngularJS']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              Led a team of 5 developers to extend the open data portal. This project allows 7+ million citizens to
              check what are the country’s expenses. Worked with several department directors to understand their
              portion of the system and database, leading to the release of 8 new datasets and visualizations.
            </p>
            <div>
              <a href="https://datos.hacienda.gov.py/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={['fas', 'globe']}
                  className="icons fa-glob"
                  title="Web"
                  style={{ fontSize: '2rem' }}
                />
              </a>
            </div>
          </Project>

          <Project
            title="AppCivist, a platform for participatory budgeting"
            affiliation="UC Berkeley (Remote)"
            from="Sep 2016"
            to="Sep 2017"
            tags={['AngularJS']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              Implemented the new version of the frontend, evolving the initial (monolithic) jQuery-based prototype to a
              component-based architecture using AngularJS.
            </p>
            <div>
              <a href="https://github.com/socialappslab/appcivist-pb-client" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="icons github"
                  title="Github"
                  style={{ fontSize: '2rem' }}
                />
              </a>
            </div>
          </Project>

          <Project
            title="Active transparency portal"
            affiliation="Codium S.A."
            from="Aug 2016"
            to="Jan 2017"
            tags={['Java EE', 'PostgreSQL', 'AngularJS']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              Led a team of 3 developers to build a system that regularly crawls the website from 300+ public
              institutions, ensuring these publish required documents, and offers a dashboard for monitoring.
            </p>
            <div>
              <a
                href="https://informacionpublica.paraguay.gov.py/portal/#!/transparencia_activa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={['fas', 'globe']}
                  className="icons fa-glob"
                  title="Web"
                  style={{ fontSize: '2rem' }}
                />
              </a>
            </div>
          </Project>

          <Project
            title="Unified portal for accessing public information"
            affiliation="Codium S.A."
            from="Aug 2015"
            to="Mar 2016"
            tags={['Java EE', 'PostgreSQL', 'AngularJS']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              Led a team of 2 developers to create a portal for the Ministry of Information Technologies that allows 7+
              million citizens to request documents from public institutions.
            </p>
            <div>
              <a href="https://informacionpublica.paraguay.gov.py/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={['fas', 'globe']}
                  className="icons fa-glob"
                  title="Web"
                  style={{ fontSize: '2rem' }}
                />
              </a>
            </div>
          </Project>

          <Project
            title="ACAD-WS"
            affiliation="Polytechnic Faculty, National University of Asuncion"
            from="Jun 2015"
            to="Jan 2016"
            tags={['Ruby on Rails', 'PostgreSQL', 'JWT', 'redis', 'Swagger']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              Implemented a RESTful service layer, ACAD-WS, on top of the central institutional software (ACAD) used at
              the University. ACAD-WS exposes some of ACAD's core functionalities to client-side applications used by
              the faculty.
            </p>
          </Project>

          <Project
            title="ACAD7"
            affiliation="Polytechnic Faculty, National University of Asuncion"
            from="Jun 2015"
            to="Jan 2016"
            tags={['Java EE', 'Vaadin', 'JBoss', 'PostgreSQL', 'AngularJS']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              I contributed to the new version of the institutional software known as ACAD7, developed and maintained by
              the Centro Nacional de Computación (National Computing Center, CNC). This software is the central
              institutional system used at the Universidad Nacional de Asunción (National University of Asunción, UNA).
              I worked at CNC offices on behalf of Facultad Politécnica (Polytechnic Faculty, FP-UNA). During this
              period, I helped FP-UNA to migrate to the new version of ACAD.
            </p>
          </Project>

          <Project
            title="e-health"
            affiliation="Polytechnic Faculty, National University of Asuncion"
            from="Mar 2013"
            to="Jun 2013"
            tags={['JSF', 'Richfaces', 'Spring', 'Liquibase', 'JBoss', 'PostgreSQL']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              I implemented several features of an integrated platform used at a hospital and contributed to the
              internal framework development.
            </p>
          </Project>

          <Project
            title="Product catalog"
            affiliation="Calvo Cendra S.A."
            from="Jan 2012"
            to="Mar 2012"
            tags={['PHP', 'Yii framework', 'Ext JS', 'JQuery', 'MySQL', 'Git', 'wkhtmltopdf', 'pdftk']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              I designed and implemented a web product catalog used internally by the company's sales team.
            </p>
          </Project>

          <Project
            title="Online tech support system"
            affiliation="Paraguay Educa"
            from="Jan 2011"
            to="Mar 2011"
            tags={['PHP', 'Yii framework', 'Ext JS', 'MySQL', 'Git', 'Apache']}
          >
            <p style={{ marginBottom: '0.5rem' }}>
              As a software developer intern, I was in charge of implementing features of the online tech support
              system.
            </p>
          </Project>
        </section>
      </Container>
    </PageLayout>
  );
};
