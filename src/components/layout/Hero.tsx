// Next & React
import Image from "next/image"
import { Button } from "../common/Button";

export default function Hero () {

    return(
        <section className="relative h-screen w-full overflow-hidden text-light">
            {/* Background image */}
            <Image
                src="/hero.jpeg"
                alt="Así es Colombia dance group"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Black transparent overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center text-center">
                <div className="flex flex-col items-center select-none">
                    <span className="font-display font-bold text-5xl -mb-3">
                        Así Es
                    </span>

                    <span className="font-display font-bold text-6xl md:text-8xl text-foreground leading-[0.85] flex">
                        <span className="text-primary">Colo</span>
                        <span className="text-secondary">mb</span>
                        <span className="text-tertiary">ia</span>
                    </span>

                    {/* Subtitle */}
                    <p className="mt-4 max-w-xl text-sm md:text-base text-light/80">
                        Rooted in tradition. Driven by rhythm.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <Button className="bg-primary text-foreground font-bold hover:opacity-90 ">
                            Book an Event
                        </Button>

                        <Button className="border border-white/60 text-light hover:bg-light/10 ">
                            Watch Performances
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

