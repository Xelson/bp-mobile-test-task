export const LanguageDetector = {
	type: 'languageDetector',
	detect: function () { 
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get('lang') ?? navigator.language.slice(0, 2);
	}
}