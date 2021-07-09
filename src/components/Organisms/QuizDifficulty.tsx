import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { ANY_DIFFICULTY, difficulties } from 'src/constant';
import { QuizDifficultyState } from 'src/state';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const QuizDifficulty = () => {
  const [quizDifficulty, setQuizDifficulty] = useRecoilState(
    QuizDifficultyState,
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuizDifficulty(e.target.value);
  };
  return (
    <Content header="Difficulty">
      <Atoms.Select
        margin="16px 0px"
        value={quizDifficulty}
        onChange={handleChange}
      >
        {difficulties.map((difficulty) => (
          <option
            key={difficulty}
            value={difficulty == ANY_DIFFICULTY ? undefined : difficulty}
          >
            {difficulty == ANY_DIFFICULTY
              ? difficulty
              : difficulty.toUpperCase()}
          </option>
        ))}
      </Atoms.Select>
    </Content>
  );
};

export default QuizDifficulty;
