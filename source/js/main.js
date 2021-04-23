/* Capacity selector */
const capacitySelector = document.querySelector('.form__item-capacity-placeholder');
const capacityWrapper = document.querySelector('.form__item-capacity .form__item-options-wrapper');
const capacityOptions = document.querySelectorAll('.form__item-capacity .form__item-option input');

let selectedCapacityRadio = isCheck('capacity-option');
if (selectedCapacityRadio.value !== 'not-selected') {
	capacitySelector.textContent = selectedCapacityRadio.value + ' кг';
	capacitySelector.style.color = 'black';
}

capacitySelector.addEventListener('click', capacitySelectorHandler);

function capacitySelectorHandler () {
	capacityWrapper.classList.toggle('form__item-options-wrapper--active');

	if (capacityWrapper.classList.contains('form__item-options-wrapper--active')) {
		capacityOptions.forEach((item, itemIndex) => {
			item.addEventListener('change', capacityOptionsHandler);
		})
	} else {
		capacityOptions.forEach((item, itemIndex) => {
			item.removeEventListener('change', capacityOptionsHandler);
		})
	}

	capacitySelector.textContent = 'Не выбрана';
	capacitySelector.style.color = '#CFCFCF';
}

function capacityOptionsHandler (evt) {
	capacitySelector.textContent = evt.target.value + ' кг';
	capacitySelector.style.color = 'black';
	capacityWrapper.classList.remove('form__item-options-wrapper--active');
}

/* Method selector */
const methodSelector = document.querySelector('.form__item-method-placeholder');
const methodWrapper = document.querySelector('.form__item-method .form__item-options-wrapper');
const methodOptions = document.querySelectorAll('.form__item-method .form__item-option input');

let selectedMethodRadio = isCheck('method-option');
if (selectedMethodRadio.value === 'back') {
	methodSelector.textContent = 'Задняя';
} else if (selectedMethodRadio.value === 'front') {
	methodSelector.textContent = 'Передняя';
}

methodSelector.addEventListener('click', methodSelectorHandler);

function methodSelectorHandler (evt) {
	methodWrapper.classList.toggle('form__item-options-wrapper--active');

	if (methodWrapper.classList.contains('form__item-options-wrapper--active')) {
		methodOptions.forEach((item, itemIndex) => {
			item.addEventListener('change', methodOptionsHandler);
		})
	} else {
		methodOptions.forEach((item, itemIndex) => {
			item.removeEventListener('change', methodOptionsHandler);
		})
	}

	methodSelector.textContent = 'Не выбран';
	methodSelector.style.color = '#CFCFCF';
}

function methodOptionsHandler (evt) {
	if (evt.target.value === 'back') {
		methodSelector.textContent = 'Задняя';
	} else if (evt.target.value === 'front') {
		methodSelector.textContent = 'Передняя';
	}

	methodSelector.style.color = 'black';
	methodWrapper.classList.remove('form__item-options-wrapper--active');
}

/* Cargo selector */
const cargoSelector = document.querySelector('.form__item-cargo-placeholder');
const cargoWrapper = document.querySelector('.form__item-cargo .form__item-options-wrapper');
const cargoOptions = document.querySelectorAll('.form__item-cargo .form__item-option input');

cargoSelector.addEventListener('click', cargoSelectorHandler);

function cargoSelectorHandler (evt) {
	cargoWrapper.classList.toggle('form__item-options-wrapper--active');

	if (cargoWrapper.classList.contains('form__item-options-wrapper--active')) {
		cargoOptions.forEach((item, itemIndex) => {
			item.addEventListener('change', cargoOptionsHandler);
		})
	} else {
		cargoOptions.forEach((item, itemIndex) => {
			item.removeEventListener('change', cargoOptionsHandler);
		})
	}

	cargoSelector.textContent = 'Не выбран';
	cargoSelector.style.color = '#CFCFCF';
}

