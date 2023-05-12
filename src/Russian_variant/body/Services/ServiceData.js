
import { FaCarAlt } from 'react-icons/fa';
import { GiLargePaintBrush } from 'react-icons/gi';
import { TbCarCrane } from 'react-icons/tb';
import { SiPicardsurgeles } from 'react-icons/si';
import { AiOutlineMergeCells } from 'react-icons/ai';
import { GiCarDoor } from 'react-icons/gi';
import { GiFastArrow } from 'react-icons/gi';
import { FaCarCrash } from 'react-icons/fa';
import { GiCartwheel } from 'react-icons/gi';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const serviceData = [
	{
		name: "Кузовные работы",
		description: "Кузовные работы состоят из всех этапов, необходимых для ремонта поврежденной поверхности, вплоть до этапа подготовки к покраске",
		icon: iconStyle(FaCarAlt),
		imgClass: "one",
	},
	{
		name: "Покрасочные работы",
		description: "Полная или частичная покраска элементов в специальном боксе",
		icon: iconStyle(GiLargePaintBrush),
		imgClass: "two",
	},
	{
		name: "Услуги эвакуатора",
		description: "Эвакуируем вашу машину из любой точки",
		icon: iconStyle(TbCarCrane),
		imgClass: "three",
	},
	{
		name: "Заправка кондиционера",
		description: "Специалисты восстановят работоспособность кондиционера или произведут его заправку на специальном профессиональном оборудовании",
		icon: iconStyle(SiPicardsurgeles),
		imgClass: "four",
	},
	{
		name: "Ремонт пластиковых деталей",
		description: "Ремонт пластиковых деталей автомобиля",
		icon: iconStyle(AiOutlineMergeCells),
		imgClass: "five",
	},
	{
		name: "Заказ автозапчестей",
		description:"Выбор и заказ автомобильных запчастей",
		icon: iconStyle(GiCarDoor),
		imgClass: "six",
	},
	{
		name: "Сварочные работы",
		description: "Сварочные работы любой сложности",
		icon: iconStyle(GiFastArrow),
		imgClass: "seven",
	},
	{
		name: "Восстановление геометрии кузова",
		description: "Полное восстановление геометрии кузова с помощью специального профессионального оборудования",
		icon: iconStyle(FaCarCrash),
		imgClass: "eight",
	},
	{
		name: "Шиномотаж",
		description:
			"Замена автомобильных шин и балансировка",
		icon: iconStyle(GiCartwheel),
		imgClass: "nine",
	},
];