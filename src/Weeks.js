import React from "react";
import {useNavigate,useParams} from 'react-router-dom';
import styled from "styled-components";

  const Weeks = (props) => {
    const params = useParams();
    const navigate = useNavigate();

    const [rate, setRate] = React.useState(0);

    return (
        <>
        <AllDay>
            <span>{params.week}요일 평점</span>
        </AllDay>

            <Five>
            {Array.from({length:5},(item, idx)=>{
              return(
                <Circle key={idx} onClick={()=>{ 
                  setRate(idx + 1);
                }}
                style={{
                  
                  backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                }}
                ></Circle>
              );
            })}
            </Five>
            <Back
            onClick={()=>{navigate("/");}}>
              평점 남기기
            </Back>
            </>   
      );
    }

const AllDay = styled.h1`
width: 260px;
height: 50px;
display: flex;
margin: 20px 10px 20px 97px;
`;

const Five = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: gray;
margin: 7px 5px 30px 10px;
cursor: pointer;

`;

const Back = styled.div`
display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  margin-top: 24px;

    font-size: 18px;
    width: 150px;
    height: 40px;
    background-color: transparent;
    border: 3px solid #9966ff;
    border-radius: 6px;
    cursor: pointer;
    margin: auto;
  `;


export default Weeks;