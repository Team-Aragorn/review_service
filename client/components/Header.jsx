import React from 'react';
import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);

const Container = styled.div`
display: grid;
grid-template-columns: 125px auto;
grid-template-rows: auto;
grid-template-areas:
"stars signature"
"title title";
`;

const Stars = styled.div`
grid-area: stars;
font-size: 25px;
`;

const Signature = styled.div`
grid-area: signature;
align-self: center;
font-size: 12px;
`;

const Nickname = styled.span`
  font-weight: 700;
`;

const Date = styled.span`
`;

const Title = styled.h3`
  grid-area: title;
  font-size: 22px;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 1em;
  padding: 0px;
  text-transform: capitalize;
`;

const Header = ({ className, review }) => {
  return (
    <Container className={className}>
      <Stars>☆☆☆☆☆</Stars>
      <Signature>
        <Nickname>{review.nickname}</Nickname>
        <Date> · <ReactTimeAgo date={review.date}/></Date>
      </Signature>
      <Title>{review.title}</Title>
    </Container>
  );
};

const StyledHeader = styled(Header)`
grid-area: header;
background: #fdcdac;
`;

export default StyledHeader;
