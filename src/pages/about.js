import React, { useContext } from 'react';
import { PageLayout, PageTitle } from '../components';
import { Container, Image } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';
import { ThemeContext, SEO } from '../utils';

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: 'gray' }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  );

  const { author, occupation, readingList, showsList, unemployed } = data.site.siteMetadata;
  const { toString } = useContext(ThemeContext);

  const bookLinks = readingList.map((book) => MediaLink(book));
  const showLinks = showsList.map((show) => MediaLink(show));

  const designations = ['Software Engineer', 'Researcher'];

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image width="140" height="140" src={`../../icons/me.jpeg`} alt={author} style={{ borderRadius: '50%' }} />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>Ph.D. candidate</b> at the University of Trento, Italy. My current research interest is broadly in human
            computation and crowdsourcing for collecting high-quality data, with potential applications in machine
            learning and information retrieval. My thesis work focuses on developing strategies for addressing
            performance concerns and bias in designing, running, and reporting crowdsourcing experiments (helping crowd
            workers, the overall task design, and task requesters).
          </p>
          <p className="i-5">
            Before starting my Ph.D., I worked for five years as a software engineer (2013-2017). From 2016 to 2017, I
            worked full-time as a lead software engineer at my own company, which I co-founded with my university
            classmates back in 2013 (initially as a side hustle, but it's been growing :) I hold a bachelor's in
            computer science from the Polytechnic Faculty of the National University of Asuncion (
            <a href="https://www.pol.una.py/" target="_blank" rel="noopener noreferrer">
              Facultad Politénica, UNA
            </a>
            ). Unlike typical 4-years bachelor programs, this is a rather monolithic 5-years (+1 for thesis) program in
            computer science (the exact name, Informatics Engineering).
          </p>
          <p className="i-5">
            In my spare time, I like to run, play football/soccer, and breakdance (yes, bboying, I used to do cool
            tricks back in the day ;)
          </p>
          <p className="i-5">
            I'm married to Sofi{' '}
            <span className="heart" style={{ color: 'red' }}>
              &nbsp;❤&nbsp;
            </span>
            , and we have a dog 🐶 named Coco.
          </p>
          <br />
          <p>
            Check out my <Link to="/publications">publications</Link> and <Link to="/projects">projects</Link> to see
            what I've been up to!
          </p>
        </article>
        {/* <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you like what you{' '}
                  <Link to="/resume">see</Link>, let's get in&nbsp;
                  <a href="mailto:red.five@rebellion.com" target="_blank" rel="noopener noreferrer">
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">Here are a couple of books from my reading list:</h5>
          <ul style={{ fontSize: '0.9rem', listStyle: 'none' }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">Here are a couple of shows from my watch list:</h5>
          <ul style={{ fontSize: '0.9rem', listStyle: 'none' }}>{showLinks}</ul>
          <h5 className="watch-list-title pt-4">Here are a couple of movies from my watch list:</h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p>
        </article> */}
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`;
