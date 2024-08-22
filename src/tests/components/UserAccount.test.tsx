import { render, screen } from '@testing-library/react'

import UserAccount from '../../components/UserAccount'
import { User } from '../../entities'
describe('userAccout',()=>{
    const user:User={name:'Abnet',id:4,isAdmin:true}
    it('should render the name following Name: if name and id is provided', () => {
        render(<UserAccount user={user} />)
expect(screen.getByText(user.name)).toBeInTheDocument()
    })

    it('should render edit button if user is admin',()=>{
          render(<UserAccount user={user} />)
          const button=screen.getByRole('button')
          expect(button).toHaveTextContent(/edit/i)
    })
    it('should not render edit button if user is not admin',()=>{
        const user:User={name:'Abnet',id:4,isAdmin:false}
        render(<UserAccount user={user} />)
        const button=screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()
    })
})