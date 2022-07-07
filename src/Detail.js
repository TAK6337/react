import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Detail(props) {
  const navigate = useNavigate();

  const day_list = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  }
 

  const week_days = Object.keys(day_list).map((d_day, idx) => {
    let today = new Date().getDay();
    let day = today + parseInt(d_day) > 6 ? today + parseInt(d_day) - 7 : today + parseInt(d_day);

    return day_list[day];
  });
  

  let random_sum = 0;

  const week_random = week_days.map((d_day, idx) => {

    const mk_random = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1);
    random_sum += mk_random;

    return {
      days: d_day,
      random: mk_random
    };
  })
 
  const random_avg = (random_sum / week_random.length).toFixed(1);
  console.log(random_avg)
  const [all_avg, setAvg] = useState(random_avg);

  return (
    <>
      <Title>내 일주일은?</Title>
      { week_random.map((d_day, idx) => {
        
        return (
          
          <AllDay key={`parm_week_${idx}`}>
            <p className="day">{d_day.days}</p>

            {Array.from({ length: 5 }, (item, index) => {
             
             return (
                <Circle key={index} style={{ backgroundColor: d_day.random < index ? "#ddd" : "purple" }} 
              ></Circle>) 
            })}
         
            <Button onClick={() => {
              navigate(`/Weeks/${d_day.days}`);
            }}>
            </Button>
            </AllDay> 
        
        )
      })}

      <Result>
        <h3>평균 평점</h3>
        <p>{all_avg}</p>
        <button onClick={() => {
          navigate("/");
        }}>reset</button>
      </Result>
      </>
  );
};
  
const Title  = styled.div`
font-size: 30px;
color: black;
text-align: center;

`;
const AllDay = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 15px 0px 0px 0px;
`;

const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: gray;
margin: 0 6px;
`;

const Button = styled.div`
width: 0;
height: 0;
border-bottom: 14px solid transparent;
border-top: 14px solid transparent;
border-left: 24px solid yellowgreen;
margin: 0 6px;
cursor: pointer;
`;

const Result = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
margin-top: 24px;

h3 {
font-size: 24px;
margin: 16px 0px 15px 0px;
};

p {
font-size: 20px;
margin: auto;
};

button {
  font-size: 18px;
  font-color: 990000;
  width: 130px;
  height: 40px;
  background-color: transparent;
  border: 3px solid #9966ff;
  border-radius: 6px;
  cursor: pointer;
  margin: 13px 0px 0px 0px;
};

`;

export default Detail;