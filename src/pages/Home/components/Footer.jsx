import * as Icon from "react-feather";

const datas = [
  {
    title: "Quick Menu",
    data: [
      {
        id: 0,
        href: "#home",
        name: "Home",
      },
      {
        id: 1,
        href: "#menu",
        name: "Menu",
      },
      {
        id: 2,
        href: "#food",
        name: "Food",
      },
      {
        id: 3,
        href: "#service",
        name: "Service",
      },
      {
        id: 4,
        href: "#about",
        name: "About Us",
      },
    ],
  },
  {
    title: "SUPPORT",
    data: [
      {
        id: 5,
        href: "#feedback",
        name: "Give Us Feedback",
      },
      {
        id: 6,
        href: "#support",
        name: "Support Center",
      },
      {
        id: 7,
        href: "#faq",
        name: "Faq",
      },
      {
        id: 8,
        href: "#delivery",
        name: "Delivery Process",
      },
    ],
  },
  {
    title: "CONTACT",
    data: [
      {
        id: 9,
        href: "#num1",
        name: "+6289688206691",
      },
      {
        id: 11,
        href: "email",
        name: "isfandiaradi21@gmail.com",
      },
    ],
  },
];
export default function Footer() {
  return (
    <div className=" py-10 w-full overflow-hidden">
      <div className="flex md:justify-between">
        <Header /> {/*  header UI Lover */}
        <Navbar /> {/*quick menu etc */}
      </div>
      <div className=" md:px-20 px-7 mt-12">
        <div className="border-t border-gray-500 mb-4"></div>
        {/* hr section  */}
        <Social />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="w-1/4 me-20 flex flex-col md:px-10   text-xs md:text-lg ">
      <a href={"#"} className="font-bold mb-4">
        UI LOVER
      </a>
      <p className="font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
        doloremque!
      </p>
    </div>
  );
}

function Navbar() {
  return (
    <>
      {datas.map((item) => (
        <div key={item.title} className="w-1/4">
          <h1 className="text-xs md:text-md">{item.title}</h1>
          <div className="list-none">
            {item.data.map((items) => (
              <div
                key={items.id}
                className="text-xs md:text-lg font-light mt-1"
              >
                <a
                  href={items.href}
                  className="hover:text-blue-900 hover:font-semibold"
                >
                  {items.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function Social() {
  const classLink = "border border-gray-700 rounded-full  ";
  const classIcon =
    " text-gray-500  p-1 hover:text-blue-900 hover:font-semibold  ";

  return (
    <div className="flex justify-between">
      <div className=" flex items-center gap-5">
        <a href="" className={classLink}>
          <Icon.Facebook className={classIcon} />
        </a>
        <a href="" className={classLink}>
          <Icon.Instagram className={classIcon} />
        </a>
        <a href="" className={classLink}>
          <Icon.Youtube className={classIcon} />
        </a>
        <a href="" className={classLink}>
          <Icon.Twitter className={classIcon} />
        </a>
      </div>
      <div className="font-light text-end">
        CopyRight @ 2024 All rights reserved
      </div>
    </div>
  );
}
