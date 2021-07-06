const isIosNotch = () => {
  if (
    navigator.platform.toLowerCase().includes('iphone') &&
    window.screen.availHeight > 737
  )
    return true;
  return false;
};

export default isIosNotch;
