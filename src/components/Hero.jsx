import ProfilePicture from '../assets/images/pfp.png'

const Hero = () => {
  return (
    <div className="border-b border-newtural-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="lg:pb-16 pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Steven Chow</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl text-transparent">Mechatronics Engineer</span>
                <p className="font-mono text-gray-200 my-6 max-w-xl text-xl px-4 py-5 font-light tracking-tighter">I am a passionate mechatronics engineering student in the Unviersity of Waterloo pursuing my undergrad.</p>
                <p className="font-mono text-gray-200 my-6 max-w-xl text-xl px-4 font-light tracking-tighter">
                    With experience of building different projects, I have honed my skill in fornt-end popular libraries like React and some CSS libraries like tailwind CSS. At the same time, with some mechanical experience in my background, I am familiar with AutoCAD and Solidworks for CAD-ing, and various manufacturing tools.</p>
            </div>
        </div>
        <div className='w-full lg:w-1/2'>
              <img src={ProfilePicture} alt="my picture"/>
        </div>
      </div>
    </div>
  )
}

export default Hero;
