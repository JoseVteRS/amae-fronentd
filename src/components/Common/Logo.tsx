

import Image from 'next/image'

const LOGO_URL = "/assets/logo-amae.png";

export const Logo = () => {
  return (
    <Image 
        src={LOGO_URL}
        width={60}
        height={60}
        alt="Logo de Amae fotografía | Mar"
    />
  )
}
