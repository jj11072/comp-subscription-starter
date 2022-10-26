import React from 'react';
import Container from './Container';
import { Disclosure } from '@headlessui/react';

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-purple-500`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: 'What is comp?',
    answer: 'comp is a data out of house solution for your company'
  },
  {
    question: 'Why does a small business need comp?',
    answer:
      'You can save time and money by using comp. And get access to cutting edge technology to take control of your IT infrastructure. '
  },
  {
    question: 'How can comp support my business?',
    answer:
      "Don't DIY and expose yourself to risks. For peace of mind comp can help you with your IT infrastructure, data management, and more. "
  },
  {
    question: 'What services does comp offer?',
    answer:
      'comp offers a wide range of services to help you with your IT infrastructure, data management, and more. '
  }
];
