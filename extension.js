(function() {

  // Find button group, and exit early if it isn't found.
  const btnGroupEl = document.querySelector('.file-actions .BtnGroup');
  if (!btnGroupEl) { return; }

  // Construct URL for raw glTF asset.
  const path = (document.querySelector('#raw-url') || location).pathname;
  const url = 'https://raw.githubusercontent.com' + path.replace('/raw/', '/');

  // Construct button element, linking to preview in new tab.
  const previewBtnEl = document.createElement('a');
  previewBtnEl.classList.add('btn', 'btn-sm', 'BtnGroup-item');
  previewBtnEl.textContent = 'Preview';
  previewBtnEl.href = 'https://gltf-viewer.donmccurdy.com/#model=' + url;
  previewBtnEl.target = '_blank';

  // Insert button into page.
  btnGroupEl.insertBefore(previewBtnEl, btnGroupEl.firstChild);

})();
