const data = [
  {
    title: 'Quick Menu',
    href: ['#home','#menu', '#food', '#service', '#about' ],
    name: ['Home', 'Menu', 'Food', 'Service', 'About Us']
  },
  {
    title: 'SUPPORT',
    href: ['#feedback','#support', '#faq', '#delivery' ],
    name: ['Give Us Feedback', 'Support Center', 'Faq', 'Delivery Process']
  },
  {
    title: 'CONTACT',
    href: ['#num1','#num2', 'email' ],
    name: ['+086822139093', '+089677348199', 'JhoenDoeLawra@gmail.com']
  },
]
export default function Footer() {
  return (
    <>
      <div className=" py-20">
        <div className="flex justify-between px-20">
         <Header />
          <QuickMenu />
         <Support />
         <Contact />
        </div>
      </div>
    </>
  );
}

function Header () {
  return (
    <div className="w-1/2 flex flex-col px-10  ">
    <a href={"#"} className="font-bold"> UI LOVER</a>
    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, doloremque!</p>
  </div>
  )
}

function QuickMenu () {
  return (
<div className="w-1/4">
            <h1>QUICK MENU</h1>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#food">Food</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
  )
}


function Support () {
  return (
    <div className="w-1/4">
    <h1>SUPPORT</h1>
    <ul>
    <li><a href="#feedback">Give Us Feedback</a></li>
      <li><a href="#support">Support Center</a></li>
      <li><a href="#faq">Faq</a></li>
      <li><a href="#delvery">Delivery Process</a></li>
    </ul>
  </div>
  )
}

function Contact (){
  return (
    <div className="w-1/4">
    <h1>CONTACT</h1>
    <ul>
    <li><a href="#num1">+086822139093</a></li>
      <li><a href="#num2">+089677348199</a></li>
      <li><a href="#email">JhoenDoeLawra@gmail.com</a></li>
    </ul>
  </div>
  )
}
