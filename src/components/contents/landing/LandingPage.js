import React from 'react';
import companyLogo from "../landing/bobina-logo.PNG"

export default function LandingPage(){

    //Returning the component view
    return(
        <div className="content-wrapper" style={{minHeight: "494px" }}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">                
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Landing page</h1>
                        </div>                
                    </div>
                </div>
            </div>
        
			<div className="content">
				<div className="container-fluid">		
					<div className="row">
						<div className="callout callout-info col-lg-12">
							<h5><i className="fas fa-info"></i> ¿Necesitas una solución tecnológica?:</h5>
								Entonces tienes que leer la información a continuación.
						</div>
					</div>			
					<div className="row">
						<div className="col-lg-8 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
							<div className="card bg-light d-flex flex-fill">
								<div className="card-header text-muted border-bottom-0">
								Innovación tecnológica
								</div>
								<div className="card-body pt-0">
								<div className="row">
									<div className="col-7">
									<h2 className="lead"><b>La Bobina de Tesla</b></h2>
									<p className="text-muted text-sm" align="justify"><b>Acerca de nosotros: </b> Desarrollo de sistemas electrónicos / Componentes electrónicos / Impresoras 3D / Venta de café <br/> <br/> 
										
										Nosotros somos una empresa que se preocupa por sus clientes. Buscamos que tú puedas encontrar confianza y seguridad al momento de adquirir un producto, ofreciendo precio y calidad, comprometiéndonos a buscar aquellas piezas difíciles de conseguir. 
										También ofrecemos servicios de asesorías, impresiones en 3D, desbastado y perforación de baquelas, diseño de proyectos.
										Nuestros productos son competitivos y verificados por expertos en electrónica.<br></br>

										Sí necesitas ayuda sólo ven con nosotros e intentaremos darte una confortable respuesta. <br></br><br></br>

										<b>La Bobina de Tesla. </b>
									</p>
									<ul className="ml-4 mb-0 fa-ul text-muted">
										<li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Dirección: Circuito Loma Norte #2484, Tonalá, Jalisco.</li>
										<li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Teléfono #: + 800 - 12 12 23 52</li>
									</ul>
									</div>
									<div className="col-5 text-center">
										<br/><br/>
										<img src={companyLogo} alt="user-avatar" className="img-circle img-fluid"></img>
									</div>
								</div>
								</div>
								<div className="card-footer">
								<div className="text-right">
									<a href="#" className="btn btn-sm bg-teal">
									<i className="fas fa-comments"></i>
									</a>
									<a href="#" className="btn btn-sm btn-primary">
									<i className="fas fa-user"></i> View Profile
									</a>
								</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
							<div className="">
								<h2>La Bobina de <strong>Tesla</strong></h2>
								<p className="lead mb-5"><br/>
									Phone: +1 234 56789012
								</p>
							</div>
						</div>

					</div>

					<div className="row">
						<div className="col-8">
							<br/><br/><strong>Contáctanos:</strong><br/><br/>
							<div className="form-group">
								<label htmlFor="">Nombre</label>
								<input type="text" id="inputName" className="form-control"/>
							</div>
							<div className="form-group">
								<label htmlFor="">E-Mail</label>
								<input type="email" id="inputEmail" className="form-control"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Asunto</label>
								<input type="text" id="inputSubject" className="form-control"/>
							</div>
							<div className="form-group">
								<label htmlFor="">Mensaje</label>
							<	textarea id="inputMessage" className="form-control" rows="4"></textarea>
							</div>
								<div className="form-group">
							<input type="submit" className="btn btn-primary" value="Enviar mensaje"/>
						</div>
			</div>
					</div>
				</div>
			</div>
        </div>
    );
}
