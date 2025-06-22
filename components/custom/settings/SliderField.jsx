import React from 'react'
import { Slider } from "@/components/ui/slider"

function SliderField({ label, value, onHandleStyleChange, type = "px" }) {

  const formattedValue = (val) => {
    if (!val) return [0];
    return [Number(val.toString().replace(type, ''))];
  };

  return (
    <div>
      <label>{label} ({value})</label>
      <Slider
        defaultValue={formattedValue(value)}
        max={100}
        step={1}
        onValueChange={(v) => onHandleStyleChange(`${v[0]}${type}`)}
      />
    </div>
  );
}

export default SliderField;
 