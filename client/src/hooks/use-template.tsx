import { ReactNode, useMemo } from 'react'
import { ETemplate, getTemplate } from '../utils/templates'

export const useTemplate = (
    type?: ETemplate
): {
    TemplateWrapper: any
} => {
    const TemplateWrapper = useMemo(() => getTemplate({ type }), [type])

    return {
        TemplateWrapper,
    }
}
