import React from 'react'
import styled from 'styled-components';

function ProgressBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title} {text}</h6>
            <div className="progress-bar">
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
        
    )
}
const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 5px;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color)
            }
        }
    }
    
`;

export default ProgressBar;
