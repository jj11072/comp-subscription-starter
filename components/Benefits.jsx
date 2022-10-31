import Image from 'next/image';
import React, { useRef } from 'react';
import Container from './Container';

export default function Benefits(props) {
  const { data } = props;
  const first = useRef();
  // JSON.stringify(data);

    // const styleSecondWord = (styleHook) => {
    //   styleHook = styleHook || "second-word";
    //   let words = [];
    //   for (let i = 0, len = this.length; i < len; i++) {
    //     words = (this[i].textContent || this[i].innerText).split(/\s+/);
    //     if (words[1]) {
    //      words[1] = '<span class="' + styleHook + '">' + words[1] + "</span>";
    //       this[i].innerHTML = words.join(" ");
    //     }
    //   }
    // }
    // const handleChange = useCallback(() => {
    //   document.getElementsByTagName('h3').styleSecondWord("word") ;
    // }, [])

    // window.addEventListener('load', handleChange);
    
  console.log(first.current);

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image}
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
              blurDataURL="hero.png"
              loading='lazy'
              className='-z-10'
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3
                ref={first}
                className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white word"
              >
                {data && data.title ? data.title : 'Benefits'}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data && data.desc
                  ? data.desc
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
              </p>
            </div>

            <div className="w-full mt-5 ">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item && item.desc
                    ? item.desc
                    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-purple-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: 'text-indigo-50'
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
