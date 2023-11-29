'use client';

import { Col, Container } from 'react-bootstrap';
import {
  BackgroundContainer,
  Desc,
  HeroSection,
  SubTitle,
} from '../page.styled';
import {
  CardInstructur,
  DividerHr,
  InstructorName,
  ListCourse,
} from './page.styled';
import Image from 'next/image';
import instructorData from '@/lib/instructorPageData.json';
import React from 'react';

export default function Instruktur() {
  const instructors = instructorData['instructors'];

  return (
    <>
      <HeroSection>
        <h1>Instruktur Sanggar Segar</h1>
      </HeroSection>
      <BackgroundContainer $bgcolor="#FFF">
        <SubTitle $textalign="center" $color="#040B4A" $mt="32px">
          Instruktur Pelatihan
        </SubTitle>
        <Desc $textalign="center" $color="#000" className="mt-2">
          Sanggar Segar memiliki tim pelatih yang diisi oleh
          instruktur profesional yang unik dan spesialis dalam
          bidangnya masing-masing. Sanggar Segar menerima segala murid
          dengan berbagai macam latar belakang yang berbeda.
        </Desc>
        <Desc $textalign="center" $color="#000" className="">
          Hal ini yang menjadikan Sanggar Segar dapat berkembang dan
          saling belajar.
        </Desc>
        {instructors &&
          instructors.map((v: any, i: number) => (
            <React.Fragment key={i}>
              <CardInstructur>
                <Container fluid>
                  <Col sm={12} className="text-center">
                    <Image
                      src={v.img}
                      alt={v.alt}
                      className="rounded-circle"
                      width={85}
                      height={85}
                      priority
                    />
                  </Col>
                  <Col sm={12}>
                    <InstructorName className="mt-3">
                      {v.trainerName}
                    </InstructorName>
                    <Desc $color="#000" $textalign="center">
                      {v.trainerTitle}
                    </Desc>
                    <div className="mx-auto">
                      <DividerHr />
                    </div>
                    <Desc $color="#000" className="mb-1">
                      {v.trainerExpDesc1} <b>{v.trainerExpDesc2}</b>,
                      yang tersebar di:
                    </Desc>
                    <ListCourse>
                      {v.trainerCourses.map(
                        (v: string, i: number) => (
                          <li key={i}>{v}</li>
                        )
                      )}
                    </ListCourse>
                  </Col>
                </Container>
              </CardInstructur>
            </React.Fragment>
          ))}
      </BackgroundContainer>
    </>
  );
}
