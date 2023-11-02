import i18next from 'i18next';
import { LanguageDetector } from './i18n-lang-detector';

import de from './lang/de.json';
import en from './lang/en.json';
import es from './lang/es.json';
import fr from './lang/fr.json';
import ja from './lang/ja.json';
import pt from './lang/pt.json';

const init = i18next
	.use(LanguageDetector)
	.init({
		fallhackLng: 'en',
		resources: {
			de: { translation: de },
			en: { translation: en },
			es: { translation: es },
			fr: { translation: fr },
			ja: { translation: ja },
			pt: { translation: pt }
		}
	})

export function onI18nInit(listener) {
	return init.then(t => listener(t, i18next.language));
}