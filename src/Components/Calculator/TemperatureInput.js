import React from "react";
import classes from './TemperatureInput.module.css';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange ( e )
  {
    this.props.onTemperatureChange( e.target.value );
  }

  render ()
  {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div className={ classes.header }>
        <fieldset>
          <legend>Enter Temperature In { scaleNames[ scale ] }:</legend>
          <input value={ temperature }
            onChange={ this.handleChange } />
        </fieldset>
      </div>
    );
  }
}
export default TemperatureInput;