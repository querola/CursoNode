const Proyectos = require('../models/proyectos');

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('index', {
      nombrePagina : 'proyectos',
      proyectos
    });
  }
exports.formularioProyecto = async (req, res) =>{
  const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}
exports.nuevoProyecto = async (req , res) => { 
  const proyectos = await Proyectos.findAll();
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
      errores,
      proyectos
    })
  }else{
    //no hay errores insertar a la base de datos
    
    const  proyecto  = await Proyectos.create({ nombre  });
    res.redirect('/');
  }
}
exports.proyectoPorUrl = async(req, res, next) => {
  const proyectos = await Proyectos.findAll();
  const proyecto = await Proyectos.findOne({
    where:{
      url: req.params.url
    }
  });

  if(!proyecto) return next();

  //render a la vista
  res.render('tareas', {
    nombrePagina : 'Tareas del Proyecto',
    proyecto,
    proyectos
  })
}
