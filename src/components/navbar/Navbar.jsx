import logo from "../../assets/a.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex items-center bg-white shadow-lg h-14 relative">
      <div className="flex mx-auto justify-evenly gap-11">
        <div className="flex gap-11">
          <div className="flex gap-11">
            <div className="hover:cursor-pointer hover:text-primary-green">
              Home
            </div>
            <div className="hover:cursor-pointer hover:text-primary-green">
              Service
            </div>
            <div className=" relative">
              <Menu>
                <Menu.Button className="hover:cursor-pointer hover:text-primary-green">
                  Our Work
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-[-100%] z-10 mt-4 w-56 origin-top-right bg-white shadow-lg focus:outline-none outline-none text-center">
                    <div className="py-2">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "text-primary-green py-4 px-4"
                                : "text-black-700",
                              "block px-4 py-4 text-sm"
                            )}
                          >
                            Licensing Showcase
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "text-primary-green py-4 px-4"
                                : "text-black-700",
                              "block px-4 py-4 text-sm"
                            )}
                          >
                            Mascot design
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "text-primary-green py-4 px-4"
                                : "text-black-700",
                              "block px-4 py-4 text-sm"
                            )}
                          >
                            Social Media Marketing
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <div className="flex">
            <div className="w-24">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="flex gap-11">
            <div className="hover:cursor-pointer hover:text-primary-green">
              Characters
            </div>
            <div className="hover:cursor-pointer hover:text-primary-green">
              News
            </div>
            <div className="hover:cursor-pointer hover:text-primary-green">
              Contact
            </div>
          </div>
        </div>
        {/* <div className='flex items-center mr-48 gap-4 text-xs text-primary-green'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>EN <span>|</span> TH</p>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
