const models = require('../../models');

exports.get_products = async ( _ , res) => {
    try {
        const products = await models.Products.findAll();
        res.render( 'admin/products.html' ,{ products });
    } catch(err) {
        console.log(err);
    }
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = async ( req , res ) => {
    
    await models.Products.create(req.body);
    res.redirect('/admin/products');

}

exports.get_products_detail = async ( req , res ) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/detail.html', { product });  
};

exports.get_products_edit = async ( req , res ) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/write.html', { product });
};

exports.post_products_edit = async ( req , res ) => {

    await models.Products.update(
        req.body,
        { 
            where : { id: req.params.id } 
        }
    ); 
    
    res.redirect('/admin/products/detail/' + req.params.id );

}

exports.get_products_delete = async ( req , res ) => {
    await models.Products.destroy({
        where: {
            id: req.params.id
        }
    });
       
    res.redirect('/admin/products');
};