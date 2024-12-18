import Logo from "../../public/logo.svg";

export function Footer () {
    return(

    <footer className="bg-gray-100">
    <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
          className="inline-block rounded-full bg-[#1C274C] p-2 text-white shadow transition hover:bg-[#535d7c] sm:p-3 lg:p-4"
          href="paracima"
        >
          <span className="sr-only">Para cima</span>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
  
      <div className="lg:flex lg:items-end lg:justify-between">
        <div>
          <div className="flex justify-center lg:justify-start ">
          {/* <img src={Logo} alt="logo" width={50} height={50}/> */}
          
<svg fill="#1C274C"  version="1.1" xmlns="http://www.w3.org/2000/svg"  width={40} height={40} viewBox="0 0 512 512">

<g id="7935ec95c421cee6d86eb22ecd135960">

<path  d="M309.215,304.749
		c30.414,57.874,62.227,114.961,94.801,173.782c4.402,7.997,11.826,19.137,8.67,26.073c-4.242,9.332-25.275,5.539-41.855,5.539
		c-19.523,0-36.902,3.53-49.764-0.799c-13.125-4.416-25.002-36.989-31.6-48.979c-27.934-50.773-57.736-105.254-85.319-154.831
		c47.294-86.353,103.108-180.979,152.448-270.165c7.572-13.661,13.748-33.771,31.613-34.769C396.68,0.14,413.596,1.4,430.875,1.4
		c14.32,0,36.428-2.108,40.295,3.941c6.6,10.367-10.842,30.466-15.807,39.51C407.158,132.44,356.971,217.997,309.215,304.749z
		 M125.953,357.67c15.657-1.908,23.653-23.777,30.789-36.341c22.631-39.746,45.697-80.715,66.369-117.705
		c-12.774-23.728-29.766-51.385-44.249-76.624c-6.25-10.891-10.979-25.087-25.263-25.275c-25.275,0-50.575,0-75.85,0
		c-4.129,0.586-7.846,1.635-8.682,5.527c-2.046,12.438,5.625,19.486,9.48,26.073c8.97,15.407,17.978,29.866,27.646,46.608
		c3.094,5.327,12.874,18.938,12.625,24.489c-0.15,3.718-7.598,12.638-10.254,17.378c-21.607,38.586-39.334,70.735-60.83,109.009
		c-3.194,5.689-10.267,12.301-7.896,20.534c1.023,3.605,6.749,6.637,9.469,6.325C74.853,357.67,100.403,357.67,125.953,357.67z">

</path>

</g>

</svg>
          </div>
        </div>
  
        <ul
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
        >
          <li>
            <a className="text-[#1C274C] transition hover:text-[#535d7c] font-medium" href="#"> Especialidades </a>
          </li>
  
          <li>
            <a className="text-[#1C274C] transition hover:text-[#535d7c] font-medium" href="#"> Equipa Médica </a>
          </li>
  
          <li>
            <a className="text-[#1C274C] transition hover:text-[#535d7c] font-medium" href="#"> Serviços </a>
          </li>
  
          <li>
            <a className="text-[#1C274C] transition hover:text-[#535d7c] font-medium" href="#"> Contactos </a>
          </li>
        </ul>
      </div>
  
      <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
        &copy; Clínica PDC-AO. Todos os direitos reservados.
      </p>
    </div>
  </footer>
  )
}
