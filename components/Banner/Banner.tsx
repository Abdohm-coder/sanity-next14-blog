import Container from "../UI/Container";

export const Banner = () => {
  return (
    <section>
      <Container className="flex flex-col lg:flex-row lg:space-x-5 justify-between py-5 mb-10">
        <div className="">
          <h1 className="text-7xl  font-bold">Abdo's Projects</h1>
          <h2 className="mt-5 md:mt-0 tracking-wider">
            Welcome to{" "}
            <span className="underline decoration-4 decoration-[#F7AB0A]">
              Every Developers
            </span>{" "}
            favourite blog in the Devoshpere
          </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm font-medium">
          New product features | The latest in technology | The weekly debugging
        </p>
      </Container>
    </section>
  );
};
