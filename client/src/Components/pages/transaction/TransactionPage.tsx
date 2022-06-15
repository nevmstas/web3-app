import { useTemplate } from '../../../hooks/use-template'
import { Footer, Navbar } from '../../organisms'

const TransactionPage = () => {
    const { TemplateWrapper } = useTemplate()
    return (
        <TemplateWrapper>
            <Navbar />
            <Footer />
        </TemplateWrapper>
    )
}

export default TransactionPage
