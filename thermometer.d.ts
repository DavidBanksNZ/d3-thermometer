declare class Thermometer {
	constructor(config?: Partial<IThermometerConfig>);

	setCurrentValue(value: number): void;
	setMaxValue(value: number): void;
	setMinValue(value: number): void;
	render(container: HTMLElement, currentValue: number, minValue: number, maxValue: number): void;
	destroy(): void;

	static defaults: IThermometerConfig
}

declare interface IThermometerConfig {
	backgroundColor: string;
	borderColor: string;
	borderWidth: number;
	bulbRadius: number;
	bulbShineColor: string;
	mercuryColor: string;
	height: number;
	width: number;
	tubeWidth: number;
}
