import React, { useState, useRef, useLayoutEffect } from 'react';

import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { H2, P, H3, H5 } from '../../components/Typography';

import prototype from '../../assets/images/prototype.png';
import Tweet from '../../components/Tweet';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 642px 1fr;
  grid-gap: 32px;
  margin-bottom: 14rem;
  margin-top: 4rem;
`;

const ImageWrapper = styled.div`
  background: #151515;
  border-radius: 4px;
`;

const Prototype = () => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -0.1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);
  return (
    <>
      <H2>Prototype Quickly</H2>
      <P muted>Test your ideas early and often</P>
      <Grid css="">
        <ImageWrapper>
          <img src={prototype} alt="prototype" />
        </ImageWrapper>
        <div
          css={`
            position: relative;
          `}
        >
          <H3
            css={`
              margin-bottom: 1.5rem;
            `}
          >
            Code from anywhere
          </H3>
          <H5>On any device </H5>
          <P muted>You just need a web browser</P>
          <H5>With no setup</H5>
          <P muted>Go straight to coding</P>
          <H5>VS Code built-in </H5>
          <P muted>The editor’s full-featured, yet familiar</P>

          <motion.div style={{ y }}>
            <div ref={ref}>
              <Tweet
                style={`
              background: #242424
              `}
                tweet={{
                  name: 'Jonnie Hallman',
                  username: 'destroytoday',
                  job: 'Designer Developer, Stripe',
                  quote: 'it feels much more like my local environment',
                  url:
                    'https://twitter.com/destroytoday/status/1173805935384350720',
                }}
              />
            </div>
          </motion.div>
        </div>
      </Grid>
    </>
  );
};

export default Prototype;
