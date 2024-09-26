import { useNavigate } from "react-router-dom";
import { cn } from "fast-jsx/util";
import { LineBreaks } from "fast-jsx/text";
import { artifacts } from "@/asset/artifact";

const result = {
  title: "당신은 척추측만증입니다.",
  description: ["Very Dangerous", "Very Dangerous", "Very Dangerous"],
};

export default function RootPage() {
  const container = {
    sizes: "w-32 h-32",
    boundaries: "border-2 border-gray-medium rounded-lg",
  };
  const router = useNavigate();
  return (
    <div className="flex flex-col gap-y-3.5">
      <div>
        <div className="text-2xl">{result.title}</div>
        <div className="text-sm text-gray-medium">
          <LineBreaks texts={result.description} />
        </div>
      </div>
      <div className="text-2xl text-blue-navy text-bold">
        다음의 보조기로 척추 건강을 보호하세요
      </div>
      <div className="p-4 grid grid-cols-4">
        {artifacts.map((artifact) => (
          <div
            onClick={() => window.open(artifact.link)}
            className={cn(container)}
          >
            {artifact.name}
          </div>
        ))}
      </div>
    </div>
  );
}
