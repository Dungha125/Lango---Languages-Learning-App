import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/ui/sticky-wrapper";
import { Federant } from "next/font/google";
import { Header } from "./header";

const LearnPage = () => {
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                My Sticky sidebar
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Vietnamese" />
            </FeedWrapper>
        </div>
    );
}

export default LearnPage;