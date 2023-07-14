"use client"
import { Tooltip, Button } from "@material-tailwind/react";
 
export default function HoverBadge({firstN,lastN}) {
  return (
    // <Tooltip content="Material Tailwind">
    <Tooltip  content={`${firstN} ${lastN}`}>
      <Button>{firstN}</Button>
    </Tooltip>
  );
}