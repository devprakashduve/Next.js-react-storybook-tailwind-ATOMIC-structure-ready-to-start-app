import React from 'react'
import Anchor from '../../atoms/anchor'

const NavBarLinks = () => {
  return (
    <>
     <Anchor
                  href="/login"
                  classes=" text-lime-600 block rounded-md px-3 py-2 text-base font-medium"
                >
                  LoginPage
                </Anchor>
                <Anchor
                  href="/"
                  classes=" text-lime-600 block rounded-md px-3 py-2 text-base font-medium"
                >
                  Marketplace
                </Anchor>
                <Anchor
                  href="/"
                  classes=" text-lime-600 block rounded-md px-3 py-2 text-base font-medium"
                >
                  Company
                </Anchor>
    </>
  )
}

export default NavBarLinks