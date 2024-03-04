import React, { memo, useCallback, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Layer as L } from "@/packages/tf";
import { Handle, NodeProps, Position } from "reactflow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface argsValUser {
  id: string;
  Layer: L;
}

function CustomNode(props: NodeProps<L>) {
  const { id, data, isConnectable } = props;
  // console.log(data, id);
  const [argsValUser, setArgsValUser] = useState<argsValUser>();
  return (
    <div className="flex flex-col text-xs bg-gray-100 border active:border-orange-300 rounded-sm">
      <Handle
        id="a"
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />

      <Accordion className="" type="single" collapsible>
        <AccordionItem className="flex flex-col items-center" value="item-1">
          <h2 className="text-center font-bold border-b-white border-b-2 p-3 w-full">
            {data.name}
          </h2>
          <AccordionTrigger className="flex items-center gap-1 text-[0.5rem] p-3">
            Parameters
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="px-2 pb-2">
              {data.args.map((arg) => {
                return (
                  <div key={arg.GetCaptalisedName()}>
                    <Label className="text-[0.5rem] m-0">
                      {arg.GetCaptalisedName()}
                    </Label>
                    <Input
                      className="text-[0.5rem] h-[20px]"
                      onChange={(e) => {
                        arg.value = e.target.value;
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Handle
        id="b"
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default memo(CustomNode);
