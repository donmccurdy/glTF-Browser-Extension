(function (window) {

  const browser = window.browser || window.chrome || window.msBrowser;
  if (!browser) {
    console.warn('Missing APIs.');
    return;
  }

  browser.webNavigation.onHistoryStateUpdated.addListener((details) => {
    browser.tabs.sendMessage(details.tabId, {type: 'statechange'});
  });

})(this);
