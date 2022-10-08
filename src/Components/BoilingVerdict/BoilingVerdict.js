import React from "react";
import classes from './BoilingVerdict.module.css';

function BoilingVerdict ( props )
{
  return (
    <h1 className={ classes.para }>
      { props.celsius >= 100 ? 'The Water Would Boil' : 'The Water Would Not Boil' }
    </h1>
  );
}
export default BoilingVerdict;