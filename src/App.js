import { StreamChat } from 'stream-chat'
import { Chat, Channel, ChannelHeader, ChannelList, MessageInput, MessageList, Thread, Window } from 'stream-chat-react'

const App = () => (
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

export default App
