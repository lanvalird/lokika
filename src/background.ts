import browser from 'webextension-polyfill';
import { DEFAULT_SEARCHER, DEFAULT_USERNAME, DEFAULT_BACKGROUND } from './global';

browser.runtime.onInstalled.addListener((details) => {
  if (details.reason !== 'install' && details.reason !== 'update') return;
  browser.storage.local.set({
    searcher: DEFAULT_SEARCHER,
    username: DEFAULT_USERNAME,
    background: DEFAULT_BACKGROUND,
  });
  console.log('Local storage is done.');
});
