import { readFileSync } from 'node:fs';

// Supplied reference homepage. Existing IPTV pages remain available for later adaptation.
const document = readFileSync(new URL('./reference.html', import.meta.url), 'utf8');
export default () => ({
  path: '/',
  title: 'Genuss IPTV',
  description: 'Genuss IPTV – website design preview based on the supplied reference, with courses, grammar, media and practical information.',
  document,
});
