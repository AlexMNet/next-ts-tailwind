export default function Home() {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-center text-slate-300">
      <div className="px-1">
        <h1 className="text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
          NextJS · Typescript · TailwindCSS
        </h1>
        <p className="text-xl capitalize">
          for more information visit{' '}
          <a
            href="https://github.com/AlexMNet/next-ts-tailwind"
            className="underline text-blue-500"
          >
            repo
          </a>
        </p>
      </div>
    </div>
  );
}
