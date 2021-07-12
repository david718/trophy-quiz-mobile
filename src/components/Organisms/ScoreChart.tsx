import { PieChart, Pie, Cell } from 'recharts';
import { useRecoilValue } from 'recoil';

import { CORRECT_COLOR, INCORRECT_COLOR } from 'src/constant';
import { QuizResultsState } from 'src/state';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const ScoreChart = () => {
  const quizResults = useRecoilValue(QuizResultsState);
  const correctQuizNumbers = quizResults.filter((quiz) => quiz.correct).length;

  const correctAnswersName = 'Correct';
  const incorrectAnswersName = 'Incorrect';

  const datas = [
    {
      name: correctAnswersName,
      value: correctQuizNumbers,
    },
    {
      name: incorrectAnswersName,
      value: quizResults.length - correctQuizNumbers,
    },
  ];

  return (
    <Content header="SCORES">
      <Atoms.Div display="flex">
        <Atoms.Div
          flex={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <PieChart width={144} height={144}>
            <Pie
              nameKey="name"
              dataKey="value"
              data={datas}
              cx="50%"
              cy="50%"
              outerRadius={50}
            >
              {datas.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.name == correctAnswersName
                      ? CORRECT_COLOR
                      : INCORRECT_COLOR
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </Atoms.Div>
        <Atoms.Div flex={1}>
          {datas.map((entry) => (
            <Atoms.Div
              key={entry.name}
              margin="8px 0px"
              fontSize="14px"
              color={
                entry.name == correctAnswersName
                  ? CORRECT_COLOR
                  : INCORRECT_COLOR
              }
            >
              {`${entry.name} : ${
                entry.name == correctAnswersName
                  ? correctQuizNumbers
                  : quizResults.length - correctQuizNumbers
              }`}
            </Atoms.Div>
          ))}
        </Atoms.Div>
      </Atoms.Div>
    </Content>
  );
};

export default ScoreChart;
