
import  Greet  from '../../components/Greet'
import { render, screen } from '@testing-library/react'
describe('group', () => {
    it('should render with then name when name is passed', () => {
        const name='Abnet'
        render(<Greet name={name} />)
        const heading=screen.getByRole('heading')   
        
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/hello Abnet/i)
        
    })
    it('should render a login button when no name is passed', () => {
        render(<Greet />)
        const button=screen.getByRole('button')   
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i)
        
    })

 
})