import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import ThemeContext from '../utils/theme';
import { PageLayout } from '../components';
import { SEO } from '../utils';
import { Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata;
  const { dark } = useContext(ThemeContext);
  const windowGlobal = typeof window !== 'undefined' && window;
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <Image width="150" height="150" fluid src={`../../icons/me.jpeg`} style={{ borderRadius: '50%' }} />
        {/* {unemployed && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )} */}
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: windowGlobal && window.innerWidth < 800 ? '3rem' : '5rem',
              color: 'black'
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          <p>
            <i>Researcher and software engineer keen to learn new things. </i>
            <br />
            <i>
              Interested in distributed systems, human-in-the-loop data curation pipelines for AI-powered systems, and
              everything in between.{' '}
            </i>
          </p>

          <div className="profile-info">
            <div style={{ lineHeight: 1.2 }} className="info">
              <p style={{ marginBottom: 0 }}>
                <span style={{ fontSize: '1.15rem' }}>Ph.D. candidate</span>{' '}
                <a href="https://ict.unitn.it/" target="_blank" rel="noopener noreferrer">
                  @ UNITN
                </a>
                .
              </p>
              <p style={{ marginBottom: 0 }}>
                <span style={{ fontSize: '1.15rem' }}>Informatics Engineer</span>{' '}
                <a href="https://www.pol.una.py/" target="_blank" rel="noopener noreferrer">
                  @ FPUNA
                </a>
                .
              </p>
              <p style={{ marginBottom: 10 }}>
                <span style={{ fontSize: '1.15rem' }}>Co-founder</span>{' '}
                <a href="https://www.codium.com.py/en/" target="_blank" rel="noopener noreferrer">
                  @ Codium
                </a>
                .
              </p>
              <p style={{ marginBottom: 0 }} className="location-info">
                <b>Asunci&oacute;n</b>{' '}
                <span role="img" aria-label="From">
                  🇵🇾
                </span>{' '}
                &#10233; <b>Trento</b>{' '}
                <span role="img" aria-label="Home">
                  🇮🇹
                </span>
              </p>
            </div>
          </div>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container" style={{ fontSize: '2rem' }}>
          <a
            href="https://scholar.google.com/citations?user=RntrsC8AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fas', 'graduation-cap']}
              className="icons fa-graduation-cap"
              title="Google Scholar"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://www.github.com/jorgeramirez" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'github']}
              className="icons github"
              title="Github"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://www.linkedin.com/in/jorgeramirez1990" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              className="icons linkedin"
              title="LinkedIn"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://stackoverflow.com/users/1726085/jramirez" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'stack-overflow']}
              className="icons stack-overflow"
              title="StackOverflow"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="https://www.twitter.com/ingheniero" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              className="icons twitter"
              title="Twitter"
              style={{ fontSize: '3rem' }}
            />
          </a>
          <a href="mailto:jorge.ramirezmedina@unitn.it" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={['fas', 'envelope']}
              className="icons mail"
              title="e-mail"
              style={{ fontSize: '3rem' }}
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        lastName
        occupation
      }
    }
  }
`;
