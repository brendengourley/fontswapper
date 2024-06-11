const submit = document.getElementById('submit');
const fontSelector = document.getElementById('font-option');

submit.addEventListener('click', () => {
  const fontToUse = fontSelector.value;
  let file = '';
  switch (fontToUse) {
    case 'aurebesh':
      file = 'aurebesh.css';
      break;
    case 'mandalor':
      file = 'mandalor.css';
      break;
    case 'modraniht':
      file = 'modraniht.css';
      break;
    case 'tengwar':
      file = 'tengwar.css';
  }
  console.log(file);
  chrome.tabs.query({ active: true }, tabs => {
    const tabId = tabs[0].id;
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: [`assets/css/${file}`]
    }, console.log('Should have inserted css'))
  });
});
