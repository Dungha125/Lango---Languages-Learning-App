import { MobileHeader } from "@/components/ui/mobile-header";
import { Sidebar } from "@/components/ui/sidebar";
type Props = {
    children: React.ReactNode;
};

const MainLayout = ({
    children,
}: Props) => {
    return(
        <>
            <MobileHeader />
            <Sidebar className="hidden lg:flex"></Sidebar>
            <main className="lg:pl-[256px]  h-full pt-[50px] lg:pt-0">
                <div className="max-w-[1056px] mx-auto pt-6 h-full">
                    {children}
                </div>
            </main>
            
        </>
    );
};

export default MainLayout;