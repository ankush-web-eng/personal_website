"use client";

export default function Skills() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-blue-500 font-bold w-fit mt-6 mb-2">
        Skills
      </h1>
      <span className="text-slate-500 py-2 mb-4">
        I have an healthy obsession of learning. In development, you need to
        contantly learn new things to keep up with the rapid growing tech market
        in presence of AI. Started learning HTML in September 2023, I have come
        a long way and learnt various technologies, frameworks and Libraries.
        And now I am mastering Full Stack by adding Generative AI to my
        Projects.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 max-md:space-y-3">
        <div className="bg-yellow-50 dark:bg-teal-100 flex flex-col w-5/6 mr-0 md:w-max p-3 space-y-2 rounded-md border-2">
          <h1 className="text-2xl text-blue-500 ml-4 font-semibold">
            Technical Skills
          </h1>
          <ul className="space-y-3 ml-2 text-slate-500">
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>T-3 Stack</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>MERN Stack</a>
            </li>

            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>TypeScript</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>JavaScript</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Python</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Golang</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>C</a>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-teal-100 flex flex-col w-5/6 ml-0 md:w-max p-3 space-y-2 rounded-md border-2">
          <h1 className="text-2xl text-blue-500 ml-4 font-semibold">
            Frameworks & <br /> Libraries
          </h1>
          <ul className="space-y-3 ml-2 text-slate-500">
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Next.js</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Django</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Flask</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>React</a>
            </li>

            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>ExpressJS</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>NodeJS</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-teal-100 flex flex-col w-5/6 mr-0 md:w-max p-3 space-y-2 rounded-md border-2">
          <h1 className="text-2xl text-blue-500 ml-4 font-semibold">
            Databases & <br />
            Others
          </h1>
          <ul className="space-y-3 ml-2 text-slate-500">
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>MongoDB</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>PostgreSQL</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Firebase</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Mongoose</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Prisma</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>AWS</a>
            </li>
            <li className="flex items-center">
              <span className="text-sky-500 mr-2">—</span>
              <a>Docker</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
