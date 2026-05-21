import { AppLayout } from '@/components/layout/AppLayout';

export default function MessagesPage() {
    return (
        <AppLayout>

            <div className="min-h-screen flex">

                <aside className="w-full lg:w-[380px] border-r border-white/10 bg-[#111827]">

                    <div className="p-5 border-b border-white/10">

                        <h1 className="text-2xl font-bold">
                            Messages
                        </h1>

                        <input
                            placeholder="Search conversations"
                            className="w-full mt-4 h-12 rounded-2xl bg-[#1F2937] px-4 outline-none"
                        />
                    </div>

                    <div className="p-3">

                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F2937]">

                            <div className="w-14 h-14 rounded-full bg-[#0EA5A5]" />

                            <div>

                                <p className="font-semibold">
                                    Sarah Chen
                                </p>

                                <p className="text-sm text-[#94A3B8]">
                                    Let’s collaborate!
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="hidden lg:flex flex-1 items-center justify-center text-[#94A3B8]">

                    Select a conversation
                </main>
            </div>
        </AppLayout>
    );
}