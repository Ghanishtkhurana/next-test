"use client"
import { Badge, Button } from "@material-tailwind/react";

export function NameBadge({ name }) {
  return (
    <Badge color="yellow" withBorder>
      <Button size="sm" >{name}</Button>
    </Badge>
  );
}
