const prefixes = [
    'xXx_',
    '][',
    '°°',
    '¤',
    '†',
    '‡',
    '§',
    'ß',
    '©',
    'ℑ',
    'ℜ',
    '♂',
    '♀',
    '♠',
    '♣',
    '♥',
    '♦',
    'evil_',
    'emo_',
    'dark_',
    'ангел_',
    'демон_',
  ];
  
  const suffixes = [
    '_xXx',
    '_][',
    '_°°',
    '_666',
    '_69',
    '_88',
    '_13',
    '_XXX',
    '_love',
    '_killer',
    '_angel',
    '_demon',
    '_forever',
    '_evilSky',
    '_4ever',
  ];
  
  const adjectives = [
    'крутой',
    'сексуальный',
    'ангельский',
    'демонический',
    'эмо',
    'гот',
    'пункер',
    'нежный',
    'жестокий',
    'рок',
    'метал',
    'панк',
    'сладусик',
    'пирожочек',
    'гранж',
    'депрессивный',
    'страдающий',
  ];
  

const getRandomItem = (items: string[]) => items[Math.floor(Math.random() * items.length)];


const mixCase = (text: string) => {
  return text.split('').map(char => 
    Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
  ).join('');
};


export const generateNickname = (name: string): string => {
  let nickname = '';
  

  if (Math.random() > 0.5) {
    nickname += getRandomItem(prefixes);
  }
  

  if (Math.random() > 0.5) {
    nickname += mixCase(getRandomItem(adjectives)) + '_';
  }
  

  nickname += mixCase(name);
  

  if (Math.random() > 0.5) {
    nickname += getRandomItem(suffixes);
  }
  

  if (Math.random() > 0.7) {
    nickname += Math.floor(Math.random() * 100);
  }
  
  return nickname;
};
