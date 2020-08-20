const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];

employers.forEach(employer => {
	if(employer.length > 0 && employer.trim() != '') {
		employer = employer.toLowerCase().trim();
		employer = employer[0].toUpperCase() + employer.slice(1);
		command.push(employer); 
	}
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

function calcCash(own, [...args]) {
	own = own || 0;
	const everyCash = [...args];
	let total = own;
	everyCash.forEach(CashItem => total += CashItem);
	return total;
}
const lesson = calcCash(null, data.cash);

function makeBusiness(director, teacher, allModule, gang, course,{react,add,react:[JSX]} = data) {
	teacher = teacher || 'Максим';
	const sumTech = [...react,...add, 'и другие']
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${JSX}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);


