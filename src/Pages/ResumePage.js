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
  const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
  return (
    <>
      <MainLayout>
        <SkillsStyled>
          <Title title={"My Skills"} span={"my skills"} />
          <InnerLayout>
            <div className="mr-5">
              <div className="skills">
                <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
                <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
                <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
                <ProgressBar title={"JAVA"} width={"60%"} text={"60%"} />
                <ProgressBar title={"PYTHON"} width={"95%"} text={"95%"} />
                <ProgressBar title={"React JS"} width={"75%"} text={"75%"} />
                <ProgressBar title={"UNITY"} width={"75%"} text={"75%"} />
              </div>
            </div>
          </InnerLayout>
        </SkillsStyled>
        <ResumeStyled>
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={"brief"} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 

                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 

                    />

                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={"school"} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 

                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 

                    />
                    {/* <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    /> */}
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
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;