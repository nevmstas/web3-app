import { ReactNode } from 'react'
import { CenteredTemplate } from '../Components/templates'

export enum ETemplate {
    centered = 'CENTERED',
    default = 'DEFAULT',
}

const templatesHash = {
    [ETemplate.centered]: CenteredTemplate,
    [ETemplate.default]: CenteredTemplate,
}

export const getTemplate = ({
    type = ETemplate.default,
}: {
    type?: ETemplate
}) => templatesHash[type]
