import React, { memo } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Layer as L } from "@/packages/tf/types";
import { NodeProps } from "reactflow";

function CustomNode(props: NodeProps<L>) {
  const { data } = props;
  console.log(data);
  return (
    <div className="flex flex-col text-xs bg-gray-100">
      <div className="font-bold border-b-white border-b-2 p-2">
        <h2>{data.name}</h2>
      </div>
      <div className="px-2 pb-2">
        {data.args.map((arg) => {
          return (
            <>
              <Label key={arg.GetName()} className="text-[0.5rem] m-0">
                {arg.GetName()}
              </Label>
              <Input className="text-[0.5rem] h-[20px]" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default memo(CustomNode);
