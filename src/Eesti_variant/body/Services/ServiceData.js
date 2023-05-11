
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
		name: "Bodywork",
		description: "Bodywork consists of all of the steps required to repair a damaged panel up to the paint prep stage",
		icon: iconStyle(FaCarAlt),
		imgClass: "one",
	},
	{
		name: "Paintwork",
		description: "Full or partial painting of elements in a special box",
		icon: iconStyle(GiLargePaintBrush),
		imgClass: "two",
	},
	{
		name: "Towing services",
		description: "We will tow your car from anywhere",
		icon: iconStyle(TbCarCrane),
		imgClass: "three",
	},
	{
		name: "Air conditioner",
		description: "Specialists will restore the air conditioner to working capacity or perform its refueling on special professional equipment",
		icon: iconStyle(SiPicardsurgeles),
		imgClass: "four",
	},
	{
		name: "Repair of plastic parts",
		description: "Repair of plastic car parts",
		icon: iconStyle(AiOutlineMergeCells),
		imgClass: "five",
	},
	{
		name: "Custom auto parts",
		description:
			"Selection and ordering of automotive auto parts ",
		icon: iconStyle(GiCarDoor),
		imgClass: "six",
	},
	{
		name: "Welding",
		description:
			"Welding works of any complexity ",
		icon: iconStyle(GiFastArrow),
		imgClass: "seven",
	},
	{
		name: "Restoration of body geometry",
		description:
			"Complete restoration of body geometry with the help of special professional equipment ",
		icon: iconStyle(FaCarCrash),
		imgClass: "eight",
	},
	{
		name: "Tyre fitting",
		description:
			"Tire change and balancing ",
		icon: iconStyle(GiCartwheel),
		imgClass: "nine",
	},
];