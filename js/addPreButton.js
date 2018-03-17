/*
 * Ищу все блоки с кодом, вставляю перед ними кнопку "скрыть/показать".
 */
 {
	let codeOpenButtonList = [];
	
	for(let pre of document.getElementsByTagName('pre')) {
		let div = document.createElement('div');
		div.className = 'code-block';

		let span = document.createElement('span');
		span.innerText = 'open';
		span.className = 'button';
		div.append(span);

		let isClosed = true;

		span.doOpen = function() {
			span.innerText = 'close';
			pre.style.display = 'block';
		}

		span.doClose = function() {
			span.innerText = 'open';
			pre.style.display = 'none';
		}

		span.addEventListener('click', () => {
			if(isClosed = !isClosed) {
				span.doClose();
			} 
			else {
				span.doOpen();
			}
		});

		pre.parentElement.insertBefore(div, pre);
		div.append(pre);

		codeOpenButtonList.push(span);
	}

	/*
	 * Добавлю общие кнопки "свернуть/развернуть все"
	 */
	let containers = document.getElementsByClassName('container');
	if(!(containers && containers.length > 0))
		throw Error('Nodes with className "container" not found.');

	let ul = Array.from(containers[0].children).find(a => a.tagName.toLowerCase() == 'ul');
	if(!ul)
		throw Error('UL node in container not found.');

	let div = document.createElement('div');
	containers[0].insertBefore(div, ul);

	// создаю кнопки
	let buttonExpand = document.createElement('span');
	buttonExpand.className = 'button';
	buttonExpand.innerText = 'open all';
	div.appendChild(buttonExpand);

	buttonExpand.addEventListener('click', () => {
		codeOpenButtonList.forEach(button => button.doOpen());
	})

	let buttonCollapse = document.createElement('span');
	buttonCollapse.className = 'button';
	buttonCollapse.innerText = 'close all';
	div.appendChild(buttonCollapse);

	buttonCollapse.addEventListener('click', () => {
		codeOpenButtonList.forEach(button => button.doClose());
	})
}