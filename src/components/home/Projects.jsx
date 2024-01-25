import ProjectItem from './Projectitem'
import React from "react";
import products from '../../img/products.jpg'
import wallet from '../../img/wallet.jpg'
import AFITT from '../../img/AFITT.png'
import AFI from '../../img/angular-firebase-ionic.png'
import chat from '../../img/chat.jpg'
import RVJF from '../../img/RVJF.jpg'


const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Proyectos</h1>
      <p id='info-project' className="text-center py-8">
      Estos son solo algunos ejemplos de mi trabajo. Cada proyecto refleja mi compromiso
      con la excelencia y mi deseo constante de aprender y mejorar. Estoy emocionado de compartir
      estos logros contigo y estoy disponible para discutir en detalle cualquier proyecto específico
      que despierte tu interés.
      </p>
      <div id='info-cards' className="grid sm:grid-cols-2 gap-12">

        <div >
          <p className='tittle-projects'>Administrador de productos</p>
        
        <a href='https://prodtasks.vercel.app/auth' target='_blank'>
          <ProjectItem
            img={products}
            title='Administrador de productos'
            description='Esta aplicación web ha sido diseñada para facilitar la gestión de mis
             productos de una manera visual y fácil de comprender. Proporciona a los usuarios la
              capacidad de visualizar sus productos en detalle de forma sencilla.'
              tecnologias={AFI}
          />
        </a>
        </div>
        <div >
          <p className='tittle-projects'>Billetera virtual</p>
       
        <a href='https://wallet-v1-5.vercel.app/welcome' target='_blank'>
          <ProjectItem
            img={wallet}
            title='Billetera virtual'
            description='Esta aplicación web, compatible con cualquier dispositivo, permite realizar transferencias de dinero ficticio
                             mediante códigos QR, es facil de usar con una visualización atractiva
                        en donde el usuario ingresa un monto y se convierte en un codigo QR. El otro usuario que le envía el dinero
                        solo necesita verificar el QR y enviarle el dinero, facil y sencillo para cualquier publico.'
            tecnologias={AFITT}
          />
        </a>
        </div>
        
        <div > 
          <p className='tittle-projects'>Chat en tiempo real</p>
        
        <a href='https://chat-app-liard-gamma.vercel.app/' target='_blank'>
          <ProjectItem
            img={chat}
            title='Chat en tiempo real'
            description='Esta aplicación, con un diseño responsive adaptado a computadoras y
             dispositivos móviles, ofrece un sistema de mensajería en tiempo real para dialogar
             con diferentes usuarios registrados en la aplicación.'
            tecnologias={RVJF}
          />
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
