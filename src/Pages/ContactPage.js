import React from "react";
import { Card, Container, Jumbotron } from "react-bootstrap";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import styled from "styled-components";

export default function ContactPage() {
  return (
    <ContactStyled>
      <MainLayout>
        <InnerLayout>
          <Title title={"Contact"} span={"Contact"} />
        </InnerLayout>
      </MainLayout>
      <div className="typography">
        <div className="icons">
          <div className="icon i-facebook">
            <PhoneIcon />
          </div>
        </div>
        <h1>
          <span>Phone</span>
        </h1>
        <p>099-1479924</p>
        <div className="icons">
          <div className="icon i-facebook">
            <EmailIcon />
          </div>
        </div>
        <h1>
          <span>Email</span>
        </h1>
        <p>fightpawornwat@gmail.com</p>
      </div>
    </ContactStyled>
  );
}
const ContactStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;
