const prefixes = [
  'xXx_', '][', '°°', '¤', '†', '‡', '§', 'ß', '©', 'ℑ', 'ℜ', 
  '♂', '♀', '♠', '♣', '♥', '♦', 'evil_', 'emo_', 'dark_', 
  'ангел_', 'демон_', 'shadow_', 'neon_', 'cyber_', 'vamp_', 
  'ghost_', 'star_', 'moon_', 'sun_', 'sky_', 'void_', 'chaos_', 
  'frost_', 'flare_', 'blaze_', 'storm_', 'thunder_', 'nova_', 
  'quantum_', 'steel_', 'iron_', 'phantom_', 'wraith_', 'ninja_', 
  'samurai_', 'soul_', 'spirit_', 'mystic_', 'arcane_', 'cursed_', 
  'blessed_', 'eternal_', 'immortal_', 'legend_', 'myth_', 'epic_', 
  'ultra_', 'mega_', 'hyper_', 'omega_', 'alpha_', 'sigma_', 
  'zeta_', 'lambda_', 'delta_', 'gamma_', 'beta_', 'theta_', 
  'kappa_', 'psi_', 'phi_', 'omega_', '∞_', '⚡_', '☠_', '☢_', 
  '☣_', '☯_', '⚔_', '🛡_', '🔮_', '🌌_', '🌠_', '🌀_', '🌪_', '🔥_', 
  '❄_', '💀_', '👁_', '🖤_', '💫_', '✨_', '🌑_', '🌒_', '🌓_', '🌔_', 
];
  
const suffixes = [
  '_xXx', '_][', '_°°', '_666', '_69', '_88', '_13', '_XXX', 
  '_love', '_killer', '_angel', '_demon', '_forever', '_evilSky', 
  '_4ever', '_ofDoom', '_ofDarkness', '_ofChaos', '_ofFate', 
  '_ofTime', '_ofSpace', '_ofNight', '_ofDreams', '_ofSouls', 
  '_ofSteel', '_ofFire', '_ofIce', '_ofWind', '_ofStorm', 
  '_ofThunder', '_ofBlood', '_ofShadow', '_ofLight', '_ofVoid', 
  '_ofMyst', '_ofMagic', '_ofPower', '_ofWisdom', '_ofDeath', 
  '_ofLife', '_ofEternity', '_ofInfinity', '_ofLegends', 
  '_ofMyth', '_ofEpic', '_ofUltra', '_ofMega', '_ofHyper', 
  '_ofOmega', '_ofAlpha', '_ofSigma', '_ofZeta', '_ofLambda', 
  '_ofDelta', '_ofGamma', '_ofBeta', '_ofTheta', '_ofKappa', 
  '_ofPsi', '_ofPhi', '_ofOmega', '_∞', '_⚡', '_☠', '_☢', '_☣', 
  '_☯', '_⚔', '_🛡', '_🔮', '_🌌', '_🌠', '_🌀', '_🌪', '_🔥', '_❄', 
  '_💀', '_👁', '_🖤', '_💫', '_✨', '_🌑', '_🌒', '_🌓', '_🌔', '_🌕', 
];
  
const adjectives = [
  // Абстрактные и мистические  
  'загадка', 'мистерия', 'иллюзия', 'фантом', 'визионер', 'энигма', 
  'символ', 'знак', 'аркан', 'руна', 'глиф', 'шифр', 'код', 'шифт', 
  'туман', 'вихрь', 'шторм', 'пламя', 'лед', 'песок', 'пепел', 
  'лава', 'молния', 'гром', 'радуга', 'комета', 'метеор', 'звезда', 
  'луна', 'солнце', 'небо', 'космос', 'галактика', 'пустота', 
  'мечта', 'греза', 'страсть', 'ярость', 'отчаяние', 'экстаз', 
  'транс', 'кайф', 'адреналин', 'ностальгия', 'меланхолия', 'ирония', 
  'тень', 'свет', 'хром', 'сталь', 'графит', 'кристалл', 'неон', 
  'радий', 'люмин', 'вуаль', 'шёлк', 'бархат', 'пепел', 'уголь', 
  'киборг', 'кибер', 'нейрон', 'квант', 'глитч', 'бит', 
  'байт', 'код', 'шифр', 'алгоритм', 'винтаж', 'ретро', 'некро', 'готик', 'эмо', 'панк', 
  'рок', 'метал', 'гранж', 'инди', 'альтер', 'нуар', 'трип', 
  'самурай', 'ниндзя', 'рейдер', 'дроид', 'пиксель', 'спрайт', 
  'xxx', 'zzz', '404', '777', '1337', '2600', 'ff00ff', '00ffff', 
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
  

  // if (Math.random() > 0.7) {
  //   nickname += Math.floor(Math.random() * 100);
  // }
  
  return nickname;
};
