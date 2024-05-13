document.addEventListener('DOMContentLoaded', () => {
  const emojis = ['😀', '😂', '🥲', '😍', '😜', '🤯', '🥳', '😎', '🤖', '👻', '👽', '🎃', '😺', '👋', '🚀', '🌈', '⚡', '🍀', '🎁', '❤️', '🔥', '💧', '🎶', '⚽', '🍕', '🎉', '📚', '💼', '🔒', '🔑', '💡', '🎈'];
  const emojiDisplay = document.getElementById('emoji-display');
  const emojiButton = document.getElementById('emoji-button');

  emojiButton.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      emojiDisplay.textContent = emojis[randomIndex];
  });
});
