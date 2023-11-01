import './style.css';

class RichRadioElement extends HTMLElement {
	static observedAttributes = ['name', 'value'];

	connectedCallback() {
		const inputEl = document.createElement('input');
		inputEl.type = 'radio';
		inputEl.hidden = true;
		inputEl.name = this.getAttribute('name');
		inputEl.value = this.getAttribute('value');

		this.append(inputEl);
		this.inputEl = inputEl;

		this.inputEl.onchange = event => console.log(event.target.checked);

		this.clickHandler = this.addEventListener('click', () => {
			this.inputEl.checked = true;
			this.formRefreshRadionAttributes(this.inputEl.form);
		});
	}

	disconnectedCallback() {
		this.removeEventListener(this.clickHandler);
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		this.inputEl?.setAttribute(attr, newValue);
	}

	formRefreshRadionAttributes(form) {
		const elements = form.querySelectorAll('rich-radio');
		for(const el of elements) {
			const input = el.querySelector('input');
			if(input?.checked) el.setAttribute('selected', '')
			else el.removeAttribute('selected', '')
		}	
	}
}

customElements.define("rich-radio", RichRadioElement);