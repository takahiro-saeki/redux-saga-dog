import en from './en';
import ja from './ja';

const msg = lang => {
  switch(lang) {
    case 'JA': return ja
    case 'EN': return en
    default: return en
  }
}

export default msg