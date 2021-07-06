import { Content, Shimmer } from 'components/Molecules';
import Atoms from 'components/Atoms';

const CheckoutOrderCarShimmer = () => {
  return (
    <Content>
      <Atoms.Div
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        padding="15px 0px"
        height="94px"
      >
        <Atoms.Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Shimmer height="24px" width="223px" />
        </Atoms.Div>
        <Atoms.Div>
          <Shimmer height="18px" width="100%" />
          <Shimmer margin="2px 0px 0px 0px" height="18px" width="50%" />
        </Atoms.Div>
      </Atoms.Div>
    </Content>
  );
};

export default CheckoutOrderCarShimmer;
