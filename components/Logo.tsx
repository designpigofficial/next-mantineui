import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <Link href="/"><a><Image src="/logo.png" width={169} height={80} alt="logo" /></a></Link>
        </>
    )
}

export default Logo