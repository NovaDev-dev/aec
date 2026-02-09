// Sombrero Vueltiao Background
import SombreroPattern from "../ui/SombreroPattern";

export default function About () {

    return (
        <section id="about" className="w-full relative bg-light text-foreground py-32 px-6 md:px-24 xl:px-64">
            
            <SombreroPattern />
            <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* TEXT CONTENT */}
                <div className="">
                <h2 className="text-4xl font-bold md:text-5xl mb-6">
                    About Us
                </h2>

                <p className="mb-4 leading-relaxed">
                    Así Es Colombia is a dance and cultural project dedicated to sharing
                    the rhythm, energy, and traditions of Colombian music.
                </p>

                <p className="mb-6 leading-relaxed">
                    Through live events, performances, and workshops, we create spaces
                    where culture is felt, not just seen — connecting people through
                    movement, music, and community.
                </p>

                </div>

                {/* VIDEO */} 
                <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/10">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Yb31EyFCRD4?si=WheFOjxCwwgc3mu4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div> 
            </div>
        </section>

    );
}