import React from 'react';
import { Input } from '@/components/ui/input'; // Assuming you're using a custom Input

function InputField({ label, value, onHandleInputChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <Input
        type="text"
        value={value}
        onChange={(e) => onHandleInputChange(e.target.value)} // ✅ This fixes the error
        className="border rounded px-2 py-1"
      />
    </div>
  );
}

export default InputField;
