let autoClickInterval = null;
let state = {
  running: false,
  interval: 1000,
  mode: 'cursor',
  selector: '',
  x: 0,
  y: 0,
};

function clickTarget() {
  try {
    if (!state.running) return;

    let target = null;

    if (state.mode === 'selector') {
      const selector = state.selector && state.selector.trim();
      if (selector) {
        target = document.querySelector(selector);
      }

      if (!target) {
        target = document.querySelector('button, a, input, [role="button"], [onclick]');
      }
    } else {
      const x = Number(state.x) || window.innerWidth / 2;
      const y = Number(state.y) || window.innerHeight / 2;
      target = document.elementFromPoint(x, y);
    }

    if (!target) {
      return;
    }

    target.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    }));

    if (typeof target.click === 'function') {
      target.click();
    }
  } catch (error) {
    console.error('Auto click failed:', error);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'start') {
    state.running = true;
    state.interval = Number(message.interval) || 1000;
    state.mode = message.mode || 'cursor';
    state.selector = message.selector || '';
    state.x = Number(message.x) || window.innerWidth / 2;
    state.y = Number(message.y) || window.innerHeight / 2;

    if (autoClickInterval) {
      clearInterval(autoClickInterval);
    }

    autoClickInterval = setInterval(clickTarget, state.interval);
    sendResponse({ ok: true, running: true });
    return true;
  }

  if (message.type === 'stop') {
    state.running = false;
    if (autoClickInterval) {
      clearInterval(autoClickInterval);
      autoClickInterval = null;
    }
    sendResponse({ ok: true, running: false });
    return true;
  }

  if (message.type === 'status') {
    sendResponse({ running: state.running, interval: state.interval });
    return true;
  }

  return false;
});
