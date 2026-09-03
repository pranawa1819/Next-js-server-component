import { memo } from "react";

const SlowItems = ({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <span className="font-medium text-slate-700">Text:</span>{" "}
      <span className="text-blue-600">{text}</span>
    </li>
  );
};
const SlowList = memo(({ text }: { text: string }) => {
  const items = [];
  for (let i = 0; i <5; i++) {
    items.push(<SlowItems key={i} text={text} />);
  }
  return <ul className="space-y-3 text-[20px] text-black">{items}</ul>;
});


export default SlowList;
