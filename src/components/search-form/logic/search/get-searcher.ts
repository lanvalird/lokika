import { browser } from '@/global';

export async function getSearcher() {
  return (await browser.storage.local.get(['searcher']).then((result) => {
    return result.searcher;
  })) as string;
}
