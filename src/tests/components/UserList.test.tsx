import { render, screen } from '@testing-library/react'
import UserList from '../../components/UserList'
import { User } from '../../entities'

describe('UserList', () => {
    it('should render no users if the useres array is empty', () => {
        render(<UserList users={[]} />)
   expect(screen.queryByText(/no user/i)).toBeInTheDocument()
        
    })
    it('should render a list of users', () => {
        const users:User[]=[{id:1,name:"user1"},{id:2,name:"user2"}]
        render(<UserList users={users} />)

      users.forEach(user=>{
        const link=screen.getByRole("link",{name:user.name})
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href",`/users/${user.id}`)
      })
       
        
    })
})