import fs from 'fs';
export async function notifyIndexNow() {
  const payload = {
    host: 'vdk.is-a.dev',
    key: 'vdkisadevindexnow2026',
    keyLocation: 'https://vdk.is-a.dev/vdkisadevindexnow2026.txt',
    urlList: [
      'https://vdk.is-a.dev/',
      'https://vdk.is-a.dev/kho-addon/',
      'https://vdk.is-a.dev/du-an/nvda-screen-reader/',
      'https://vdk.is-a.dev/du-an/radiotv/',
      'https://vdk.is-a.dev/du-an/google-tts-for-nvda/',
      'https://vdk.is-a.dev/du-an/nvda-network-optimizer/'
    ]
  };
  for (const endpoint of ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow']) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      console.log(`[IndexNow] Notified ${endpoint}: Status ${res.status}`);
    } catch (e) {
      console.warn(`[IndexNow] Failed ${endpoint}:`, e.message);
    }
  }
}
await notifyIndexNow();

