import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () =>
    {
        return(
            <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
                <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/SVG/VN.svg" alt="Vietnamese" height={32} width={40} className="mr-4 rounded-md">  
                        </Image>Vietnamese
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/SVG/GBR.svg" alt="English" height={32} width={40} className="mr-4 rounded-md">  
                        </Image>English
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/SVG/CHN.svg" alt="Chinese" height={32} width={40} className="mr-4 rounded-md">  
                        </Image>Chinese
                    </Button>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image src="/SVG/JP.svg" alt="Japanese" height={32} width={40} className="mr-4 rounded-md">  
                        </Image>Japanese
                    </Button>
                </div>
            </footer>
        )
    }