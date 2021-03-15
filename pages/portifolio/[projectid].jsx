import {useRouter} from 'next/router'

function PortifolioProjectPage() {
    const router = useRouter()

    console.log(router.query)
    return (
        <h1>The Portifolio Project Page</h1>
    )
}

export default PortifolioProjectPage