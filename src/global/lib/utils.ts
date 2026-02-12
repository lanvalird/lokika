import { browser } from '@/global';

export async function setPageBackground(querySelector: string) {
  await browser.storage.local.get('background').then((result) => {
    if (result.background) {
      const element = document.querySelector(querySelector) as HTMLElement;
      element.style.backgroundImage = `url(${result.background})`;
    }
  });
}

export async function getStorageData<T>(key: string): Promise<T> {
  const storage = browser.storage.local;
  const value = storage.get(key);
  return value.then((result) => result[key]) as T;
}
