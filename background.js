(function () {

  const browser = window.chrome || window.browser;
  const webNavigation = (window.chrome||window).webNavigation;

  if (!webNavigation || !browser) {
    console.warn('Missing APIs.');
    return;
  }

  webNavigation.onHistoryStateUpdated.addListener((details) => {
    browser.tabs.sendMessage(details.tabId, {type: 'statechange'});
  });

})();
