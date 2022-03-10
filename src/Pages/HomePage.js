import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import styled from "styled-components"

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hi I'm <span>Pawornwat Tangwattapornchai</span>
        </h1>
        <p>nice to meet you and enjoy my portfolio</p>
      <div className="icons">
          <div className="icon i-facebook">
            <a href="https://www.facebook.com/profile.php?id=100003993664816" target="_blank"><FacebookIcon/></a>
            </div>
          <div className="icon i-github"><a href="https://github.com/pawornwat/ReactFinalProject" target="_blank"><GitHubIcon/></a></div>
          <div className="icon i-youtube"><a href="https://www.youtube.com/channel/UCOvJek2P9Az1N7CGq8-WY-A" target="_blank"><YouTubeIcon/></a></div>
      </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
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
