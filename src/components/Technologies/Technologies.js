import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      <List>
        <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            HTML<br/>
            CSS<br/>
            JavaScript<br/>
            React.js
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Node and Databases
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/ UX</ListTitle>
          <ListParagraph>
            Figma
          </ListParagraph>
        </ListContainer>
        </ListItem>
      </List>
    </SectionText>
  </Section>
);

export default Technologies;
