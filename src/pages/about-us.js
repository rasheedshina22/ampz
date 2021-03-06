import React from 'react';
import '../assets/about-us.css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import line from '../img/straight_line.png';
import jabbar from '../img/abdul_jabbar.jpg';
import brenda from '../img/Brenda_Nwagwu.jpg';
import yinka from '../img/Adeyinka_Aderombi.jpg';
import nicole from '../img/Nichole Yembra.jpg';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import { graphql } from 'gatsby';
import Hero from 'gatsby-image';

const AboutUs = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="AMPZ – Bridging the gap in sports for Africans "
        description="AMPZ platform utilizes data and content to make talent scouting and management processes secured, efficient, interactive, and fun while mitigating against exploitation and trafficking through sports."
      />

      <div className="abt-hero">
        <div className="ovrlay"></div>
        <Hero
          fluid={data.hero.childImageSharp.fluid}
          alt="About us"
          style={{
            height: '80vh',
          }}
        />
        {/* Caption */}
        <div className="hero-text text-center">
          <h3 className="caro-h3">BRIDGING THE GAP</h3>
          <h2 className="caro-h2">The African Dream</h2>
          <p className="caro-p container-fluid">
            “Every great dream begins with a dreamer”
          </p>
          <span>Harriet Tubman</span>
        </div>
      </div>

      <main className="container">
        <div className="problems text-center m-5">
          <div className="p-2">
            <h4
              style={{
                fontFamily: 'font2',
                fontWeight: '900',
                color: '#db9a02',
              }}
            >
              THE PROBLEM
            </h4>
            <p style={{ fontSize: '18px' }}>
              Over 9 million Africans are in modern slavery and sports is one of
              the lures for trafficking. Despite Africa leading in sports
              participation, over 200 million sports talents within a viable age
              bracket, lack access to verified opportunities, seek platforms for
              self-development and are exposed to the risk exploitation
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={line} alt="line" />
          </div>
          <div className="p-2">
            <h4
              style={{
                fontFamily: 'font2',
                fontWeight: '900',
                color: '#db9a02',
              }}
            >
              OUR SOLUTION
            </h4>
            <p style={{ fontSize: '18px' }}>
              AMPZ is connecting African sports talents to a world of verified
              opportunities by leveraging on technology. Our platform enables
              talents to profile themselves, log their stats, and share their
              content. With this, verified recruiters all over the world can
              access Africa's talent pool and make informed decisions using
              comprehensive data.
            </p>
          </div>
        </div>

        <div className="d-flex container justify-content-center">
          <iframe
            title="youTubeVideo"
            width="70%"
            height="345"
            src="https://www.youtube.com/embed/NPl88MhJeIM"
          ></iframe>
        </div>
        {/* Team */}
        <div className="team">
          <div className="text-center m-5">
            <div className="mx-auto gold_test" style={{ fontSize: '18px' }}>
              GAME CHANGERS
            </div>
            <div className="mx-auto white_test">Meet The Champions</div>
          </div>
          <div className="champions" style={{ fontSize: '18px' }}>
            <div className="text-center">
              <img src={jabbar} alt="team" />
              <div className="team-name">Abdul-Jabbar Momoh</div>
              <p>Co-Founder/CEO</p>
            </div>
            <div className="text-center">
              <img src={brenda} alt="team" />
              <div className="team-name">Brenda Nwagwu</div>
              <p>Co-Founder/CMO</p>
            </div>
            <div className="text-center">
              <img src={yinka} alt="team" />
              <div className="team-name">Adeyinka Aderombi</div>
              <p>Advisor</p>
            </div>
            <div className="text-center">
              <img src={nicole} alt="team" />
              <div className="team-name">Nicole Yembra</div>
              <p>Advisor</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "abtUs.png" }) {
      childImageSharp {
        fluid(maxWidth: 3080, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default AboutUs;
