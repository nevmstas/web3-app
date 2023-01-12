import { useFormik } from 'formik'
import { useState } from 'react'
import { Divider, Input, Loader, SendButton } from '../../atoms'
import { handleValidate } from './validate'

interface TransferFormProps {
    sendTransaction: (values: any) => void
}

const TransferForm: React.FC<TransferFormProps> = ({ sendTransaction }) => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const formik = useFormik({
        initialValues: {
            addressTo: '',
            amount: '',
            keyword: '',
            message: '',
        },
        onSubmit: (values, { resetForm }) => {
            const { addressTo, amount, keyword, message } = values
            sendTransaction({ addressTo, amount, keyword, message })
            resetForm()
        },
        validate: handleValidate,
    })
    return (
        <form
            className="flex flex-col rounded-lg my-5 bg-[#2052e3] p-3 blue-glassmorpism"
            onSubmit={formik.handleSubmit}
        >
            <Input
                id="addressTo"
                name="addressTo"
                placeholder="Address To"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.addressTo}
                label={'Address To'}
                error={formik.touched.addressTo && formik.errors.addressTo}
            />
            <Input
                id="amount"
                name="amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
                placeholder={'Amount (Eth)'}
                label={'Amount (Eth)'}
                error={formik.touched.amount && formik.errors.amount}
            />
            <Input
                id="keyword"
                name="keyword"
                placeholder="keyword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.keyword}
                label={'Keyword (GIF)'}
                error={formik.touched.keyword && formik.errors.keyword}
            />
            <Input
                id="message"
                name="message"
                placeholder="Enter message"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.message}
                label={'Message'}
                error={formik.touched.message && formik.errors.message}
            />
            <Divider />
            {isLoading ? <Loader /> : <SendButton />}
        </form>
    )
}

export default TransferForm
