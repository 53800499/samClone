//import Button from '@/ui/design-system/button/button';
import Logo from '@/ui/design-system/logo/logo';
import Typography from '@/ui/design-system/typography/typography'
import React from 'react'
//import { FaArrowRightArrowLeft } from 'react-icons/fa6';

export default function DesignSystem() {
  return (
    <>
      <div>
        <h2>Typography</h2>
        <Typography variant="h1" theme="black">
          CarPostal relie toute la Suisse
        </Typography>
        <Typography variant="h2" theme="black">
          Comment pouvons-nous vous aider?
        </Typography>
        <Typography variant="h3" theme="black">
          Mobilité électrique dans le Kronauer Amt
        </Typography>
        <Typography variant="body1" theme="black">
          Les cars postaux à propulsion électrique ont fait leur entrée dans la
          communauté tarifaire zurichoise (ZVV). À partir de mi-avril, les deux
          premiers cars postaux électriques seront mis en service dans le
          Kronauer Amt.
        </Typography>
        <Typography variant="subTitle" theme="black">
          Horaire reseau
        </Typography>
        <Typography variant="body2" theme="black">
          Service à la clientèle
        </Typography>
        <Typography variant="navTitle" theme="black">
          Portrait
        </Typography>
      </div>
      <div>
        <h2>Typography</h2>
        {/* <Button variant='ico' size="small" iconTheme="accent" className="p-2 rounded"><FaArrowRightArrowLeft /><Button /> */}
        <Logo/>
      </div>
      <div></div>
    </>
  );
}
