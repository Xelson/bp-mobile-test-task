import './main.css';

import './fonts/sf-pro-text.css'
import './fonts/sf-pro-display.css'

import './shared/ui/rich-radio';
import './shared/ui/button';
import './features/offer-radio.css';
import './widgets/status-bar-se.css';
import './widgets/status-bar-default.css';
import './widgets/terms-bar.css'
import './widgets/home-indicator.css'
import './widgets/card.css'
import './pages/offer';

import { onI18nInit } from './i18n';
import { onIphoneSeStatusChanged } from './shared/lib/is-iphone-se';

onIphoneSeStatusChanged(isIphoneSe => {
	document.body.classList.toggle('is-se', isIphoneSe);
});

onI18nInit((t, lang) => {
	const elements = document.querySelectorAll('[i18n]');
	for(const element of elements) {
		const i18nAttr = element.getAttribute('i18n');
		const interpolation = Object.fromEntries([...new URLSearchParams(i18nAttr)]);

		element.innerHTML = t(element.innerHTML.trim(), interpolation);
	}

	document.documentElement.lang = lang;
});