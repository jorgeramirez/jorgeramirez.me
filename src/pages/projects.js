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
              I worked as the team leader of the software consultancy project to extend the datasets offered by the
              Ministerio de Hacienda (Ministry of Finance) at its open data portal. We published eight new datasets at
              the open data portal. And to make this work possible, we worked alongside several information stakeholders
              from different departments of the Ministry of Finance. We developed this project as part of USAID-CEAMSO's
              Democracy and Governance program.
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
              I was a senior frontend engineer to the Open Source Participatory Budgeting platform known as AppCivist.
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
              I worked as the team leader of the software consultancy project for the Secretaría Nacional de
              Anticorrupción (National Anticorruption Secretariat, SENAC). To deliver the project, we worked alongside
              the team from SENAC and the technical staff from the Ministerio de Tecnologías de la Información y
              Comunicación (Ministry of Information Technologies, MITIC). Active transparency is to publish information
              without anyone requesting it, making the government proactively transparent. The portal includes data that
              public institutions are required to post periodically based on what is established by the following laws:
              * Law 5282: Free Citizen Access to Information and Government Transparency. * Law 5189: That establishes
              the obligation of provision and information in the use of public resources on remuneration assigned to
              Paraguayan public servant. We developed the project as part of USAID-CEAMSO's Democracy and Governance
              program.
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
              I worked as a senior software engineer of the software consultancy project for the Ministerio de
              Tecnologías de la Información y Comunicación (Ministry of Information Technologies, MITIC). My role was to
              coordinate the team of developers and work closely with the project leader. The goal was to work together
              with the technical staff from MITIC to design, develop, and deploy a unified portal for accessing public
              information (to comply with the law number 5282/2014). The portal allows citizens to request, search, and
              read the information that is (or should be) publicly made available by national institutions. We developed
              the project as part of USAID-CEAMSO's Democracy and Governance program.
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
              I architected and implemented ACAD-WS, a RESTful service layer on top of the software known as ACAD, which
              is the central institutional software used at the Universidad Nacional de Asunción (National University of
              Asuncion, UNA). This service exposes some of the core functionalities of the system to client-side
              applications used by the Facultad Politécnica (Polytechnic Faculty, FP-UNA).
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
