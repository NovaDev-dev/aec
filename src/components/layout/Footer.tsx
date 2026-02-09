// React Icons
import { BsMailbox2Flag, BsTelephoneOutboundFill  } from "react-icons/bs";
// Local Components
import Logo from "../common/Logo";
import { Button } from "../common/Button";
import SombreroPattern from "../ui/SombreroPattern";

export default function Footer() {
  return (
    <section className="relative w-full overflow-hidden h-96 bg-light">
        <SombreroPattern />

        {/* Content on top */}
        <div className="absolute inset-0 flex flex-row items-center z-10 px-6 md:px-24 xl:px-64">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex">
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">
                            Email
                        </h2>
                        <a
                            href="mailto:juan@novadev.dev"
                            className="flex items-center gap-2 hover:underline underline-offset-4"
                        >   
                            <BsMailbox2Flag/>
                            hello@asiescolombia.com
                        </a>
                        

                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-bold">
                        Call
                    </h2>
                    <a
                        href="tel:+15877078530"
                        className="flex items-center gap-2 hover:underline underline-offset-4"
                    >
                        <BsTelephoneOutboundFill/>
                        (403)-827-6017
                    </a>
                </div>

                <div className="flex justify-between items-center mt-12 w-full">
                    <Logo className="hidden md:block"/>
                    <p className="text-lg ml-auto">© 2026 Así es Colombia. Website developed by NovaDev.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
