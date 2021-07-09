import {
  LandingTitleAnimation,
  LandingFixedFooter,
  QuizDifficulty,
  QuizNumbers,
} from 'components/Organisms';

const LandingPage = () => {
  return (
    <>
      <LandingTitleAnimation />
      <QuizNumbers />
      <QuizDifficulty />
      <LandingFixedFooter />
    </>
  );
};

export default LandingPage;
