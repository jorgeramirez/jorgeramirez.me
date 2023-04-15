import React, { Fragment } from 'react';
import { Container, Badge, Col, Row } from 'react-bootstrap';

export default ({ tags, title, from, to, affiliation, children }) => {
  return (
    <Container className="text-center">
      <Row style={{ textAlign: 'left' }}>
        <Col>
          <h2 className="mt-5" style={{ marginBottom: 0 }}>
            {title}
          </h2>
          <span>
            {affiliation}, {from}
          </span>{' '}
          - <span>{to}</span>
        </Col>
      </Row>
      {tags.map((tag) => (
        <Fragment>
          <Badge key={tag} pill bg="secondary" className="px-2 mr-1">
            {tag}
          </Badge>
          {' '}
        </Fragment>
      ))}
      <div style={{ marginTop: '1 rem' }}></div>
      <article className="m-auto pt-2 text-justify">{children}</article>
    </Container>
  );
};
