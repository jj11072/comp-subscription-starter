import Image from 'next/image';
import React from 'react';
import Container from './Container';


import userOneImg from '../public/img/user1.jpg';
import userTwoImg from '../public/img/user2.jpg';
import userThreeImg from '../public/img/user3.jpg';

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Thanks to comp, we were able to <Mark>focus</Mark>more on our
              product and less on our <Mark>Data</Mark>
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at The Company"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              since we worked with comp our team has gained a new level of{' '}
              <Mark>productivity</Mark>
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Another Company"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full -z-10 bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The engineers at comp are <Mark>amazing</Mark> and very helpful
            </p>

            <Avatar
              image={userThreeImg}
              name="Gabrielle Winy"
              title="Co-founder of Another Company"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {' '}
      <mark className="text-purple-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-purple-900 dark:bg-purple-800 dark:text-indigo-200">
        {props.children}
      </mark>{' '}
    </>
  );
}
