const decodeHtml = (html: string) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export default decodeHtml;
