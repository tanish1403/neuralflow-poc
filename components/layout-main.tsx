import { cn } from "@/lib/utils";

export function LayoutMain({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col h-screen", className)}>{children}</div>
  );
}
