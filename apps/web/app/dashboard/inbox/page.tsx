'use client';

import ConversationList from '@/components/dashboard/ConversationList';

import ChatWindow from '@/components/dashboard/ChatWindow';

export default function InboxPage() {
  return (
    <div className="grid lg:grid-cols-[360px_1fr] gap-5 h-[calc(100vh-170px)]">
      <div className="hidden lg:block">
        <ConversationList />
      </div>

      <ChatWindow />
    </div>
  );
}