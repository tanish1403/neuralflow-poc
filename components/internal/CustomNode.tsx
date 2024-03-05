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
import { cn } from "@/lib/utils";

interface argsValUser {
  id: string;
  Layer: L;
}

function isAllOptionalArgs(args: L["args"]) {
  return args.every((arg) => !arg.isRequired);
}

function CustomNode(props: NodeProps<L>) {
  const { id, data, isConnectable } = props;
  const { name, args } = data;
  // console.log(data, id);
  return (
    <div className="flex flex-col text-xs bg-gray-100 border active:border-orange-300 rounded-sm ">
      <Handle
        id="a"
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />

      <Accordion className="" type="single" collapsible>
        <AccordionItem
          className="flex flex-col items-center py-2"
          value="item-1"
        >
          <h2
            className={cn(
              "text-center font-bold border-b-white border-b-2 p-3 w-full",
              !isAllOptionalArgs(args) ? "mb-2" : "",
            )}
          >
            {name}
          </h2>

          <div className="px-2 ">
            {args.map((arg) => {
              if (arg.isRequired)
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
          {isAllOptionalArgs(args) && (
            <>
              <AccordionTrigger className="flex items-center gap-1 text-[0.5rem] p-3">
                Parameters
              </AccordionTrigger>
              <AccordionContent className="">
                <div className="px-2 pb-2">
                  {args.map((arg) => {
                    if (!arg.isRequired)
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
                            placeholder={String(arg.defaultValue)}
                          />
                        </div>
                      );
                  })}
                </div>
              </AccordionContent>
            </>
          )}
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
