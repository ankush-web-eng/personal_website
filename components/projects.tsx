import { SiMongodb, SiSocketdotio, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Projects() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl text-blue-500 font-bold w-fit my-6'>Projects</h1>
      <span className='py-2 text-slate-500'>As a Developer, I have always tried to stretch my limits by testing my skills and learnig something new,
        cause this field has infinite possibilities of Developing nice and cool stuff.
      </span>
      <div className="">
        <div className="flex border-t space-x-4 items-center">
          <img src="https://img.freepik.com/premium-vector/chat-app-logo-sms-messenger-label-design-mobile-app-online-conversation-with-texting-message-ui-design-concept-vector-illustration_172533-1513.jpg?w=740" alt="chat-app" className="h-10 w-10 mr-4 rounded-2xl" />
          <div className="my-2 ">A Project developed with <span className="text-blue-500">NEXTJS</span>, <span className="text-blue-500">MONGODB</span> and <span className="text-blue-500">WEB-SOCKETS</span>. It's Primary Objective was to learn about Web-Sockets i.e. <span className="text-blue-500">Socket.io</span>. Since I was in my learning phase of NEXTJS, I also used <span className="text-blue-500">NextAuth</span> in this. This projects was majorly focused on sending data to database and then fetching it to render it on Client Side. I also included a section in it were users can write their blogs also and let all the other users read it.<br />
            <span className="flex space-x-4">
              <TbBrandNextjs size={26}/>
              <SiSocketdotio color="blue" size={26} />
              <SiMongodb color="green" size={26} />
              <SiTailwindcss color="teal" size={26} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

