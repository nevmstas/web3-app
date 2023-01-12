const errorText = { required: 'Required' }

export const handleValidate = (values: Record<string, string>) => {
    const errors: Record<string, string> = {}
    const { addressTo, amount, keyword, message } = values
    const { required } = errorText

    if (!addressTo) {
        errors.addressTo = required
    }

    if (!amount) {
        errors.amount = required
    }

    if (!keyword) {
        errors.keyword = required
    }

    if (!message) {
        errors.message = required
    }

    return errors
}
