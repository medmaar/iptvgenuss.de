// Outbound authority sources shared by the audit extensions (Nov 2026 SEO audit).
// Only stable reference pages: Wikipedia articles, public authorities and
// official project sites already used elsewhere on the site.
const wiki = (slug, label) => [`Wikipedia: ${label}`, `https://de.wikipedia.org/wiki/${slug}`];

export const S = {
  iptv: wiki('Internet_Protocol_Television', 'Internet Protocol Television'),
  m3u: wiki('M3U', 'M3U-Dateiformat'),
  hls: wiki('HTTP_Live_Streaming', 'HTTP Live Streaming'),
  epg: wiki('Elektronischer_Programmführer', 'Elektronischer Programmführer (EPG)'),
  vod: wiki('Video-on-Demand', 'Video-on-Demand'),
  uhd: wiki('Ultra_High_Definition_Television', 'Ultra High Definition Television'),
  hevc: wiki('High_Efficiency_Video_Coding', 'High Efficiency Video Coding (H.265/HEVC)'),
  fire: wiki('Amazon_Fire_TV', 'Amazon Fire TV'),
  androidtv: wiki('Android_TV', 'Android TV'),
  appletv: wiki('Apple_TV', 'Apple TV'),
  chromecast: wiki('Chromecast', 'Chromecast'),
  tizen: wiki('Tizen', 'Tizen (Samsung)'),
  webos: wiki('WebOS', 'webOS (LG)'),
  stb: wiki('Set-Top-Box', 'Set-Top-Box'),
  mac: wiki('MAC-Adresse', 'MAC-Adresse'),
  port: wiki('Port_(Protokoll)', 'Port (Protokoll)'),
  enigma2: wiki('Enigma2', 'Enigma2'),
  streaming: wiki('Streaming-Media', 'Streaming-Media'),
  urheber: wiki('Urheberrecht_(Deutschland)', 'Urheberrecht (Deutschland)'),
  breitband: ['Bundesnetzagentur: Breitbandmessung (offizieller Speedtest)', 'https://breitbandmessung.de/'],
  bsi: ['Bundesamt für Sicherheit in der Informationstechnik (BSI)', 'https://www.bsi.bund.de/'],
  playProtect: ['Google Play-Hilfe: Play Protect', 'https://support.google.com/googleplay/answer/2812853?hl=de'],
  vlc: ['VideoLAN: VLC media player (offizielle Website)', 'https://www.videolan.org/vlc/'],
  kodi: ['Kodi (offizielle Website)', 'https://kodi.tv/'],
  kodiSimple: ['Kodi-Wiki: PVR IPTV Simple Client', 'https://kodi.wiki/view/Add-on:PVR_IPTV_Simple_Client'],
  rfc8216: ['IETF RFC 8216: HTTP Live Streaming', 'https://datatracker.ietf.org/doc/html/rfc8216'],
  vz: ['Verbraucherzentrale: Verträge und Abos', 'https://www.verbraucherzentrale.de/wissen/vertraege-reklamation'],
  vzRechte: ['Verbraucherzentrale: Widerrufsrecht', 'https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte'],
  bnetza: ['Bundesnetzagentur', 'https://www.bundesnetzagentur.de/'],
};
