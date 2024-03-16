import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("../Components/Calendly"), {
  ssr: false
});


export default function Home() {
  return (
    <div>
      <Calendly />
    </div>
  );
}