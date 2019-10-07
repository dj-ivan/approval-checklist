'use strict';

var extensionId = '[INSER_OWN_EXTENSION_ID]';

chrome.browserAction.onClicked.addListener(function(tab) {
  var result = false;
  var value = `code style: pass fail na
functional logic: pass fail na
business logic: pass fail na
pixel perfect: pass fail na
unit tests: pass fail na
prerender compatible: pass fail na`;
  var textarea = document.getElementById('textArea');
  textarea.value = value;
  textarea.select();

  if (document.execCommand('copy')) {
    result = true;
  } else {
    console.error('failed to get clipboard content');
  }

  textarea.value = '';
  return result;
});
