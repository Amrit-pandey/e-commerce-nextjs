import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="sticky z-30 bg-black shadow-sm w-full">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <input
              type="text"
              placeholder="Seacrh"
              id="text"
              className="bg-neutral-700 rounded-lg p-2 w-full max-w-md border border-neutral-500 hover:border-white transition cursor-pointer text-gray-500 font-semibold"
            />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
