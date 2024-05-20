import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/ui/sticky-wrapper";
import { Federant } from "next/font/google";
import { Header } from "./header";
import { UserProgress } from "@/components/ui/user-progress";

const LearnPage = () => {
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCoures={{ title: "Vietnamese", imageSrc: "/SVG/VN.svg"}}
                    hearts ={5}
                    points = {100}
                    hasActiveSubcription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Vietnamese" />
                <div className="space-y-4">
                    
                </div>
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;