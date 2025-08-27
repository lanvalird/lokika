import { browser, DEFAULT_SEARCHER } from '@/global';
import { getSearcher } from './get-searcher';

const searchers: { [key: string]: string } = {
  yandex: `https://yandex.com/search/?text={0}`,
  google: `https://www.google.com/search?q={0}`,
  system: 'SYSTEM_SEARCH',
};

export async function search(event: Event) {
  try {
    const query = (event.target as HTMLFormElement).search.value;

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (urlRegex.exec(query)) {
      return browser.tabs.create({ url: query });
    }

    const searcher = await getSearcher();

    if (searcher === 'system') {
      return await browser.search.query({ text: query });
    }

    await browser.tabs.create({
      url: searchers[searcher || DEFAULT_SEARCHER].replace('{0}', query),
    });
  } catch (error) {
    console.error(error);
  }
}
