import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import mountains from '../public/mountains.jpg'

const Homepage = () => {
  return (
    <section className="bg-gray-50">
<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header className="mb-8 flex al items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
      {/* <!-- logo - start --> */}
      <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
      We are Aroha Technologies.
      </a>
      {/* <!-- logo - end --> */}

      {/* <!-- buttons - start --> */}
      <a href="#" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Sales</a>

      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>

        Menu
      </button>
      {/* <!-- buttons - end --> */}
    </header>

    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      {/* <!-- content - start --> */}
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-blue-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to introduce About Us</h1>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">We combine creativity and analytics in every engagement. We believe that the magic happens in the gap between what is expected and what is delivered, and we as a company strive to make the gap negligible. We love what we do and that makes it easier for us to learn, create, inspire, evolve, educate, and deliver in every walk of deliverance. Ultimately, we hold that having a satisfied customer is the best business strategy of all.</p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

          <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
        </div>
      </div>
      {/* <!-- content - end --> */}

      {/* <!-- image - start --> */}
      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
      <Image src={mountains} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" priority={true} />
      </div>
      {/* <!-- image - end --> */}
    </section>
  </div>
</div>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our competitive advantage</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
      {/* <!-- feature - start --> */}
      <div className="flex divide-x rounded-lg border bg-gray-50">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Growth</h3>
          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
      </div>
      {/* <!-- feature - end -->

      <!-- feature - start --> */}
      <div className="flex divide-x rounded-lg border bg-gray-50">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Security</h3>
          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
      </div>
      {/* <!-- feature - end -->

      <!-- feature - start --> */}
      <div className="flex divide-x rounded-lg border bg-gray-50">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Cloud</h3>
          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
      </div>
      {/* <!-- feature - end -->

      <!-- feature - start --> */}
      <div className="flex divide-x rounded-lg border bg-gray-50">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
      </div>
      {/* <!-- feature - end --> */}

      {/* <!-- feature - start --> */}
      <div className="flex divide-x rounded-lg border bg-gray-50">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Support</h3>
          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
      </div>
      {/* <!-- feature - end --> */}

      {/* <!-- feature - start --> */}
      <div className="flex divide-x rounded-lg border bg-gray-50">
        <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
          <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>
      </div>
      {/* <!-- feature - end --> */}
    </div>
  </div>
</div>
</section>

  )
}

export default Homepage;
