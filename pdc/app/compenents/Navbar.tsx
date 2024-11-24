import Image from "next/image";
import Logo from "../../public/logo.svg";
import Menu from "../../public/menu.svg";
import User from "../../public/user.svg";

const navLinks = [
    { name: "Especialidades"  },
    { name: "Equipa Médica" },
    { name: "Serviços" },
    { name: "Contactos" },
];

export function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:max-auto lg:px-20">
           <div className="flex items-center ">
            <Image src={Logo} alt="logo" width={50} height={50} className="cursor-pointer"/>
            
            <div className="hidden lg:flex pl-[40px] gap-x-[20px]">
                {navLinks.map((item, index) => (
                    <p className="text-[#1C274C] transition hover:text-[#535d7c] font-semibold cursor-pointer"  key={index}>
                        {item.name}
                    </p>
                ))}                
            </div>
            </div>

            <div className="flex gap-x-5 items-center">
                <p className=" cursor-pointer hidden lg:block font-semibold text-[#1C274C] transition hover:text-[#535d7c] pr-[56px]">
                    Criar Conta
                </p>
            <div className="flex items-center gap-x-2">
            <Image src={User} alt="usuario" className="cursor-pointer" width={40} height={40}/>
            </div>

            <span className=" cursor-pointer hidden font-semibold text-[#1C274C] transition hover:text-[#535d7c] lg:block px-0">
                Logar
            </span>
            
            <div className="dropdown show lg:hidden cursor-pointer">
    <button className="btn dropdown-toggle" style={{border: "transparent"}}
            id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <Image src={Menu} alt="menu hamburguer" className="lg:hidden cursor-pointer" width={40} height={40} />
    </button>
    
    <div className="dropdown-menu hidden cursor-pointer">                
        <li><a className="dropdown-item" href="/myProfile">My Profile</a></li>
        <li><a className="dropdown-item" href="/myDashboard">My Dashboard </a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/signOut">Signout</a></li>
    </div>
</div>

            </div>
        </nav>
    )
}

