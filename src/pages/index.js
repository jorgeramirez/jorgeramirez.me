import React from 'react';

import '../styles/styles.scss';
import MyImage from '../components/image';
import SEO from '../components/seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaTwitterSquare,
  FaStackOverflow
} from 'react-icons/fa';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  componentDidMount() {
    this.handleWindowSizeChange(); // Set width
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.screen.availHeight });
  };

  render() {
    // eslint-disable-next-line no-restricted-globals
    const availHeight = this.state.width;
    const spaceSize = availHeight / 4;

    return (
      <div style={{ height: availHeight, overflow: 'scroll', background: '#FDFEFF' }}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <SEO title="Home" />
        <Container>
          <Row
            className="justify-content-md-center justify-content-sm-center"
            style={{ position: 'relative', zIndex: 1000 }}
          >
            <Col xs={12} md={7} lg={7}>
              <Card style={{ marginTop: spaceSize, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', border: 'none' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ width: '100%' }}>
                    <Row>
                      <Col xs={{ span: 8, offset: 2 }} md={{ span: 12, offset: 0 }} lg={{ span: 4, offset: 0 }}>
                        <MyImage />
                      </Col>
                      <Col xs={12} md={12} lg={8}>
                        <div className="profile-info">
                          <h2>Jorge Ramírez</h2>
                          <div style={{ lineHeight: 1.2 }} className="info">
                            <p style={{ marginBottom: 0 }}>
                              <span style={{ fontSize: '1.15rem' }}>Ph.D. candidate</span>{' '}
                              <a href="https://ict.unitn.it/" target="_blank" rel="noopener noreferrer">
                                @ UNITN
                              </a>
                              .
                            </p>
                            <p style={{ marginBottom: 0 }}>
                              <span style={{ fontSize: '1.15rem' }}>Informatics Engineering</span>{' '}
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
                            <p style={{ marginBottom: 0, fontSize: '0.85rem' }} className="location-info">
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
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
                <p style={{ padding: '1.25rem', textAlign: 'justify' }}>
                  I'm a Ph.D. candidate at the University of Trento. My thesis work focuses on developing strategies for
                  addressing performance concerns and bias in designing, running, and reporting crowdsourcing
                  experiments (helping crowd workers, the overall task design, and task requesters). You can find my
                  publications on my{' '}
                  <a
                    href="https://scholar.google.com/citations?user=RntrsC8AAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Scholar profile
                  </a>
                  .
                </p>
              </Card>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center justify-content-sm-center"
            style={{ position: 'relative', zIndex: 900 }}
          >
            <Col xs={{ span: 11 }} sm={{ span: 10, offset: 0 }} md={6} className="media-badges-container">
              <div className="media-badges">
                <span style={{ verticalAlign: 'middle', marginRight: '1rem' }}>
                  <a
                    href="https://scholar.google.com/citations?user=RntrsC8AAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGraduationCap />
                  </a>
                </span>
                <span style={{ verticalAlign: 'middle', marginRight: '1rem' }}>
                  <a href="https://www.linkedin.com/in/jorgeramirez1990" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </span>
                <span style={{ verticalAlign: 'middle', marginRight: '1rem' }}>
                  <a href="https://www.github.com/jorgeramirez" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </span>
                <span style={{ verticalAlign: 'middle', marginRight: '1rem' }}>
                  <a href="https://stackoverflow.com/users/1726085/jramirez" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow />
                  </a>
                </span>
                <span style={{ verticalAlign: 'middle', marginRight: '1rem' }}>
                  <a href="https://www.facebook.com/jorgeramirez1990" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />
                  </a>
                </span>
                <span style={{ verticalAlign: 'middle', marginRight: '1rem' }}>
                  <a href="https://www.twitter.com/ingheniero" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare />
                  </a>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default IndexPage;
