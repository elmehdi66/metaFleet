

export default function Guest({ children }) {
    return (
        <section className="h-screen">
        <div className="h-full">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="http://localhost:8000/assets/images/2.png"
                className="w-full"
                alt="Sample image" />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
            </div>
          </div>
        </div>
      </section>


























    );
}
