import React from 'react';
import { StyledContainer, Title, Form, Input } from './News.styled';



const News = () => {
  return (
    <StyledContainer>
      <Title>News</Title>
      <Form>
        <Input type="text" name="query"  placeholder="Search" />
      </Form>
    </StyledContainer>
  );
}


export default News;
