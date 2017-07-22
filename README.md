# D3 Thermometer

A simple library for creating an SVG thermometer graphic using D3.js. Apart from
D3 there are no other dependencies. Supports IE9 and above.

## API

### Creating a thermometer

To create a thermometer instance, use the `Thermometer` constructor with optional
config. You can specify any subset of available parameters - ones you don't specify
will be set to the default value.
```javascript
var thermometer = new Thermometer({
	mercuryColor: "rgb(220, 150, 0)"
});
```
The default configuration is as follows.

```javascript
Thermometer.defaults = {
	
	// SVG width
	width: 80,
	
	// SVG height
	height: 160,
	
	// Color of the mercury
	mercuryColor: "rgb(230, 0, 0)",
	
	// Color of the shine effect on the bulb
	bulbShineColor: "rgb(230, 200, 200)",
	
	// Color of the tube border
	borderColor: "rgb(136, 136, 136)",
	
	// Width of the tube border (pixels)
	borderWidth: 1,
	
	// Color of the empty space between tube border and mercury
	backgroundColor: "rgb(255, 255, 255)",
	
	// Radius of the thermometer bulb (pixes)
	bulbRadius: 18,
	
	// Horizontal width of the tube (pixels)
	tubeWidth: 18.5
	
};
```

### Rendering

To render the thermometer, use the `render(container, currentTemp, minTemp, maxTemp)` method.

```javascript
var container = document.getElementById('container');
thermometer.render(container, 15, 10, 20);
```

### Destroying

To destroy the thermometer, use the `destroy()` method. This simply destroys the rendered SVG.
The instance is still functional; you can call `render()` again if needed.

```javascript
thermometer.destroy();
```

### Updating

To update the current value, use the `setCurrentValue(value)` method. This will automatically
the min/max values and axis if required.

```javascript
thermometer.setCurrentValue(14);
```

To update the maximum value, use the `setMaxValue(value)` method. This will automatically
the axis.

```javascript
thermometer.setMaxValue(24);
```

To update the minimum value, use the `setMinValue(value)` method. This will automatically
the axis.

```javascript
thermometer.setMinValue(9);
```