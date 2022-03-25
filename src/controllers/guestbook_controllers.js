const entrada = [];

const render_home = (req,res) => {
    res.render('./pages/index',
    {
        titulo: 'Guestbook', 
        entrada
    });
}    

const render_new_entry = (req,res) => {
    res.render('./pages/new_entry', 
    {
        titulo: 'New Entry'
    });
}

const crear_new_entry = (req,res) => {
    const nueva_entrada = {
        nombre: req.body.nombre,
        contenido: req.body.contenido,
        publicado: new Date()
    };
    entrada.push(nueva_entrada);
    res.redirect('/');
}

module.exports = {
    render_home, 
    render_new_entry, 
    crear_new_entry
};