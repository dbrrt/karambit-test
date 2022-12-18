require('dotenv').config({
    path: '.env'
})

import {default as Axios, AxiosResponse} from 'axios'

const main = async () => {
    // test put file to Karambit
//     curl \
//   https://api.karambit.ai/v1/files \
//   -X PUT \
//   -H "Authorization: Bearer ${KAI_API_KEY}" \
//   -H "Transfer-Encoding: chunked" \
//   -T </path/to/file>
    await Axios.put('https://api.karambit.ai/v1/files',  {
            file: 'assets/winrar-x32-611.exe'
    }, {
        headers: {
            "Authorization": `Bearer ${process.env.KAI_API_KEY}`,
            "Transfer-Encoding": "chunked"
        }
    }).then((res: AxiosResponse) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })

    // {
    //     status: 'ok',
    //     sha256: '6f036ebd8e6f35757c3ae1be3a2b61ab1c2a9a26af723a4bcf955e16e45ec4f6'
    // }
}

main()