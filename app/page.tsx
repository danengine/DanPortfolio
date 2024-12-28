import Portfolio from "@/components/portfolio";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-800 relative flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative z-10 w-full max-w-3xl">
                <Portfolio />
            </div>
        </main>
    )
}