import { articles } from "@/asset/article";
import Header from "@/components/root/Header";
import { useNavigate } from "react-router-dom";
export default function RootPage() {
  const router = useNavigate();
  return (
    <div>
      <div className="text-3xl font-bold ">랜딩페이지</div>
      <div className="text-3xl font-bold mt-16">전문가의 진단</div>
      <div className="flex gap-x-3.5 p-3.5">
        {articles.map((article) => (
          <div className="w-64 h-32 shadow-md">
            <div>{article.title}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => router("/dignosis")}
        className="w-full h-16 text-white bg-crimson-burgundy"
      >
        자가진단하러가기
      </button>
    </div>
  );
}
