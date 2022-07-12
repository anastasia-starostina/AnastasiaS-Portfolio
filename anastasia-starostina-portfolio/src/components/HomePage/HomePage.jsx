import styled from "styled-components";
import "./HomePage.css"


const MainHeading = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;500;700&display=swap");
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 84px;
  color: #BB77DB
    ${
      "" /* background-image: linear-gradient(60deg, #e21143, #ffb03a);
  background-clip: text;
  color: transparent; */
    }
    ${
      "" /* background: -webkit-linear-gradient(
    rgba(144, 227, 154, 1),
    rgba(189, 155, 205, 1), rgba(187, 119, 219, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
    };
`;
const SecondaryHeading = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;500;700&display=swap");
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 53px;
  color: #FFFAFF;;
  padding: 15px;
`;


const HomePage = () => {

    return (
      <>
        <MainHeading>Hey, I am Anastasia.</MainHeading>
        <SecondaryHeading>Full Stack Developer</SecondaryHeading>
        <SecondaryHeading>Currently training at the School of Code to become a better version of
        myself. Follow my journey here.</SecondaryHeading>
        
      </>
    );
    }

export default HomePage;
