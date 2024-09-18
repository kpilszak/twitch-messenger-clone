import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window, useCreateChatClient } from 'stream-chat-react'

const apiKey = 'api-key';
const userId = 'user-id';
const token = 'authentication-token';

const filters = { members: { $in: [userId] }, type: 'messaging' };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };

const App = () => {
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: token,
    userData: { id: userId },
  });

  if (!client) return <div>Loading...</div>;

  return (
    <Chat client={client}>
      <ChannelList sort={sort} filters={filters} options={options} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default App
