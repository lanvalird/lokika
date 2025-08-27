import { browser } from '@/global';

await browser.storage.local.get('background').then((result) => {
  if (result.background) {
    (document.querySelector('#app') as HTMLElement).style.backgroundImage =
      `url(${result.background})`;
  }
});
