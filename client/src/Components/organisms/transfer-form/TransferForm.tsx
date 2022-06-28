import { useFormik } from 'formik'
import { useState } from 'react'
import { Divider, Input, Loader, SendButton } from '../../atoms'

const TransferForm = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const formik = useFormik({
        initialValues: {
            addressTo: '',
            amount: '',
            keyword: '',
            message: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
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
                value={formik.values.addressTo}
                label={'Address To'}
            />
            <Input
                id="amount"
                name="amount"
                onChange={formik.handleChange}
                value={formik.values.amount}
                placeholder={'Amount (Eth)'}
                label={'Amount (Eth)'}
            />
            <Input
                id="keyword"
                name="keyword"
                placeholder="keyword"
                onChange={formik.handleChange}
                value={formik.values.keyword}
                label={'Keyword (GIF)'}
            />
            <Input
                id="message"
                name="message"
                placeholder="Enter message"
                onChange={formik.handleChange}
                value={formik.values.message}
                label={'Message'}
            />
            <Divider />
            {isLoading ? <Loader /> : <SendButton />}
        </form>
    )
}

export default TransferForm
