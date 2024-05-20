import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { InfinityIcon} from "lucide-react";

type Props = {
    activeCoures: {imageSrc: string; title: string;};
    hearts: number;
    points: number;
    hasActiveSubcription:boolean;
}


export const UserProgress = ({activeCoures, 
    points, 
    hearts, 
    hasActiveSubcription}:Props) =>{
    return (
        <div className="flex items-center justify-between gap-x-2
        w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCoures.imageSrc} alt={activeCoures.title} className="rounded-md border" width={32} height={32}>
                    </Image>
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/SVG/points.svg" height={28} width={28} alt="Points" className="mr-2">
                        
                    </Image>
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/SVG/heart.svg" height={22} width={22} alt="Hearts" className="mr-2">
                        
                    </Image>
                    {hasActiveSubcription ? <InfinityIcon className="h-4 w-4 stroke-[3]">
                        </InfinityIcon> : hearts}
                </Button>
            </Link>
        </div>
    );
};