function cargoOptionsHandler (evt) {
	if (evt.target.value === 'heavy') {
		cargoSelector.textContent = 'Крупногабаритный';
	} else if (evt.target.value === 'not-heavy') {
		cargoSelector.textContent = 'Малогабаритный';
	}

	cargoSelector.style.color = 'black';
	cargoWrapper.classList.remove('form__item-options-wrapper--active');
}

/* Danger selector */
const dangerSelector = document.querySelector('.form__item-danger-placeholder');
const dangerWrapper = document.querySelector('.form__item-danger .form__item-options-wrapper');
const dangerOptions = document.querySelectorAll('.form__item-danger .form__item-option input');

let selectedDangerRadio = isCheck('danger-option');
if (selectedDangerRadio.value === 'class-5') {
	dangerSelector.textContent = 'Класс 5 — Окисляющие вещества и органические перекиси';
	dangerSelector.style.color = 'black';
} else if (selectedDangerRadio.value === 'class-4') {
	dangerSelector.textContent = 'Класс 4 — Легковоспламеняющиеся твердые вещества';
	dangerSelector.style.color = 'black';
} else if (selectedDangerRadio.value === 'class-3') {
	dangerSelector.textContent = 'Класс 3 — Легковоспламеняющиеся жидкости';
	dangerSelector.style.color = 'black';
} else if (selectedDangerRadio.value === 'class-2') {
	dangerSelector.textContent = 'Класс 2 — Газы';
	dangerSelector.style.color = 'black';
} else if (selectedDangerRadio.value === 'class-1') {
	dangerSelector.textContent = 'Класс 1 — Взрывчатые вещества и изделия';
	dangerSelector.style.color = 'black';
}

dangerSelector.addEventListener('click', dangerSelectorHandler);

function dangerSelectorHandler (evt) {
	dangerWrapper.classList.toggle('form__item-options-wrapper--active');

	if (dangerWrapper.classList.contains('form__item-options-wrapper--active')) {
		dangerOptions.forEach((item, itemIndex) => {
			item.addEventListener('change', dangerOptionsHandler);
		})
	} else {
		dangerOptions.forEach((item, itemIndex) => {
			item.removeEventListener('change', dangerOptionsHandler);
		})
	}

	dangerSelector.textContent = 'Не выбран';
	dangerSelector.style.color = '#CFCFCF';
}

function dangerOptionsHandler (evt) {
	if (evt.target.value === 'class-5') {
		dangerSelector.textContent = 'Класс 5 — Окисляющие вещества и органические перекиси';
	} else if (evt.target.value === 'class-4') {
		dangerSelector.textContent = 'Класс 4 — Легковоспламеняющиеся твердые вещества';
	} else if (evt.target.value === 'class-3') {
		dangerSelector.textContent = 'Класс 3 — Легковоспламеняющиеся жидкости';
	} else if (evt.target.value === 'class-2') {
		dangerSelector.textContent = 'Класс 2 — Газы';
	} else if (evt.target.value === 'class-1') {
		dangerSelector.textContent = 'Класс 1 — Взрывчатые вещества и изделия';
	}

	dangerSelector.style.color = 'black';
	dangerWrapper.classList.remove('form__item-options-wrapper--active');
}

/* Temperature toggle */
const temperatureCheckbox = document.querySelector('.form__item-temperature-input');
const temperatureContainer = document.querySelector('.form__item-temperature-range');

temperatureCheckbox.addEventListener('change', function() {
	temperatureContainer.classList.toggle('form__item-temperature-range--active');
})

/* Find checked radio */
function isCheck (item) {
	return document.querySelector(`input[name="${item}"]:checked`);
}

/* Get form data */
const form = document.querySelector('.form__wrapper form');

form.addEventListener('submit', function(evt) {
	evt.preventDefault();
	getFormData(evt.target);
})

function getFormData (data) {
	let formData = new FormData(data);
	let object = {};

	formData.forEach(function(value, key) {
		object[key] = value;
	});

	let json = JSON.stringify(object, null, 2);
}