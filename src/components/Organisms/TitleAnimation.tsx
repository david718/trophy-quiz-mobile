import { isIosNotch } from 'src/utils';
import { AnimationLoader, Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const TitleAnimation = () => {
  return (
    <Content
      marginTop="0px"
      height={`calc(100% - 124px - 124px - ${isIosNotch() ? '96px' : '80px'})`}
    >
      <Atoms.Div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Atoms.Title margin="0px 0px 16px 0px">TROPHY QUIZ</Atoms.Title>
        <AnimationLoader
          name="trophy"
          path="https://assets1.lottiefiles.com/packages/lf20_rmlyntkm.json"
          size="220px"
        />
      </Atoms.Div>
    </Content>
  );
};

export default TitleAnimation;
