const allCaterories = document.querySelectorAll('.category');
const allItems = document.querySelectorAll('.item');
const allCategoryNames = document.querySelectorAll('.category-name');
const allUnderCategories = document.querySelectorAll('.category-items');

// открытие и закрытие
allCategoryNames.forEach((el, i) => {
	el.addEventListener('click', () => {
		el.classList.toggle('active');

		allUnderCategories[i].classList.toggle('active');
	});
});

const clearState = () => {
	if (document.querySelector('.replacing')) {
		document.querySelector('.replacing').classList.remove('replacing');
	}
};
// перетаскивание категорий
function dragStartFunc(e) {
	e.srcElement.classList.add('replacing');
	e.dataTransfer.setData('itemId', e.target.id);
	e.dataTransfer.effectAllowed = 'move';
}
function dragEndFunc(e) {
	this.classList.remove('replacing');
	e.dataTransfer.dropEffect = 'move';

	clearState();
}
function dragOverFunc(e) {
	e.preventDefault();
}

function dragDropFunc(e) {
	const elId = e.dataTransfer.getData('itemId', e.target.id);
	const elementNode = document.querySelector(`#${elId}`);

	if (!elementNode.classList.contains('item')) {
		e.target.closest('.category').after(document.querySelector(`#${elId}`));
	} else {
		dragItemDropFunc(e);
	}

	clearState();
}

allCaterories.forEach((el) => {
	el.addEventListener('dragstart', dragStartFunc);
	el.addEventListener('dragend', dragEndFunc);

	el.addEventListener('dragover', dragOverFunc);

	el.addEventListener('drop', dragDropFunc);
});

// перетаскивание документов
function dragItemStartFunc(e) {
	e.dataTransfer.setData('dragItem', e.target.id);
	e.dataTransfer.effectAllowed = 'move';
}
function dragItemEndFunc(e) {
	e.dataTransfer.dropEffect = 'move';
}
function dragItemOverFunc(e) {
	e.preventDefault();
}
function dragItemDropFunc(e) {
	const elId = e.dataTransfer.getData('dragItem', e.target.id);
	if (e.target.classList.contains('category-name')) {
		const elId = e.dataTransfer.getData('itemId', e.target.id);
		const elementNode = document.querySelector(`#${elId}`);

		e.target
			.closest('.category')
			.querySelector('.category-items')
			.append(elementNode);
	} else if (e.target.classList.contains('item')) {
		e.target.after(document.querySelector(`#${elId}`));
	}
}
allItems.forEach((el) => {
	el.addEventListener('dragstart', dragItemStartFunc);
	el.addEventListener('dragend', dragItemEndFunc);

	el.addEventListener('dragover', dragItemOverFunc);

	el.addEventListener('drop', dragItemDropFunc);
});
