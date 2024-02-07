'use client';
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Header } from "@/components";
import { toggleMenu } from "@/store/reducer";

export default function DashboardLayout({ children }) {
    const { openMenu } = useSelector((state) => state.appReducer);
    const dispatch = useDispatch();

    return (
        <div className="flex h-screen overflow-hidden bg-slate-100">
            <Drawer isOpen={openMenu} onClose={() => dispatch(toggleMenu(!openMenu))} />
            <div className="flex flex-col md:w-full md:ml-64">
                <Header onMenuToggle={() => dispatch(toggleMenu(!openMenu))} />
                <main className="flex-1 overflow-y-auto">
                    <div className="container mx-auto py-6 px-4">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
