import dynamic from "next/dynamic";

const CalendlyBtn = dynamic(() => import("../Components/CalendlyBtn"), {
    ssr: false
});


export default function Home() {
    return (
        <div>
            <CalendlyBtn />
        </div>
    );
}