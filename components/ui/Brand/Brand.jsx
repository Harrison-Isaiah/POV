import Image from "next/image"
import Logo from "@/public/images/logo.png"

const Brand = ({ ...props }) => (
    <Image
        src={Logo}
        alt="The Creative POV logo"
        {...props}
        width={150}
        height={70}
        priority
    />
)
export default Brand