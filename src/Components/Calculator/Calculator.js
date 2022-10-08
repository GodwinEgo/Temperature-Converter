import React from "react";
import BoilingVerdict from "../BoilingVerdict/BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import toCelsius from "./ToCelsius";
import tryConvert from './TryConvert';
import toFahrenheit from './ToFahrenheit';



class Calculator extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.handleCelsiusChange = this.handleCelsiusChange.bind( this );
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind( this );
    this.state = { temperature: '', scale: 'c' };
  }
  handleCelsiusChange ( temperature )
  {
    this.setState( { scale: 'c', temperature } );
  }
  handleFahrenheitChange ( temperature )
  {
    this.setState( { scale: 'f', temperature } );
  }

  render ()
  {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert( temperature, toCelsius ) : temperature;
    const Fahrenheit = scale === 'c' ? tryConvert( temperature, toFahrenheit ) : temperature;
    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={ celsius }
          onTemperatureChange={ this.handleCelsiusChange }
        />
        <TemperatureInput
          scale='f'
          temperature={ Fahrenheit }
          onTemperatureChange={ this.handleFahrenheitChange }
        />
        <BoilingVerdict
          celsius={ parseFloat( celsius ) }
        />
      </div>
    );
  }
}

export default Calculator;