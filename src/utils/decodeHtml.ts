const decodeHtml = (html: string) => {
  let txt: null | HTMLTextAreaElement = document.createElement('textarea');
  txt.innerHTML = html;
  const decodedValue = txt.value;
  txt = null;
  return decodedValue;
};

export default decodeHtml;
