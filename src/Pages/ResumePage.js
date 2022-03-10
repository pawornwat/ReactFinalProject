import React from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import styled from "styled-components";
import ProgressBar from "../Components/Progressbar";
import ResumeItem from "../Components/ResumeItem";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import SmallTitle from "../Components/SmallTitle";

export default function ResumePage() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <>
      <MainLayout>
        <SkillsStyled>
          <Title title={"My Skills"} span={"my skills"} />
          <InnerLayout>
            <div className="mr-5">
              <div className="skills">
                <ProgressBar title={"HTML5"} width={"90%"} text={"90%"} />
                <ProgressBar title={"CSS3"} width={"70%"} text={"70%"} />
                <ProgressBar title={"JAVASCRIPT"} width={"90%"} text={"90%"} />
                <ProgressBar title={"JAVA"} width={"90%"} text={"90%"} />
                <ProgressBar title={"PYTHON"} width={"80%"} text={"80%"} />
                <ProgressBar title={"C#"} width={"80%"} text={"80%"} />
                <ProgressBar title={"React JS"} width={"60%"} text={"60%"} />
              </div>
            </div>
          </InnerLayout>
        </SkillsStyled>
        <ResumeStyled>
          <Title title={"Resume"} span={"Resume"} />
          <InnerLayout>
            <div className="small-title u-small-title-margin">
              <SmallTitle icon={school} title={"Education"} />
            </div>
            <div className="resume-content ">
              <ResumeItem
                year={"2015 - 2017"}
                title={"High School Graduation"}
                subTitle={"Benchamarachuthit Chanthaburi School"}
                text={
                  "Graduated in Science - Mathematics - International Music"
                }
              />
              <ResumeItem
                year={"2018 - 2022"}
                title={"University"}
                subTitle={"Thai-Nichi Intitute of Technology"}
                text={"Faculty of Information Technology"}
              />
            </div>
            <div className="small-title">
              <SmallTitle icon={briefcase} title={"Work Experience"} />
            </div>
            <div className="resume-content">
              <ResumeItem
                year={"2021"}
                title={"Avalant Co., LTD Thailand"}
                subTitle={"Position Java Developer"}
                text={"Coding Java and Develop Website"}
              />
            </div>
          </InnerLayout>
        </ResumeStyled>
      </MainLayout>
    </>
  );
}
const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
