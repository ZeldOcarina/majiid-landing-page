import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import SectionTitle from "../../components/SectionTitle";

const Wrapper = styled.section`
  .questions-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    .question-box {
      .question {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .answer {
        font-size: 1.8rem;
        line-height: 1.5;
      }
    }
  }
`;

const Questions = () => {
  const {
    allContentfulCallQuestion: { questions },
  } = useStaticQuery(query);

  console.log(questions);

  return (
    <Wrapper>
      <div className="container">
        <SectionTitle title="Q&A" />
        <div className="questions-container">
          {questions.map(({ question, answer, id }) => {
            console.log(answer);
            return (
              <div key={id} className="question-box">
                <h5 className="question">{question}</h5>
                <p className="answer">{answer.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const query = graphql`
  {
    allContentfulCallQuestion {
      questions: nodes {
        question
        answer {
          answer
        }
        id
      }
    }
  }
`;

export default Questions;
