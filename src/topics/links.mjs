// Internal links, hub children and keyword hand-over for existing pages after
// the November 2026 keyword-gap pass (apps-smarters.mjs, apps-tivimate.mjs,
// guides-gaps.mjs). Keywords that moved to a new, more specific page are
// removed here so every cluster has exactly one owner. `relatedFirst` puts
// the new pages at the front of the "Passend zum Thema" cards.
import { site } from '../site.mjs';

const updated = '2026-11-25';

export default {
  '/iptv-smarters-pro/': {
    updated,
    children: 'smarters',
    relatedFirst: ['/iptv-smarters-pro-fire-tv-stick/', '/iptv-smarters-pro-android/'],
    keywords: { remove: ['iptv smarters pro fire tv stick', 'iptv smarters pro firestick', 'iptv smarters pro fire stick', 'iptv smarters fire stick', 'iptv smarters firestick', 'iptv smarters on firestick', 'smarters pro firestick', 'iptv smarters pro samsung tv', 'iptv smarters samsung tv', 'iptv smarters samsung', 'iptv smarters pro lg', 'iptv smarters lg tv', 'iptv smarters lg', 'iptv smarters pro windows download', 'iptv smarters pro pc', 'smarters pro pc', 'iptv smarters pro mac', 'iptv smarters pro macbook', 'iptv smarters mac', 'iptv smarters pro iphone', 'iptv smarters iphone', 'iptv smarters pro apple tv', 'iptv smarters apple tv', 'iptv smarters pro android', 'iptv smarters android', 'iptv smarters pro android tv', 'iptv smarters pro google play', 'iptv smarters web', 'iptv smarters online', 'iptv smarters reddit'] },
  },
  '/tivimate/': {
    updated,
    children: 'tivimate',
    title: `TiviMate einrichten: Download, Login & Geräte | ${site.name}`,
    h1: 'TiviMate einrichten – Download, Login und Geräte',
    teaser: 'TiviMate installieren, Playlist per Xtream Codes oder M3U hinzufügen, Geräte im Überblick.',
    relatedFirst: ['/tivimate-fire-tv-stick/', '/tivimate-premium/', '/tivimate-alternativen/'],
    keywords: { remove: ['tivimate premium', 'tivi mate premium', 'tivimate premium account', 'tivimate premium cost', 'tivimate premium price', 'tivimate premium subscription', 'tivimate account', 'tivimate kosten', 'tivimate pro', 'tivimate price', 'tivimate subscription', 'tivimate com', 'tivimate website', 'tivimate fire tv', 'tivimate fire tv stick', 'firestick tivimate', 'tivimate firestick', 'tivimate for firestick', 'tivimate on firestick', 'tivimate samsung tv', 'tivimate apple tv', 'tivimate pc', 'tivimate for pc', 'tivimate mac', 'tivimate companion iphone'] },
  },
  '/smart-iptv/': {
    updated,
    children: 'siptv',
    relatedFirst: ['/smart-iptv-playlist-hochladen/'],
    keywords: { remove: ['my sip tv', 'my siptv', 'siptv my list', 'smart iptv my list', 'siptv list', 'smart iptv list', 'smart iptv m3u'] },
  },
  '/iptv-kaufen/': {
    updated,
    relatedFirst: ['/iptv-12-monate/'],
    keywords: { remove: ['iptv 12 monate', 'iptv 12 months', 'iptv m3u 1 jahr'] },
  },
  '/iptv-anbieter/': {
    updated,
    relatedFirst: ['/iptv-reddit-forum/', '/iptv-anbieter-liste/', '/iptv-12-monate/'],
    keywords: { remove: ['iptv lifetime', 'lifetime iptv', 'best iptv reddit', 'best iptv provider reddit', 'reddit best iptv', 'iptv reddit', 'iptv forum', 'iptvforum', 'iptv anbieter forum', 'iptv trustpilot'] },
  },
  '/iptv-deutschland/': {
    updated,
    relatedFirst: ['/iptv-telekom-vodafone/'],
    keywords: { remove: ['fernsehen über telekom', 'television and internet', 'telekom ip tv', 'magenta tv iptv', 'magenta iptv', 'vodafone ip tv', 'vodafone iptv', 'iptv vodafone', '1&1 tv pakete', 'o2 iptv'] },
  },
  '/iptv-apps/': {
    updated,
    relatedFirst: ['/iptv-player-android/', '/iptv-im-browser/'],
    keywords: { remove: ['iptv player android', 'application iptv android', 'beste iptv player android', 'iptv browser', 'iptv web', 'iptv web browser'] },
  },
  '/m3u-playlist/': {
    updated,
    relatedFirst: ['/smart-iptv-playlist-hochladen/', '/iptv-im-browser/'],
    keywords: { remove: ['m3u online'] },
  },
  '/iptv-android/': {
    updated,
    relatedFirst: ['/iptv-smarters-pro-android/', '/iptv-player-android/'],
    keywords: { remove: ['iptv smarters pro android tv'] },
  },
  '/iptv-fire-tv-stick/': { updated, relatedFirst: ['/iptv-smarters-pro-fire-tv-stick/', '/tivimate-fire-tv-stick/'] },
  '/iptv-samsung-tv/': { updated, relatedFirst: ['/iptv-smarters-pro-samsung-tv/', '/tivimate-alternativen/'] },
  '/iptv-lg-tv/': { updated, relatedFirst: ['/iptv-smarters-pro-lg-tv/', '/tivimate-alternativen/'] },
  '/iptv-pc/': { updated, relatedFirst: ['/iptv-smarters-pro-pc/', '/iptv-im-browser/'] },
  '/iptv-macbook/': { updated, relatedFirst: ['/iptv-smarters-pro-pc/'] },
  '/iptv-apple-tv/': { updated, relatedFirst: ['/iptv-smarters-pro-iphone-apple-tv/', '/tivimate-alternativen/'] },
  '/iptv-downloader/': { updated, relatedFirst: ['/iptv-smarters-pro-fire-tv-stick/', '/tivimate-fire-tv-stick/'] },
  '/iptv-testen/': { updated, relatedFirst: ['/iptv-12-monate/'] },
  '/ibo-player/': { updated, relatedFirst: ['/tivimate-alternativen/', '/iptv-12-monate/'] },
  '/was-ist-iptv/': { updated, relatedFirst: ['/iptv-telekom-vodafone/'] },
  '/iptv-4k/': { updated, relatedFirst: ['/iptv-bundesliga/', '/iptv-sport/'] },
  '/iptv-vod/': { updated, relatedFirst: ['/iptv-streamingdienste/', '/iptv-sport/'] },
  '/weitere-iptv-player/': { updated, relatedFirst: ['/iptv-anbieter-liste/'] },
  '/iptv-extreme/': { updated, relatedFirst: ['/iptv-anbieter-liste/'] },
};
