import { ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import UserList from './UserList'
import { FaUsers, FaArrowAltCircleLeft } from 'react-icons/fa'

const MessagingContainer = ({users}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [userListVisible, setUserListVisible] = useState(false)

    const logout = () => {
        removeCookie('Name', cookies.Name)
        removeCookie('HashedPassword', cookies.HashedPassword)
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)

        window.location.reload()
    }

    return (
        <div className='messaging-container'>
            {!userListVisible && (
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                    <button className="standard-button" onClick={logout}>Logout</button>
                    <UserList users={users} />
                </Window>
            )}
            {userListVisible && (
                <Window>
                    <ChannelHeader title='Users' />
                    <UserList users={users} />
                </Window>
            )}
            <Thread />
        </div>
    )
}

export default MessagingContainer