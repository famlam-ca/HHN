import { LucideIcon } from "lucide-react";

import Box from "@/components/box";

import { ServerStat } from "./server-stat";

interface ServerCardItemProps {
  label: string;
  icon: LucideIcon;
  bgColor: string;
  value: string;
  maxValue: string;
}

export const ServerCardItem = ({
  label,
  icon: Icon,
  bgColor,
  maxValue,
  value,
}: ServerCardItemProps) => {
  return (
    <Box className="mt-4 w-full bg-foreground p-6 shadow-lg hover:shadow-none">
      <Icon className={`h-10 w-10 rounded-full p-2 ${bgColor}`} />
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{label}</h3>
        <ServerStat value={value} maxValue={maxValue} />
      </div>
      <small className="text-muted-foreground">Last 30s</small>
    </Box>
  );
};
