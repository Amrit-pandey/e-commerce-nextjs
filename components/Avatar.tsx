import Image from "next/image"

const Avatar = () => {
  return (
    <Image 
    alt="profile"
    height="30"
    width="30"
    src="/images/placeholder.jpg"
    className="hidden md:block rounded-full"
    />
  )
}

export default Avatar