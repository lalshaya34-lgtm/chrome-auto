const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const intervalInput = document.getElementById('interval');
const modeSelect = document.getElementById('mode');
const selectorInput = document.getElementById('selector');
const statusText = document.getElementById('status');

async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs[0];
}

function updateStatus(text) {
  statusText.textContent = text;
}

startButton.addEventListener('click', async () => {
  const tab = await getActiveTab();

  if (!tab || !tab.id) {
    updateStatus('No active tab found');
    return;
  }

  const interval = Number(intervalInput.value) || 1000;
  const mode = modeSelect.value;
  const selector = selectorInput.value.trim();

  await chrome.tabs.sendMessage(tab.id, {
    type: 'start',
    interval,
    mode,
    selector,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  updateStatus('Running');
});

stopButton.addEventListener('click', async () => {
  const tab = await getActiveTab();

  if (!tab || !tab.id) {
    updateStatus('No active tab found');
    return;
  }

  await chrome.tabs.sendMessage(tab.id, { type: 'stop' });
  updateStatus('Stopped');
});

chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
  const tab = tabs[0];
  if (!tab) return;

  try {
    const response = await chrome.tabs.sendMessage(tab.id, { type: 'status' });
    if (response && response.running) {
      updateStatus('Running');
    }
  } catch (error) {
    updateStatus('Ready');
  }
});
