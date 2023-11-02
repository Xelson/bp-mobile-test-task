const SE_SCREEN = { W: 375, H: 667 };
const I8_SCREEN = { W: 414, H: 736 }

export function isIphoneSe() {
	return (window.innerWidth == SE_SCREEN.W && window.innerHeight == SE_SCREEN.H)
		|| (window.innerWidth == I8_SCREEN.W && window.innerHeight == I8_SCREEN.H)
}

export function onIphoneSeStatusChanged(listener) {
	let isSe = isIphoneSe();
	listener(isSe);

	window.addEventListener('resize', () => {
		const changedIsSe = isIphoneSe();
		if (isSe != changedIsSe) {
			listener(changedIsSe);
			isSe = changedIsSe;
		}
	});
}