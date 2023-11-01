const SE_SCREEN_WIDTH = 375;

export function isIphoneSe() {
	return window.innerWidth == SE_SCREEN_WIDTH;
}

const match = window.matchMedia(`only screen and (device-width: ${SE_SCREEN_WIDTH}px)`);

export function onIphoneSeStatusChanged(listener) {
	if(isIphoneSe()) listener(true);

	return match.addEventListener("change", ({ matches }) => {
		listener(matches)
	});
}