import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';
import { Trophy } from 'components/icons';

const LandingTitleAnimation = () => {
  return (
    <Content marginTop="0px">
      <Atoms.Div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 328px)"
      >
        <Atoms.Title margin="0px 0px 16px 0px">TROPHY QUIZ</Atoms.Title>
        <Trophy />
      </Atoms.Div>
    </Content>
  );
};

export default LandingTitleAnimation;
