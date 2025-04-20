import React from 'react'
import Container from '../container/container';
import Typography from '@/ui/design-system/typography/typography';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

export default function NewsLetter() {
  return (
    <div className="bg-yellow my-8">
      <Container className="grid grid-cols-1 md:grid-cols-2 justify-start items-stretch px-8">
        <Link href="/#" className="items-center ">
          <Typography
            variant="h3"
            className="border-r-2 justify-between flex items-center py-8 pe-4">
            <span>S{"'"}abonner à la NewsLetter</span>
            <GoArrowRight />
          </Typography>
        </Link>
        <Link href="/#">
          <Typography
            variant="h3"
            className="items-center pt-4 justify-between flex pl-4 ">
            <span>
              Offre de transport pour les <br />
              événements
            </span>
            <GoArrowRight />
          </Typography>
        </Link>
      </Container>
    </div>
  );
}
