import 'server-only';

export async function getHtml(url: string) {
  try {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'short-url',
      },
    });

    clearTimeout(timeoutId);

    return await response.text();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[lib-server getHtml]: ${error.message}`);
    }

    return null;
  }
}
