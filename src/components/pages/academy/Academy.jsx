/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { folder2, mouse } from '../../../assets/icons';
import academy from '../../../assets/images/Rectangle-academy-landing-page.png';
import students from '../../../assets/images/group-of-people.png';
import { members } from '../../../utils';
import { bigfoot, giantlady } from '../../../assets/images';
import StudentsReview from '../../review/StudentsReview';

const Academy = () => {
  return (
    <>
      <div className="mt-[40px] w-[80%] mx-auto 1500px:w-full 1500px:mt-[100px] flex flex-col items-center justify-center">
        <h3 className="text-[12px] leading-[18px] 1500px:text-[18px] font-[500] 1500px:leading-[27px] font-poppins text-[#121212] text-center ">
          Academy
        </h3>

        <h1 className="mx-auto text-center 1500px:w-[928px] 1500px:pt-6 text-[28px] leading-10 1500px:text-[62px] 1500px:leading-[72px] font-[700] font-poppins text-[#0d1111] ">
          Unlock the knowledge of Cryptocurrency on Duwitt Academy
        </h1>

        <p className="1500px:w-[657px] mx-auto text-center pt-5 1500px:pt-[45px] text-[16px] leading-6 1500px:text-[24px] 1500px:leading-[32px] font-[400] font-poppins text-[#263238] ">
          Your trusted source for comprehensive education in the digital asset
          realm
        </p>

        <div className="relative w-[312px] 1500px:w-[1037px] mt-3 1500px:mt-6 ">
          <img src={academy} alt="" className="w-full" />

          <div className="absolute top-[-14px] right-[-14px] 1500px:top-[-35px] 1500px:right-[-35px] rounded-full bg-[#00FEA8] w-[42px] h-[42px] 1500px:w-[103px] 1500px:h-[100px] flex items-center justify-center z-[-1] ">
            <div className="rounded-full bg-[#001C15] w-[30px] h-[30px] 1500px:w-[75px] 1500px:h-[75px] " />
          </div>
        </div>

        <div className="relative mt-6 flex flex-col items-center justify-center gap-1">
          <img
            src={mouse}
            alt=""
            className="w-[18px] h-[25px] 1500px:w-[24px] 1500px:h-[36px] "
          />
          <a href="#scroll">
            <div className="absolute top-1 1500px:top-2 left-[39px] 1500px:left-[38px] w-[3px] h-[5px] 1500px:w-[4.8px] 1500px:h-[7.2px] border border-[#666270] rounded-full cursor-pointer " />
          </a>

          <p className='text-[14px] leading-[28px] 1500px:leading-[18px]'>Scroll down</p>
        </div>

        <h className="text-[18px] leading-6 1500px:text-[40px] font-[600] 1500px:leading-[52px] font-poppins 1500px:w-[806px] text-center text-[#000000] ">
          Start a journey of Life changing experinence
        </h>

        <p className="pt-3 1500px:pt-6 text-center text-[12px] leading-3 1500px:text-[18px] 1500px:leading-[24px] text-[#121212] font-[400] font-poppins 1500px:w-[546px] ">
          Develop new skills and competencies for the digital economy in our
          courses.
        </p>

        <div className="mx-auto mt-7 1500px:mt-[60px] 1500px:flex justify-center gap-6 ">
          <div className="w-[295px] 1500px:w-[587px] 1500px:h-[633px] bg-[#F2F2F2] rounded-[8px] ">
            <img
              src={students}
              alt=""
              className="w-full 1500px:h-[329px] object-cover"
            />

            <h3 className="w-[90%] mx-auto pt-3 1500px:pt-6 1500px:text-[24px] 1500px:leading-[38px] font-[600] font-poppins text-[#181817]">
              Gain a more profound expertise in the realm of cryptocurrencies.
            </h3>

            <p className="w-[90%] mx-auto pt-2 1500px:pt-5 1500px:text-[18px] 1500px:leading-[30px] font-[400] font-poppins text-[#6E6E6E]">
              Start a course learn and get familiar with the crypto world today
              with a free courses on duwitt Academy
            </p>

            <div className="w-[90%] mx-auto py-3 1500px:mt-5">
              <button className="button text-[#ffffff] font-[600] font-poppins 1500px:text-[18px] 1500px:leading-[27px] ">
                <Link to="/courses">Start now</Link>
              </button>
            </div>
          </div>

          <div className="1500px:w-[558px] 1500px:h-[355px] bg-[#F2F2F2] pt-6 rounded-[8px] ">
            <div className="flex pl-9">
              {members.map((member) => (
                <div key={member.id} className="ml-[-4px]  ">
                  <img src={member.image} alt="" className="1500px:h-[50px]" />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="w-[92%] mx-auto">
                <h3 className=" pt-3 1500px:text-[24px] 1500px:leading-[36px] font-[600] font-poppins text-[#000000]">
                  Join Members from different part of the world in learning
                  about Cryptocurrencies
                </h3>

                <p className="1500px:pt-3 1500px:text-[18px] 1500px:leading-[27px] font-[400] font-poppins text-[#6E6E6E]">
                  We will assist you in cryptocurrency, blockchain technology,
                  trading strategies, and financial management as you embark on
                  your path to financial freedom.
                </p>

                <p
                  className="py-4 1500px:text-[23px] font-[700] 1500px:leading-[31.19px] text-[#181817] underline underline-offset-8 cursor-pointer "
                  style={{ fontFamily: 'Darker Grotesque, sans-serif' }}
                >
                  <Link to="/courses">START NOW</Link>
                </p>
              </div>
            </div>

            <div className="mt-[28px] pt-5 1500px:w-[558px] 1500px:h-[264px] bg-[#F2F2F2] rounded-[8px] ">
              <div className="ml-7 theme-folder2 1500px:w-[62px] 1500px:h-[62px] flex items-center justify-center rounded-[12px] ">
                <img
                  src={folder2}
                  alt=""
                  className="1500px:w-[24.38px] 1500px:h-[28.08px] text-[#001C15] "
                />
              </div>

              <div className="w-[90%] mx-auto ">
                <p className="pt-3 1500px:text-[16px] 1500px:leading-[24px] font-[400] font-poppins ">
                  Ready to know more?
                </p>

                <p className="pt-1 1500px:text-[24px] 1500px:leading-[36px] font-[600] ">
                  Learn crypto terms the smartest way
                </p>

                <button className="mt-6 button text-[#ffffff] font-[600] font-poppins 1500px:text-[18px] 1500px:leading-[27px] ">
                  <Link to="/glossary"> Go to Glossary</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="scroll" className="mt-[65px] w-full">
          <h2 className="pt-[50px] 1500px:text-[40px] 1500px:leading-[52px] font-poppins font-[600] text-[#000000] text-center ">
            What are you looking to learn?
          </h2>

          <p className="pt-4 1500px:text-[18px] 1500px:leading-[24px] font-[400] font-poppins text-[#121212] text-center ">
            Develop new skills and competencies for the digital <br /> economy
            in our courses.
          </p>

          <div className="mt-[50px] 1500px:w-[1280px] 1500px:h-[473px] mx-auto bg-[#DEF6F5] px-[110px] py-5 flex items-center gap-x-[100px] rounded-[18px] ">
            <div>
              <p className="1500px:text-[18px] 1500px:leading-[38px]">
                Starter pack
              </p>

              <p className="my-2 1500px:text-[36px] 1500px:leading-[38px] ">
                Explore and Access Starter <br /> pack Courses
              </p>

              <p className="my-5 1500px:text-[18px] 1500px:leading-[30px] text-[#6E6E6E] ">
                Start a course learn and get familiar with the crypto <br />{' '}
                world today with a free courses on duwitt Academy
              </p>

              <p className="my-6 1500px:text-[23px] 1500px:leading-[31px] text-[#181817] underline underline-offset-8 cursor-pointer ">
                START NOW
              </p>
            </div>

            <div>
              <img
                src={giantlady}
                alt=""
                className="1500px:w-[434px] 1500px:h-[396px] "
              />
            </div>
          </div>

          <div className="mt-[50px] 1500px:w-[1280px] 1500px:h-[473px] mx-auto bg-[#FBFBFB] px-[110px] py-5 flex items-center gap-x-[100px] rounded-[18px] ">
            <div>
              <img
                src={bigfoot}
                alt=""
                className="1500px:w-[434px] 1500px:h-[396px] "
              />
            </div>

            <div>
              <p className="1500px:text-[18px] 1500px:leading-[38px]">
                Advance pack
              </p>

              <p className="my-2 1500px:text-[36px] 1500px:leading-[38px] ">
                Expand your Knowledge with <br /> Advance Courses
              </p>

              <p className="my-5 1500px:text-[18px] 1500px:leading-[30px] text-[#6E6E6E] ">
                Start a course learn and get familiar with the crypto <br />
                world today with a free courses on duwitt Academy
              </p>

              <button className="button my-6 1500px:text-[18px] 1500px:leading-[31px] text-[#00FEA8]">
                Coming Soon
              </button>
            </div>
          </div>

          <div className="w-full 1500px:h-[902px] bg-[#000A09] pt-[50px]">
            <div className="flex items-center justify-center">
              {members.map((member) => (
                <div key={member.id} className="ml-[-4px]  ">
                  <img src={member.image} alt="" className="1500px:h-[50px]" />
                </div>
              ))}
            </div>

            <h3 className="1500px:text-[40px] 1500px:leading-[52px] font-poppins font-[600] text-[#ffffff] text-center py-6 ">
              What Our students are saying about us
            </h3>

            <StudentsReview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Academy;
