import React from 'react';
import { graphql } from 'gatsby';
import { PageLayout, PageTitle, ProjectLink } from '../components';
import { SEO, Utils } from '../utils';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

const FullPaper = () => (
  <Badge key={'Full paper'} pill variant="secondary" className="px-2 mr-1">
    {'Full paper'}
  </Badge>
);

const Poster = () => (
  <Badge key={'Poster'} pill variant="secondary" className="px-2 mr-1">
    {'Poster'}
  </Badge>
);

const ShortPaper = () => (
  <Badge key={'Short paper'} pill variant="secondary" className="px-2 mr-1">
    {'Short paper'}
  </Badge>
);

const DemoPaper = () => (
  <Badge key={'Demo paper'} pill variant="secondary" className="px-2 mr-1">
    {'Demo paper'}
  </Badge>
);

const Award = ({ name }) => (
  <span className="px-2 mr-1" style={{ fontSize: '90%' }}>
    🏆 <b style={{ color: '#EEBB00', fontWeight: 'bolder' }}>{name}</b>
  </span>
);

const Oral = () => (
  <span className="px-2 mr-1" style={{ fontSize: '90%' }}>
    📢 <b style={{ color: '#EEBB00', fontWeight: 'bolder' }}>Oral</b>
  </span>
);

const Website = ({link}) => (
  <span className="px-2 mr-1" style={{ fontSize: '90%' }}>
    <a href={link} target="_blank"><b style={{ fontWeight: 'bolder' }}>🌐 Website</b></a>
  </span>
);

export default ({ data }) => {
  return (
    <PageLayout>
      <SEO title="Publications" />
      <PageTitle title="Publications" />
      <Container className="text-left">
        <section>
          <ol reversed={true}>
            <p style={{ textAlign: 'center' }}>2021</p>
            <li>
              <b>Jorge Ramírez</b>, Burcu Sayin, Marcos Baez, Fabio Casati, Luca Cernuzzi, Boualem Benatallah, and Gianluca Demartini.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2107.13519.pdf">
                On the state of reporting in crowdsourcing experiments and a checklist to aid current practices
              </a>
              . In {' '}
              <em>Proceedings of the ACM on Human-Computer Interaction (PACM HCI), presented at the 24th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2021)</em>
              . <FullPaper /> <Website link="https://trentocrowdai.github.io/crowdsourcing-checklist/"/>
            </li>
            <li>
              <b>Jorge Ramírez</b>, Marcos Baez, Fabio Casati, Luca Cernuzzi, Boualem Benatallah, Ekaterina A. Taran,
              and Veronika A. Malanina.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2011.02891.pdf">
                On the impact of predicate complexity in crowdsourced classification tasks
              </a>
              . In{' '}
              <em>Proceedings of the 14th ACM International Conference on Web Search and Data Mining (WSDM 2021)</em>
              . <FullPaper /> <Oral />
            </li>
            <li>
              Yacine Gaci, <b>Jorge Ramírez</b>, Boualem Benatallah, Fabio Casati, and Khalid Benabdeslem.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://openproceedings.org/2021/conf/edbt/p70.pdf">
                Subjectivity Aware Conversational Search Services
              </a>
              . In <em>Proceedings of 24th International Conference on Extending Database Technology (EDBT 2021)</em>
              . <FullPaper />
            </li>

            <p style={{ textAlign: 'center', marginTop: '1rem' }}>2020</p>
            <li>
              <b>Jorge Ramírez</b>, Marcos Baez, Fabio Casati, Luca Cernuzzi, and Boualem Benatallah.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://dl.acm.org/doi/abs/10.1145/3406865.3418318">
                DREC: towards a Datasheet for Reporting Experiments in Crowdsourcing
              </a>
              . In{' '}
              <em>
                CSCW'20 Companion: Conference Companion Publication of the 2020 on Computer Supported Cooperative Work
                and Social Computing (CSCW 2020)
              </em>
              . <Poster />
              <Award name="Outstanding Poster Recognition" />
            </li>
            <li>
              <b>Jorge Ramírez</b>, Marcos Baez, Fabio Casati, Luca Cernuzzi, and Boualem Benatallah.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2011.02804">
                Challenges and strategies for running controlled crowdsourcing experiments
              </a>
              . In <em>Proceedings of the XLVI Latin American Computing Conference (CLEI 2020)</em>. <FullPaper />
            </li>

            <p style={{ textAlign: 'center', marginTop: '1rem' }}>2019</p>
            <li>
              <b>Jorge Ramírez</b>, Marcos Baez, Fabio Casati, and Boualem Benatallah.{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-019-4858-z"
              >
                Crowdsourced dataset to study the generation and impact of text highlighting in classification tasks
              </a>
              . In <em>BMC Research Notes 12, 820 (2019)</em>. <ShortPaper />
            </li>
            <li>
              <b>Jorge Ramírez</b>, Simone Degiacomi, Davide Zanella, Marcos Baez, Fabio Casati, and Boualem Benatallah.{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.humancomputation.com/2019/assets/papers/125.pdf"
              >
                CrowdHub: Extending crowdsourcing platforms for the controlled evaluation of tasks designs
              </a>
              . In{' '}
              <em>
                Works-in-progress &amp; Demonstrations track of the seventh AAAI Conference on Human Computation and
                Crowdsourcing (HCOMP 2019)
              </em>
              . <DemoPaper />
            </li>
            <li>
              <b>Jorge Ramírez</b>, Marcos Baez, Fabio Casati, and Boualem Benatallah.{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ojs.aaai.org/index.php/HCOMP/article/view/5268"
              >
                Understanding the Impact of Text Highlighting in Crowdsourcing Tasks
              </a>
              . In{' '}
              <em>Proceedings of the seventh AAAI Conference on Human Computation and Crowdsourcing (HCOMP 2019)</em>
              . <FullPaper />
            </li>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>2018</p>
            <li>
              <b>Jorge Ramírez</b>, Evgeny Krivosheev, Marcos Baez, Fabio Casati, and Boualem Benatallah.{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/1805.12376">
                CrowdRev: A platform for Crowd-based Screening of Literature Reviews
              </a>
              . In <em>ACM Collective Intelligence Conference (CI 2018)</em>. <DemoPaper />
            </li>
          </ol>
        </section>
      </Container>
    </PageLayout>
  );
};
