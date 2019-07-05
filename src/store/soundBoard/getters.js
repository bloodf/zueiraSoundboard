export const getAudiosByCategory = state => category => state
  .audios
  .filter(a => a.category === category);
