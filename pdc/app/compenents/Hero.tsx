
export function Hero () {
    return (
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-3">
              <img
                src="https://cdn1.internationalsos.com/-/jssmedia/clinics-images/talatona-clinic-luanda-banner.jpg?h=1080&iar=0&w=1920&rev=e7b22ef1a0074325acd3afdc3c1c4706&hash=75734688ED7C447B62742E49F6ED5870"
                className="rounded"
                alt=""
              />
            </div>
      
            <div className="md:col-span-1" style={{textAlign: "center"}}>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-bold text-[#1C274C] sm:text-4xl">
                Bem-vindo à Clínica PDC-AO, onde sua saúde é nossa prioridade.
                </h2>
      
                <p className="mt-4 text-[#1C274C] font-semibold ">
                Oferecemos serviços médicos de qualidade, com uma equipe de profissionais 
                dedicados e tecnologia de ponta para garantir o melhor atendimento. 
                Agende sua consulta e venha cuidar do seu bem-estar!
                </p>
                <div className=" bg-[#1C274C] mt-4 text-white hover:bg-[#535d7c] rounded-2xl px-5 py-5 font-semibold 
                flex w-full cursor-pointer" style={{justifyContent: "center"}}>
                <button> AGENDAR UMA CONSULTA</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
}