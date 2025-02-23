export default function Home() {
  return (
    <div className="relative">
      <header>
        <div className="vk-container !px-3  md:!px-6">
          <div className="flex items-center py-2 md:py-4 justify-between">
            <a href="/zh-Hans">
              <img
                alt="HKIC"
                loading="lazy"
                width="531"
                height="61"
                decoding="async"
                data-nimg="1"
                className="hidden md:block py-4 w-auto h-[4.5rem] md:h-20"
                src="/_next/static/media/logo.a4fe266a.svg"
                style={{ color: 'transparent' }}
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
                src="/_next/static/media/logo.a4fe266a.svg"
                style={{ color: 'transparent' }}
                data-px-source="true"
              />
            </a>
            <div className="ml-auto hidden md:flex flex-col items-end gap-y-3">
              <div className="text-neutral-600 text-sm font-light flex items-center">
                <div className="flex items-center gap-x-4">
                  <a href="/zh-Hans/contact-us">联络我们</a>
                </div>
                <span className="text-neutral-300 px-4">|</span>
                <div className="flex items-center gap-x-3">
                  <a hrefLang="zh-Hant-HK" className="false" href="/zh-Hant-HK">
                    繁
                  </a>
                  <a className="font-medium" href="/zh-Hans">
                    简
                  </a>
                  <a hrefLang="en" className="false" href="/en">
                    EN
                  </a>
                </div>
              </div>
              <nav className="hidden md:flex space-x-6 capitalize font-semibold">
                <a className="" href="/zh-Hans/about-us">
                  关于我们
                </a>
                <a className="" href="/zh-Hans/structure">
                  架构
                </a>
                <a className="" href="/zh-Hans/latest-updates">
                  最新动态
                </a>
                <a className="" href="/zh-Hans/careers">
                  加入我们
                </a>
              </nav>
            </div>
            <button className="md:hidden px-6">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <section className="relative bg-[#eeead9] h-[40dvw] xl:h-[30dvw] overflow-hidden flex flex-col">
        <div className="relative z-10 vk-container flex-grow flex items-center justify-center w-full">
          <div className="flex-grow px-8 md:px-24 overflow-hidden">
            <div className="aspect-[6.13/1] mx-auto overflow-hidden w-full">
              <div className="" style={{ width: '100%', height: '100%' }}>
                <canvas
                  style={{
                    verticalAlign: 'top',
                    width: '1030px',
                    height: '168px',
                  }}
                  width="2060"
                  height="336"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
        <nav className="z-10 bottom-0 pb-12 w-full hidden md:block">
          <div className="vk-container-sm grid grid-cols-3 gap-x-3 group">
            <a
              className="bg-white flex items-stretch hover:scale-105 group-hover:hover:opacity-100   transition-all group-hover:opacity-75"
              href="/zh-Hans/about-us"
            >
              <div className="w-1 h-full bg-primary"></div>
              <div className="flex flex-grow flex-col py-6 px-5">
                <div className="text-primary uppercase "> 我们的故事</div>
                <h5 className="font-semibold text-2xl mt-1 capitalize">
                  关于我们
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
              href="/zh-Hans/structure/board-of-directors"
            >
              <div className="w-1 h-full bg-primary"></div>
              <div className="flex flex-grow flex-col py-6 px-5">
                <div className="text-primary uppercase ">我们的组织</div>
                <h5 className="font-semibold text-2xl mt-1 capitalize">
                  {' '}
                  管治与架构
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
              href="/zh-Hans/latest-updates/speeches"
            >
              <div className="w-1 h-full bg-primary"></div>
              <div className="flex flex-grow flex-col py-6 px-5">
                <div className="text-primary uppercase ">我们的动向</div>
                <h5 className="font-semibold text-2xl mt-1 capitalize">
                  最新动态
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
        <img
          alt="HKIC"
          loading="lazy"
          width="2048"
          height="565"
          decoding="async"
          data-nimg="1"
          className=" translate-y-[5vw] absolute left-0 bottom-0 opacity-50"
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhk-banner-bg-2.1c1cf059.png&amp;w=2048&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhk-banner-bg-2.1c1cf059.png&amp;w=3840&amp;q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhk-banner-bg-2.1c1cf059.png&amp;w=3840&amp;q=75"
          style={{ color: 'transparent' }}
          data-px-src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhk-banner-bg-2.1c1cf059.png&amp;w=3840&amp;q=75"
          data-px-source="true"
        />
      </section>
      <section className="relative md:overflow-hidden overflow-visible md:py-24  bg-secondary md:bg-neutral-50">
        <img
          alt="left-misc"
          loading="lazy"
          width="404"
          height="432"
          decoding="async"
          data-nimg="1"
          className="hidden md:block absolute left-[-3%] top-[-15%] h-[calc(16rem+10vw)] w-auto"
          src="/_next/static/media/left-misc.31cd35e5.svg"
          style={{ color: 'transparent' }}
          data-px-source="true"
        />
        <div className="vk-container">
          <div className="relative z-20 overflow-y-visible pb-12 md:pb-0 md:vk-container flex-grow md:flex items-center justify-end md:py-24">
            <img
              alt="hkic"
              loading="lazy"
              width="2322"
              height="1524"
              decoding="async"
              data-nimg="1"
              className="md:w-[85%] absolute left-0 hidden md:block"
              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fout-mission.0f2d2080.png&amp;w=3840&amp;q=75 1x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fout-mission.0f2d2080.png&amp;w=3840&amp;q=75"
              style={{ color: 'transparent' }}
              data-px-src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fout-mission.0f2d2080.png&amp;w=3840&amp;q=75"
              data-px-source="true"
            />
            <div className=" -top-4 md:top-0 bottom-0 m-auto h-auto  md:mt-24 md:my-24 md:p-24 p-16 bg-primary-50 md:w-[85%] mr-0 relative z-20">
              <h2 className="text-5xl font-semibold mb-3">我们的故事</h2>
              <div className="h-px bg-primary w-12 my-4"></div>
              <div className="text-lg leading-relaxed">
                <p style={{ marginBottom: '10px' }}>
                  香港投资管理有限公司（港投公司）由香港特区政府全资拥有。作为耐心资本，港投公司肩负着双重使命：在追求中长期合理财务回报的同时，更重要的是，通过支持香港创科、策略性产业的发展，提升香港长远的竞争力和经济活力。我们亦在促进香港特区政府与投、产、学、研不同界别之间的合作和协同上，发挥着重要角色。
                </p>
                <p>
                  港投公司归一收纳管理包括「香港增长组合」、「大湾区投资基金」、「策略性创科基金」和「共同投资基金」共620亿港元的投资，并积极推进与三个关键主题有关的直接和共同投资，分别是硬科技、生命科技以及新能源/绿色科技，以及其相关应用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100">
        <div className="vk-container py-36">
          <header className="space-y-2 mb-24">
            <h3 className="uppercase font-bold text-5xl ">重点领域</h3>
          </header>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            style={{ opacity: 1 }}
          >
            <div
              className="bg-white px-12 py-12 text-lg"
              style={{ opacity: 1 }}
            >
              <h6 className="text-2xl font-semibold mb-4">重点主题</h6>
              <p className="text-neutral-500 leading-loose">
                目前我们的投资重点围绕三大主题：「硬科技」、「生物科技」和「新能源/绿色科技」，以及相关应用。随着我们继续为香港的未来作出投资，将持续增加更多重点主题。
              </p>
            </div>
            <div
              className="bg-white px-12 py-12 text-lg"
              style={{ opacity: 1 }}
            >
              <h6 className="text-2xl font-semibold mb-4">生态圈建设</h6>
              <p className="text-neutral-500 leading-loose">
                我们在促进香港特区政府、业界、学术、科研和投资领域之间的协同效应方面担当重要角色。我们要求战略合作伙伴和投资组合內的公司为香港的未来发展作出贡献。我们优先考虑「平台」项目，其成功将有助于港投公司生态圈中其他合作伙伴和公司的发展。
              </p>
            </div>
            <div
              className="bg-white px-12 py-12 text-lg"
              style={{ opacity: 1 }}
            >
              <h6 className="text-2xl font-semibold mb-4">跨境/全球合作平台</h6>
              <p className="text-neutral-500 leading-loose">
                我们的合作伙伴和项目涵盖源自香港并以香港为基地的，也包括其他地区的企业和机遇。所有项目都必须符合我们的双重使命。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden py-24 bg-white select-none">
        <img
          alt="left-misc"
          loading="lazy"
          width="404"
          height="432"
          decoding="async"
          data-nimg="1"
          className="absolute left-[-20%] bottom-[-20%] h-[calc(16rem+10vw)] w-auto"
          src="/_next/static/media/left-misc.31cd35e5.svg"
          style={{ color: 'transparent' }}
          data-px-source="true"
        />
        <img
          alt="right-misc"
          loading="lazy"
          width="401"
          height="432"
          decoding="async"
          data-nimg="1"
          className="absolute right-[-3%] bottom-[-15%] h-[calc(16rem+10vw)] w-auto"
          src="/_next/static/media/right-misc.15171b25.svg"
          style={{ color: 'transparent' }}
          data-px-source="true"
        />
        <div className="vk-container z-10 relative">
          <div className="flex flex-col md:flex-row items-center border border-primary py-12 px-12 bg-white">
            <button
              className="hidden md:flex border rounded-full w-16 h-16 items-center flex-shrink-0 justify-center text-primary border-primary text-xl active:bg-neutral-50"
              type="button"
            >
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
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                ></path>
              </svg>
            </button>
            <div
              className="text-center flex flex-col items-center justify-center py-12 flex-grow"
              style={{ opacity: 1, transform: 'none' }}
            >
              <div className="px-14">
                <img
                  alt=""
                  loading="lazy"
                  width="531"
                  height="61"
                  decoding="async"
                  data-nimg="1"
                  className="w-2/3 h-auto object-cover mx-auto py-24 "
                  src="/_next/static/media/logo.a4fe266a.svg"
                  data-px-source="true"
                  style={{ color: 'transparent' }}
                />
              </div>
              <p className=" md:w-2/3 text-xl font-semibold mb-2">
                香港投资管理有限公司就「新资本投资者入境计划」下的「投资组合」委任基金经理及资产管理行政及相关服务的服务提供机构（2024年12月）
              </p>
              <a
                className="bg-primary text-white font-semibold text-lg px-4 py-3 my-6"
                href="/zh-Hans/latest-updates/announces-the-appointment-of-fund-managers-and-service-provider-dec-2024-sc"
              >
                详细资料
              </a>
            </div>
            <button
              className="border rounded-full w-16 h-16 hidden md:flex items-center flex-shrink-0 justify-center text-primary border-primary text-xl active:bg-neutral-50"
              type="button"
            >
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
            </button>
            <div className="flex md:hidden gap-x-6">
              <button
                className="flex border rounded-full w-16 h-16 items-center flex-shrink-0 justify-center text-primary border-primary text-xl active:bg-neutral-50"
                type="button"
              >
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
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  ></path>
                </svg>
              </button>
              <button
                className="border rounded-full w-16 h-16 flex items-center flex-shrink-0 justify-center text-primary border-primary text-xl active:bg-neutral-50"
                type="button"
              >
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
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-neutral-200">
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
                className="pb-4 w-auto h-16"
                src="/_next/static/media/logo.a4fe266a.svg"
                style={{ color: 'transparent' }}
                data-px-source="true"
              />
            </div>
            <div className="w-full capitalize lg:w-auto grid grid-cols-2 lg:grid-cols-3 flex-grow lg:ml-48 footer-menu gap-y-14">
              <div>
                <h3>关于我们</h3>
                <ul>
                  <li>
                    <a href="/zh-Hans/about-us">关于我们</a>
                  </li>
                  <li>
                    <a href="/zh-Hans/structure">架构</a>
                  </li>
                  <li>
                    <a href="/zh-Hans/careers">加入我们</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>相关资源</h3>
                <ul>
                  <li>
                    <a href="/zh-Hans/latest-updates/speeches">最新动态</a>
                  </li>
                  <li>
                    <a href="/zh-Hans/contact-us">联络我们</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>与我们联系</h3>
                <ul>
                  <li className="normal-case">enquiry@hkic.org.hk</li>
                  <a
                    className="mt-2 h-12 w-12 bg-neutral-200 rounded-full flex items-center justify-center text-xl"
                    href="mailto:enquiry@hkic.org.hk"
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
              <p className="text-sm">© 2025 香港投资管理有限公司 版权所有。</p>
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
      </footer>
    </div>
  );
}
