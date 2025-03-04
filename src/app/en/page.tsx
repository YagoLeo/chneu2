import Link from 'next/link';
import {
  MobileLanguageSwitcher,
  DesktopLanguageSwitcher,
} from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <div className="relative">
      <header>
        <div className="vk-container !px-3  md:!px-6">
          <div className="flex items-center py-2 md:py-4 justify-between">
            <Link href="/">
              <img
                alt="HKIC"
                loading="lazy"
                width="531"
                height="61"
                decoding="async"
                data-nimg="1"
                className="hidden md:block py-4 w-auto h-[4.5rem] md:h-20"
                src="logo1.png"
                style={{
                  color: 'transparent',
                  width: '100px',
                  height: '100px',
                }}
                data-px-source="true"
              />
              <img
                alt="HKIC"
                loading="lazy"
                width="531"
                height="61"
                decoding="async"
                data-nimg="1"
                className="md:hidden py-4 w-auto h-[4.5rem] md:h-20"
                src="logo.png"
                style={{ color: 'transparent' }}
                data-px-source="true"
              />
            </Link>
            <div className="ml-auto hidden md:flex flex-col items-end gap-y-3">
              <div className="text-neutral-600 text-sm font-light flex items-center">
                <DesktopLanguageSwitcher />
              </div>
              <nav className="hidden md:flex space-x-6 capitalize font-semibold">
                <a className="" href="#about-us">
                  About Us
                </a>
                <a className="" href="#major-areas">
                  Major Areas
                </a>
                <a className="" href="#join-us">
                  Join Us
                </a>
              </nav>
            </div>

            <div className="flex gap-x-3 md:hidden">
              <div className="flex items-center">
                <MobileLanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="relative bg-[#eeead9] h-[60dvw] xl:h-[30dvw] overflow-hidden flex flex-col">
        <div className="relative z-10 vk-container flex-grow flex items-center justify-center w-full">
          <div
            className="flex-grow px-8 md:px-24 overflow-hidden"
            style={{ height: '100%' }}
          >
            <div className="aspect-[6.13/1] mx-auto overflow-hidden w-full h-full">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="w-2/3 h-auto object-cover mx-auto"
                src="logo.png"
                data-px-source="true"
                style={{
                  color: 'transparent',
                  width: '500px',
                  marginTop: '20px',
                }}
              ></img>
            </div>
          </div>
        </div>
        <nav className="z-10 bottom-0 pb-12 w-full hidden md:block">
          <div className="vk-container-sm grid grid-cols-2 gap-x-10 group">
            <a
              className="bg-white flex items-stretch hover:scale-105 group-hover:hover:opacity-100   transition-all group-hover:opacity-75"
              href="#about-us"
            >
              <div className="w-1 h-full bg-primary"></div>
              <div className="flex flex-grow flex-col py-6 px-5">
                <div className="text-primary uppercase "> Our Story</div>
                <h5 className="font-semibold text-2xl mt-1 capitalize">
                  About Us
                </h5>
              </div>
              <div className="items-center justify-center flex px-6">
                <div className="text-lg w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="bg-white flex items-stretch hover:scale-105 group-hover:hover:opacity-100   transition-all group-hover:opacity-75"
              href="#major-areas"
            >
              <div className="w-1 h-full bg-primary"></div>
              <div className="flex flex-grow flex-col py-6 px-5">
                <div className="text-primary uppercase ">Major Areas</div>
                <h5 className="font-semibold text-2xl mt-1 capitalize">
                  Core advantage
                </h5>
              </div>
              <div className="items-center justify-center flex px-6">
                <div className="text-lg w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </nav>
      </section>
      <section
        className="relative md:overflow-hidden overflow-visible md:py-24  bg-secondary md:bg-neutral-50"
        id="about-us"
      >
        <img
          alt="left-misc"
          loading="lazy"
          width="404"
          height="432"
          decoding="async"
          data-nimg="1"
          className="hidden md:block absolute left-[-3%] top-[-15%] h-[calc(16rem+10vw)] w-auto"
          src="/left-misc.svg"
          style={{ color: 'transparent' }}
          data-px-source="true"
        />
        <div className="vk-container">
          <div className="relative z-20 overflow-y-visible py-12 md:pb-0 md:vk-container flex-grow md:flex items-center justify-end md:py-24">
            <div className=" -top-4 md:top-0 bottom-0 m-auto h-auto  md:mt-24 md:my-24 md:p-24 p-16 bg-primary-50 md:w-[85%] mr-0 relative z-20">
              <h2 className="text-5xl font-semibold mb-3">Our Story</h2>
              <div className="h-px bg-primary w-12 my-4"></div>
              <div className="text-lg leading-relaxed">
                <p style={{ marginBottom: '10px' }}>
                  HongKong CHNEU Investment Management CO., Limited (hereinafter
                  referred to as &ldquo;CHNEU&rdquo;) was registered in Hong
                  Kong in 2013, company registration number 1971883,
                  headquartered in Hong Kong, an international financial center,
                  with a registered capital of 100 million Hong Kong dollars.
                  The company&apos;s main businesses include fund management and
                  investment and trade in minerals, industry, agriculture,
                  fisheries, commerce, real estate, intelligent
                  equipment.Adhering to the core values of
                  &ldquo;professionalism, innovation and responsibility&rdquo;,
                  the company focuses on global asset allocation, cross-border
                  investment management and strategic resource integration, and
                  is committed to providing partners with efficient and stable
                  capital appreciation services, while promoting the sustainable
                  development of emerging market economies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100" id="major-areas">
        <div className="vk-container py-36">
          <header className="space-y-2 mb-24">
            <h3 className="uppercase font-bold text-5xl ">Major Areas</h3>
          </header>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            style={{ opacity: 1 }}
          >
            <div
              className="bg-white px-12 py-12 text-lg"
              style={{ opacity: 1 }}
            >
              <h6 className="text-2xl font-semibold mb-4">Core advantage</h6>
              <p className="text-neutral-500 leading-loose">
                The core competitiveness of CHNEU Investment comes from its
                excellent team background and deep resource network. The legal
                representative of the company has served as a senior executive
                of three Chinese listed enterprises, and has more than two
                decades of practical experience in the field of strategic
                decision-making, capital operation and multinational resource
                integration. The core team members are from internationally
                renowned financial institutions, and have successfully managed
                over one trillion funds, and accumulated rich investment
                experience in diversified fields such as new energy, industry,
                mining, fishery, agriculture, infrastructure, military science
                and technology. Relying on the long-term strategic partnership
                built by the founding team in China&apos;s political and
                business communities, the company has a unique resource
                coordination ability to efficiently link policy support,
                industrial capital and cross-border cooperation opportunities.
              </p>
            </div>
            <div
              className="bg-white px-12 py-12 text-lg"
              style={{ opacity: 1 }}
            >
              <h6 className="text-2xl font-semibold mb-4">
                Focus on emerging markets
              </h6>
              <p className="text-neutral-500 leading-loose">
                In response to the Belt and Road Initiative, CHNEU Investment
                have made Africa and the Middle East a strategic priority. With
                a deep understanding of Chinese capital&apos;s overseas needs
                and a forward-looking study and judgment of emerging markets, we
                will help Africa&apos;s economic reconstruction by building a
                platform for China-Africa political and business dialogue,
                introducing Chinese industrial investment, and promoting
                technology transfer and industrial incubation.
              </p>
            </div>
            <div
              className="bg-white px-12 py-12 text-lg"
              style={{ opacity: 1 }}
            >
              <h6 className="text-2xl font-semibold mb-4">
                Mission and Vision
              </h6>
              <p className="text-neutral-500 leading-loose">
                As a bridge of Asian-African capital connectivity, CHNEU
                Investment has always practiced the concept of &ldquo;capital
                for good&ldquo;. In the future, the company will continue to
                deepen its global partner network, create long-term value for
                investors through professional investment management
                capabilities and cross-regional resource integration advantages,
                and promote the upgrading of the industrial chain in emerging
                markets to achieve win-win development of economic benefits and
                social values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="border-t border-neutral-200">
        <div className="vk-container py-12">
          <div className="flex items-start flex-col lg:flex-row">
            <div className="mb-12 flex-grow">
              <img
                alt="HKIC"
                loading="lazy"
                width="531"
                height="61"
                decoding="async"
                data-nimg="1"
                className="hidden md:block py-4 w-auto h-[4.5rem] md:h-20"
                src="logo.png"
                style={{
                  color: 'transparent',
                  width: '450px',
                  height: '150px',
                }}
                data-px-source="true"
              />
            </div>
            <div className="w-full capitalize lg:w-auto grid grid-cols-2 lg:grid-cols-3 flex-grow lg:ml-48 footer-menu gap-y-14">
              <div>
                <h3>About Us</h3>
                <ul>
                  <li>
                    <a href="/zh-Hans/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/zh-Hans/structure">架构</a>
                  </li>
                  <li>
                    <a href="/zh-Hans/careers">Join Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>相关资源</h3>
                <ul>
                  <li>
                    <a href="/zh-Hans/latest-updates/speeches">News</a>
                  </li>
                  <li>
                    <a href="/zh-Hans/contact-us">联络我们</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>与我们联系</h3>
                <ul>
                  <li className="normal-case">Chairman: Donald Wu</li>
                  <li className="normal-case">0086-13168763779</li>
                  <li className="normal-case">00852-61588111</li>
                  <li className="normal-case">00852-31158669</li>
                  <li className="normal-case">
                    Rm D07,8/F, Kai Tak Fty Building, No.99king Fuk Street,
                    Sanpokong, Kowloon, Hong Kong.
                  </li>
                  <li className="normal-case">www.chneu.hk</li>
                  <li className="normal-case">chairman@chneu.hk</li>
                  <a
                    className="mt-2 h-12 w-12 bg-neutral-200 rounded-full flex items-center justify-center text-xl"
                    href="mailto:chairman@chneu.hk"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                    </svg>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-200 mt-12 gap-x-3 flex flex-col md:flex-row items-center">
            <div className="flex items-center py-6 text-neutral-500">
              <p className="text-sm">
                © 2025 香港中欧投资管理有限公司 版权所有。
              </p>
            </div>
            <nav className="text-sm flex items-center gap-x-3 md:ml-auto capitalize text-neutral-500">
              <a href="privacy-and-cookies-notice">
                privacy &amp; cookies notice
              </a>
              <a href="terms-of-use">terms of use</a>
              <a href="intellectual-property-rights">
                intellectual property rights
              </a>
            </nav>
          </div>
        </div>
      </footer> */}
      <footer
        className="bg-neutral-50 border-t border-neutral-200"
        id="join-us"
      >
        <div className="vk-container py-16">
          {/* 主要内容区 */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Logo区域 */}
            <div className="lg:w-1/4">
              <img
                alt="HKIC"
                loading="lazy"
                width="531"
                height="61"
                className="w-[200px] h-auto mb-6"
                src="logo.png"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                CHNEU is committed to providing partners with efficient and
                stable capital appreciation services while promoting the
                sustainable development of emerging market economies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4">
              {/* 电话和传真 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <ul className="space-y-4">
                  {['00852-61588111', '0086-18129986251'].map((phone) => (
                    <div key={phone} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <a
                        href={`tel:${phone}`}
                        className="text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}

                  {/* 传真 */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600">Fax：00852-31158669</span>
                  </div>
                </ul>
              </div>

              {/* 地址 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    Rm D07,8/F, Kai Tak Fty Building, No.99king Fuk Street,
                    Sanpokong, Kowloon, Hong Kong.
                  </span>
                </div>
              </div>

              {/* 网站和邮箱 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Website & Email
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="http://www.chneu.hk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      www.chneu.hk
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@chneu.hk"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      info@chneu.hk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 版权信息和底部导航 */}
          <div className="border-t border-neutral-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 CHNEU. All rights Reserved.
              </p>
              {/* <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {[
                  {
                    name: 'Privacy & Cookies Notice',
                    link: '/privacy-and-cookies-notice',
                  },
                  { name: 'Terms of Use', link: '/terms-of-use' },
                  {
                    name: 'Intellectual Property Rights',
                    link: '/intellectual-property-rights',
                  },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </nav> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
