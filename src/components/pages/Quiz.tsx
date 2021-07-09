import { useEffect } from 'react';

import { Quiz, QuizFixedFooter, QuizResult } from 'components/Organisms';

const QuizPage = () => {
  return (
    <>
      <Quiz />
      <QuizResult />
      <QuizFixedFooter />
    </>
  );
};

export default QuizPage;
