import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './_home.sass';

import Navbar from 'src/components/Navbar';

const Home = (props) => {
  return (
    <Container
      fluid
      className="containerhome"
    >
      <Navbar />
      <div className="wrappercontent row">
        <div className="col-12 col-sm-12 col-md-4 d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="img"
            alt="home"
          />
        </div>
        <div className="desc col-12 col-sm-12 col-md-6">
          <h2
            className="t-black bold left-align"
            style={{
              fontSize: '36px',
              color: '#4d4d4d',
              margin: '0 0 16px',
            }}
          >Simple. Secure Reliable messaging.
          </h2>
          <h4
            className="text_16 t-black reg left-align"
            style={{
              color: '#c7c7c7',
              margin: '0 0 32px',
            }}
          >With WhatsUp, you’ll get fast, simple, secure messaging and calling for free, available on phones all over the world.
          </h4>
          <Link to="/login">
            <button
              type="button"
              className="buttonstart"
            >
              Start!
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};


export default Home;
