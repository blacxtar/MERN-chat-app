const emojis = [
  "🍎",
  "🍊",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🍍",
  "🍑",
  "🥥",
  "🥝", // Fruits
  "🍔",
  "🍟",
  "🍕",
  "🌭",
  "🍣",
  "🍤",
  "🍦",
  "🍩",
  "🥪",
  "🥗", // Food
  "⚽️",
  "🏀",
  "🏈",
  "⚾️",
  "🎾",
  "🏐",
  "🏉",
  "🥏",
  "🎱",
  "🏓", // Sports
  "🌳",
  "🌲",
  "🌵",
  "🌾",
  "🌼",
  "🌻",
  "🌷",
  "🌸",
  "🌹",
  "💐", // Nature (flowers, plants)
  "🏞️",
  "🏔️",
  "🌋",
  "🏝️",
  "🌅",
  "🌄",
  "🌈",
  "🌤",
  "⛅️",
  "🌦", // Natural scenes
];

export const generateRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};
