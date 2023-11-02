import { onIphoneSeStatusChanged, isIphoneSe } from './shared/lib/is-iphone-se';

const SE_LAYOUT_WIDTH = 375;
const NOT_SE_LAYOUT_WIDTH = 390;

onIphoneSeStatusChanged(isIphoneSe => {
	const html = document.documentElement;

	html.classList.toggle('is-se', isIphoneSe);
	html.classList.toggle('is-not-se', !isIphoneSe);
});

window.addEventListener('resize', () => {
	const layoutWidth = isIphoneSe() ? SE_LAYOUT_WIDTH : NOT_SE_LAYOUT_WIDTH;
	const html = document.documentElement;
	
	html.style.fontSize = `${window.innerWidth / layoutWidth * 100.0}%`;
});