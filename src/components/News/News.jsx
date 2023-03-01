import React from 'react';
import { StyledContainer, Title, Form, Input, NewsList, NewsItem, NewsTitle, Description, Date, Wrapper, LinkReadMore } from './News.styled';



const News = () => {
  return (
    <StyledContainer>
      <Title>News</Title>
      <Form>
        <Input type="text" name="query"  placeholder="Search" />
      </Form>
      <NewsList>
        <NewsItem>
          <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
          <Description>Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.</Description>
          <Wrapper>
          <Date>20/02/2021</Date>
          <LinkReadMore href>Read more</LinkReadMore>
          </Wrapper>
        </NewsItem>
        <NewsItem>
          <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
          <Description>Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.</Description>
          <Wrapper>
          <Date>20/02/2021</Date>
          <LinkReadMore href>Read more</LinkReadMore>
          </Wrapper>
        </NewsItem>
        <NewsItem>
          <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
          <Description>Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.</Description>
          <Wrapper>
          <Date>20/02/2021</Date>
          <LinkReadMore href>Read more</LinkReadMore>
          </Wrapper>
        </NewsItem>
        <NewsItem>
          <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
          <Description>Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.</Description>
          <Wrapper>
          <Date>20/02/2021</Date>
          <LinkReadMore href>Read more</LinkReadMore>
          </Wrapper>
        </NewsItem>
        <NewsItem>
          <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
          <Description>Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.</Description>
          <Wrapper>
          <Date>20/02/2021</Date>
          <LinkReadMore href>Read more</LinkReadMore>
          </Wrapper>
        </NewsItem>
        <NewsItem>
          <NewsTitle>Обережно, кліщі! Як уберегти улюбленця </NewsTitle>
          <Description>Травневі прогулянки з улюбленцем не лише приємні, але й потребують пильності. З початком теплої пори року активізуються кліщі, і треба бути уважним, щоб уберегти свого песика чи котика від дуже серйозних неприємностей зі здоров`ям.</Description>
          <Wrapper>
          <Date>20/02/2021</Date>
          <LinkReadMore href>Read more</LinkReadMore>
          </Wrapper>
        </NewsItem>
      </NewsList>
    </StyledContainer>
  );
}


export default News;
