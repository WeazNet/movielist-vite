export const MovieSection = ({ children, imageSrc }: { children: JSX.Element[] | JSX.Element, imageSrc: string }) => {
  return <section style={{ backgroundImage: `url(${imageSrc})` }} className={`min-h-screen min-w-full bg-cover`}>
    <div className="relative flex flex-col gap-6 min-w-full min-h-screen backdrop-blur-xl backdrop-brightness-50 p-6 sm:p-12">
      {children}
    </div>
  </section>
}