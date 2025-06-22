import React from 'react';
import { Textarea } from "@/components/ui/textarea"; // Make sure this is a real component

function TextAreaField({ label, value, onHandleInputChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <Textarea
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)}
        className="border w-full rounded p-2"
      />
    </div>
  );
}

export default TextAreaField;
