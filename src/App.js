import React, { useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat'
import { Chat, Channel } from 'stream-chat-react'
import Auth from './components/Auth'
import MessagingContainer from './components/MessagingContainer'
import Video from './components/Video'
import 'stream-chat-css/dist/css/index.css'

const filters = { type: 'messaging' }
const options = { state: true, presence: true, limit: 10 }
const sort = { last_message_at: -1 }

const client = StreamChat.getInstance('6t3abd8grfbz')

const App = () => {
  const [clientReady, setClientReady] = useState(false);
  const [channel, setChannel] = useState(null);

  const authToken = true

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: 'dave-matthews',
            name: 'Dave Matthews'
          },
          ''
        )

        const channel = await client.channel('gaming', 'gaming-demo', {
          name: 'Gaming Demo'
        })
        setChannel(channel)

        setClientReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    setupClient()
  }, [])

  if (!clientReady) return null;

  return (
    <>
      {!authToken && <Auth />}
      {authToken && <Chat client={client} darkMode={true}>
        <Channel channel={channel}>
          <Video />
          <MessagingContainer />
        </Channel>
      </Chat>}
    </>
  )
}

export default App
