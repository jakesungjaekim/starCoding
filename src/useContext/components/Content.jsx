import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { UserContext } from './context/UserContext'

const Content = () => {
    const { isDark } = useContext(ThemeContext)
    const user = useContext(UserContext)

  return (
    <div
    className='content'
    style={{
        backgroundColor : isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black',
    }}
    >
    <p>좋은하루되세요 {user}, 할 수 있습니다 당신은. 이겨낼겁니다.</p>
    </div>
  )
}

export default Content