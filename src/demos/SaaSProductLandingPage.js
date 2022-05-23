import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import Features from "../components/features/ThreeColWithSideImage.js";
import FeatureWithSteps from "../components/features/TwoColWithSteps.js";
import FAQ from "../components/faqs/SingleCol.js";
import Footer from "../components/footers/FiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "../images/hero-screenshot-2.png";
const SaasProductLandingPage = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "What kind of input files can be uploaded ?",
            answer: "Sample Answer 1"
          },
          {
            question: "How to access the saved documents ?",
            answer: "Sample Answer 2"
          },
          {
            question: "Sample Question 3",
            answer: "Sample Answer 3"
          },
          {
            question: "Sample Question 4",
            answer: "Sample Answer 4"
          },
     
        ]}
      /> 
      <Footer />
    </AnimationRevealPage>
  );
}

export default SaasProductLandingPage;
