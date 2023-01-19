import { ITemplate } from '../types'

const CenteredTemplate = ({ children }: ITemplate) => {
    return <div className="flex items-center justify-center">{children}</div>
}

export default CenteredTemplate
