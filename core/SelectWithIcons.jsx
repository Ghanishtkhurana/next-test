import Select from "react-select";
import {
  AiFillAmazonCircle,
  AiFillApple,
  AiFillAndroid
} from "react-icons/ai";
import { useState } from "react";

export default function SelectWithIcons() {
  const [selectedOption, setSelectedOption] = useState(null);
  // The label supports JSX.
  const options = [
    {
      value: "chocolate",
      label: (
        <div className="flex gap-4">
          <AiFillAmazonCircle /> Chocolate
        </div>
      )
    },
    {
      value: "strawberry",
      label: (
        <div className="flex gap-4">
          <AiFillApple /> Strawberry
        </div>
      )
    },
    {
      value: "vanilla",
      label: (
        <div className="flex gap-4">
          <AiFillAndroid /> Vanilla
        </div>
      )
    }
  ];

  return (
    <div className="App">
      <Select value={selectedOption} options={options} />
    </div>
  );
}