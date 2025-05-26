const ruby = '../../../assets/ruby.png';
const javascript = '../../../assets/js.png';
const sql = '../../../assets/sql.png';
const GitHub = '../../../assets/github.png';
const html = '../../../assets/html.png';
const css = '../../../assets/css.png';
const ReactImg = '../../../assets/react.png';
const excel = '../../../assets/excel.png';
const powerpoint = '../../../assets/powerpoint.png';
const powerplatform = '../../../assets/power_platform.png';
const powerbi = '../../../assets/power_bi.png';
const powerautomate = '../../../assets/power_automate.png';



export const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-accent pt-10">Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ruby} alt="HTML icon" />
            <p className="my-4">RUBY</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sql} alt="HTML icon" />
            <p className="my-4">SQL</p>
            </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
            </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GIT</p>
          </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={powerplatform} alt="HTML icon" />
            <p className="my-4">POWER PLATFORM</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={powerautomate} alt="HTML icon" />
            <p className="my-4">POWER AUTOMATE</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={powerbi} alt="HTML icon" />
            <p className="my-4">POWER BI</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={excel} alt="HTML icon" />
            <p className="my-4">EXCEL</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={powerpoint} alt="HTML icon" />
            <p className="my-4">POWER POINT</p>
          </div>

        </div>
      </div>
    </div>
  );
};
