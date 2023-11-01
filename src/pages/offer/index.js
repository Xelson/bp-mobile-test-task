import './style.css';

const form = document.querySelector('.page_offer__form');
if(form) {
	form.onsubmit = event => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const url = formData.get('offer');
		if(!url) return;

		window.location = url;
	}
}