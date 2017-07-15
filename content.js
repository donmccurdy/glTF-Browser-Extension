(function() {

  // When page changes, check if current page is a glTF file.
  function onStateChange () {
    if (!!location.pathname.match(/\.(gltf|glb)$/)) {
      onEnterFile();
    }
  }

  // Listen for navigation events.
  const browser = window.chrome || window.browser;
  browser.runtime.onMessage.addListener(function (message) {
    if (message.type === 'statechange') {
      onStateChange();
    }
  });

  function onEnterFile () {
    // Find button group, and exit early if anything looks wrong.
    const btnGroupEl = document.querySelector('.file-actions .BtnGroup');
    let previewBtnEl = btnGroupEl && btnGroupEl.querySelector('#preview-url');
    if (!btnGroupEl || previewBtnEl) { return; }

    // Construct URL for raw glTF asset.
    const path = (document.querySelector('#raw-url') || location).pathname;
    const url = 'https://raw.githubusercontent.com' + path.replace('/raw/', '/');

    // Construct button element, linking to preview in new tab.
    previewBtnEl = document.createElement('a');
    previewBtnEl.classList.add('btn', 'btn-sm', 'BtnGroup-item');
    previewBtnEl.textContent = 'Preview';
    previewBtnEl.href = 'https://gltf-viewer.donmccurdy.com/#model=' + url;
    previewBtnEl.target = '_blank';
    previewBtnEl.id = 'preview-url';

    // Insert button into page.
    btnGroupEl.insertBefore(previewBtnEl, btnGroupEl.firstChild);
  }

  onStateChange();

})();
