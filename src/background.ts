import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener((details) => {
  if (details.reason !== 'install' && details.reason !== 'update') return;
  browser.storage.local.set({
    searcher: 'google',
    username: 'User',
    background: undefined,
  });
  console.log('Local storage is done.');
});
