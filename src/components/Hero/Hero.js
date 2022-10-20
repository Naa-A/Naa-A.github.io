import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center> 
        Welcome To <br /> Koder Kai
      </SectionTitle>
      <SectionText> 
        Front-end Developer with cyber security competencies
      </SectionText>
      {/* redirect button to email */}
      <Button onCLick={() => window.location = "mailto:tetteh.ashikai@gmail.com"}>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;