// const productosManager = new ProductManager()

app.use('/api/products'
    ,(req,res,next)=>{
         req.producManager=productosManager
         next()
     } 
     ,routerProducts)


