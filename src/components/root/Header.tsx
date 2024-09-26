import { cn } from "fast-jsx/util";

export default function Header() {
  const container = {
    displays: "flex justify-between items-center",
    boundaries: "shadow-md pr-7.5",
    sizes: "w-full h-18",
  };
  return (
    <div className={cn(container)}>
      <img src="/images/logos/posturefit.jpeg" alt="posturefit" width={64} />
      <div className="font-bold text-2xl">POSTUREIT</div>
    </div>
  );
}
