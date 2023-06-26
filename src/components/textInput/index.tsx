import { useState } from "react";

export function TextInput({
  placeholder = "Search...",
  onInputChange = (newValue: any) => {
    console.log(newValue);
  },
}) {
  const [value, setValue] = useState("");
  function handleChange(e: any) {
    const newValue = e.target.value;
    setValue(newValue);
    onInputChange(newValue);
  }

  return (
    <div className="flex border border-LIGTH-BLUE rounded">
      <input
        type="text"
        className="block w-full px-4 py-2 text-BLUE-1 bg-white border rounded-md focus:border-BLUE-2 focus:ring-LIGTH-BLUE focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
