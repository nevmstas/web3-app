import { CenteredTemplate } from '../Components/templates'
import * as R from 'ramda'

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
}) => R.propOr(ETemplate.default, type, templatesHash)
