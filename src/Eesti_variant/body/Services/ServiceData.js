
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
		name: "Auto keretööd",
		description: "Kere koosneb kõigist kahjustatud paneeli parandamiseks vajalikest sammudest kuni värvi ettevalmistamise etapini",
		icon: iconStyle(FaCarAlt),
		imgClass: "one",
	},
	{
		name: "Värvimistööd",
		description: "Full or partial painting of elements in a special box",
		icon: iconStyle(GiLargePaintBrush),
		imgClass: "two",
	},
	{
		name: "Pukseerimisteenused",
		description: "Pukseerime teie auto kõikjalt",
		icon: iconStyle(TbCarCrane),
		imgClass: "three",
	},
	{
		name: "Konditsioneeride täitmine",
		description: "Spetsialistid taastavad konditsioneeri töövõime või teostavad selle tankimise spetsiaalsel professionaalsel seadmel",
		icon: iconStyle(SiPicardsurgeles),
		imgClass: "four",
	},
	{
		name: "Plastikdetailide parandus",
		description: "Plastikust autoosade remont",
		icon: iconStyle(AiOutlineMergeCells),
		imgClass: "five",
	},
	{
		name: "Autovaruosade tellimine",
		description:"Autoosade valik ja tellimine",
		icon: iconStyle(GiCarDoor),
		imgClass: "six",
	},
	{
		name: "Keevitustööd",
		description:"Igasuguse keerukusega keevitustööd",
		icon: iconStyle(GiFastArrow),
		imgClass: "seven",
	},
	{
		name: "Kere geomeetria taastamine",
		description:"Kere geomeetria täielik taastamine spetsiaalse professionaalse varustuse abil",
		icon: iconStyle(FaCarCrash),
		imgClass: "eight",
	},
	{
		name: "Rehvivahetus",
		description:"Rehvivahetus ja tasakaalustamine",
		icon: iconStyle(GiCartwheel),
		imgClass: "nine",
	},
];