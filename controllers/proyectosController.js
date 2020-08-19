const Proyectos = require('../models/proyectos');

exports.proyectosHome = (req, res) => {
    res.render('index', {
      nombrePagina : 'proyectos'
    });
  }
exports.formularioProyecto = (req, res) =>{
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}
exports.nuevoProyecto = async (req , res) => { 
  
  //enviar a la consola lo que el usuario escriba
  //console.log(req.body);
  //validar que tengamos algo en el input
  const { nombre } = req.body;
  let errores = [];
  if(!nombre) {
    errores.push({'texto' : 'Agrega un nombre al proyecto'})
  }

  //SI HAY ERRORES
  if(errores.length > 0 ){
    res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo Proyecto',
      errores
    })
  }else{
    //no hay errores insertar a la base de datos
    
    const  proyecto  = await Proyectos.create({ nombre  });
    res.redirect('/');
  }
}
