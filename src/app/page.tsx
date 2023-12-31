'use client';
import Image from 'next/image';
import FirstSectionMobile from '@/components/IndexPage/FirstSection.mobile';
import SecondSectionMobile from '@/components/IndexPage/SecondSection.mobile';
import ThirdSectionMobile from '@/components/IndexPage/ThirdSection.mobile';
import FourthSectionMobile from '@/components/IndexPage/FourthSection.mobile';
import FifthSectionMobile from '@/components/IndexPage/FifthSection.mobile';

export default function Home() {
  return (
    <>
      <FirstSectionMobile />
      <SecondSectionMobile />
      <ThirdSectionMobile />
      <FourthSectionMobile />
      <FifthSectionMobile />
    </>
  );
}

// <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
