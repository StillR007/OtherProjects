const main = document.querySelector('main');

const tableNamesInfo = ['ФИО', 'Телефон', 'Кем приходится', ''];

const contacts = [
	{ name: "Иван", phone: "+7(999)999-99-99", who: "Банк" },
	{ name: "Борис", phone: "+7(000)000-00-00", who: "Сосед" },
	{ name: "Роман", phone: "+7(777)777-77-77", who: "Прохожий" },
];


function changeBtns(added = false) {
	let editSaveBtn = document.createElement('button');
	added ? editSaveBtn.className = 'edit active' : editSaveBtn.className = 'edit';

	let removeBtn = document.createElement('button');
	removeBtn.className = 'remove';

	let changeDiv = document.createElement('div');
	changeDiv.className = 'change';

	changeDiv.append(editSaveBtn);
	changeDiv.append(removeBtn);


	editSaveBtn.addEventListener('click', function () {
		let parent = this.closest('.contact');
		let inputs = parent.querySelectorAll('input');
		if (this.classList.contains('active')) {
			this.classList.remove('active');
			inputs.forEach(input => {
				input.readOnly = 'readonly';
			})

		} else {
			this.classList.add('active');
			inputs.forEach(input => {
				input.removeAttribute('readonly');
			})
		}
	})

	removeBtn.addEventListener('click', function () {
		let parent = this.closest('.contact');
		parent.remove();
	})

	return changeDiv
}

function addNewContact(el, added = false) {
	let contact = document.createElement('div');
	contact.className = 'contact';

	let inputName = document.createElement('input');
	inputName.value = el.name ? el.name : '';
	inputName.required = 'required';
	inputName.placeholder = 'Имя';

	let inputPhone = document.createElement('input');
	inputPhone.value = el.phone ? el.phone : '';
	inputPhone.required = 'required';
	inputPhone.placeholder = '+7(ХХХ)ХХХ-ХХ-ХХ';

	let inputWho = document.createElement('input');
	inputWho.value = el.who ? el.who : '';
	inputWho.required = 'required';
	inputWho.placeholder = 'Кем приходится';

	if (!added) {
		inputWho.readOnly = 'readonly';
		inputPhone.readOnly = 'readonly';
		inputName.readOnly = 'readonly';
	}

	let changeBtn = changeBtns(added);

	contact.append(inputName);
	contact.append(inputPhone);
	contact.append(inputWho);
	contact.append(changeBtn);

	return contact
}

function getTableNames() {
	let tableNames = document.createElement('div');
	tableNames.className = 'contact-table';

	tableNamesInfo.forEach(el => {
		let tableDiv = document.createElement('div');
		tableDiv.innerText = el;
		tableNames.append(tableDiv);
	})
	return tableNames
}

function getContacts(el) {
	let tables = getTableNames();
	let contact = addNewContact(el);

	let contactAll = document.createElement('div');
	contactAll.className = 'contact-all';

	contactAll.append(tables);
	contactAll.append(contact);

	main.append(contactAll);
}
contacts.forEach(el => {
	getContacts(el)
})


let addNewContactBtn = document.createElement('div');
addNewContactBtn.id = 'add-new-contact';
main.append(addNewContactBtn);

addNewContactBtn.addEventListener('click', function () {
	let tables = getTableNames();
	let contact = addNewContact(this, added = true);
	let contactAll = document.createElement('div');
	contactAll.className = 'contact-all';

	contactAll.append(tables);
	contactAll.append(contact);

	this.before(contactAll);
})
