import React from "react";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";

const Wrapper = styled.section`
  margin-top: 4rem;

  h3 {
  }

  .dentists-gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .dentist-logo {
    width: 13rem;
    //height: auto;
  }

  .btn {
    ${respond(
      "iphone-5",
      css`
        margin: 0 1rem;
      `
    )}
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

const Clients = () => {
  const {
    allContentfulDentist: { dentists },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <div className="container">
        <h3 className="text-center">More than 250 Dentals practices on their way to break 7 figures and counting</h3>
        <div className="dentists-gallery">
          {dentists.map(
            ({
              id,
              name,
              logo: {
                file: { url },
              },
            }) => {
              return <img src={"https:" + url} alt={name} key={id} className="dentist-logo" />;
            }
          )}
        </div>
        <Button text="schedule your consultation" className="btn" />
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    allContentfulDentist {
      dentists: nodes {
        name
        id
        logo {
          file {
            url
          }
        }
      }
    }
  }
`;

export default Clients;
