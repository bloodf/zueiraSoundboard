export default {
  sideDrawer: [
    {
      category: 'faustao',
      name: 'Faustão',
      icon: 'mdi-face',
      isFavorite: true,
    },
    {
      category: 'effects',
      name: 'Efeitos',
      icon: 'mdi-flask',
      isFavorite: false,
    },
    {
      category: 'games',
      name: 'Jogos',
      icon: 'mdi-space-invaders',
      isFavorite: false,
    },
    {
      category: 'impact',
      name: 'Frases de Efeitos',
      icon: 'mdi-message-alert',
      isFavorite: false,
    },
    {
      category: 'meme',
      name: 'Memes',
      icon: 'mdi-share-variant',
      isFavorite: false,
    },
    {
      category: 'music',
      name: 'Musica',
      icon: 'mdi-music',
      isFavorite: false,
    },
    {
      category: 'nsfw',
      name: 'NSFW',
      icon: 'mdi-folder-lock',
      isFavorite: false,
    },
    {
      category: 'tv',
      name: 'Tv',
      icon: 'mdi-youtube-tv',
      isFavorite: false,
    },
    {
      category: 'youtube',
      name: 'Youtube',
      icon: 'mdi-youtube',
      isFavorite: false,
    },
  ]
    .sort((a, b) => a.category - b.category)
    .map((s, i) => ({ ...s, id: i })),
};
