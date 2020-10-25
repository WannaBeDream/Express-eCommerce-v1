# ExpressJS store with MongoDB [2020 October]

- <span style="fontWeight: bold" >Node & Express</span>: Web API, Body Parser, File Upload, JWT, morgan, express-oas-generator
- <span style="fontWeight: bold" >MongoDB</span>: Mongoose, Aggregation
- <span style="fontWeight: bold" >Development</span>: ESLint, Babel, Git, Github

## Run Locally

- git clone git@github.com:WannaBeDream/Express-eCommerce-v1.git
- cd Express-eCommerce-v1
- npm install
- npm start
- go to <a href="http://localhost:8000/api-docs/">Swagger</a> to check endpoints (TO DO specs)


## MongoDB models 
<div align="center">
<img src="https://github.com/WannaBeDream/Express-eCommerce-v1/blob/main/dbModels.png" width="600" alt="db models" />
</div>


### Implemented endpoints:

#### /api/users
Path | Method | Description | Middlewares
---|---|---|---
/createadmin | GET | CreateAdminAction | none
/register | POST | SignUpAction | none
/signin | POST | SignInAction | none
/:id | PUT | UpdateUserAction | isAuth
/:id | DELETE | DeleteUserAction | isAuth,isAdmin

#### /api/products
Path | Method | Description | Middlewares
---|---|---|---
/ | GET | GetAllProductsAction | none
/:id | GET | GetProductAction | none
/:id | PUT | UpdateProductAction | isAuth,isAdmin
/:id | DELETE | DeleteProductAction | isAuth,isAdmin
/ | POST | CreateProductAction | isAuth,isAdmin
/:id/reviews | POST | CreateReview | isAuth

#### /api/orders
Path | Method | Description | Middlewares
---|---|---|---
/ | GET | getOrdersByPopulateAction | isAuth
/mine | GET | getMineOrdersAction | isAuth
/:id | GET | getOrderAction | isAuth
/ | POST | CreateOrderAction | isAuth
/:id/pay | PUT | payOrderAction | isAuth
/:id | DELETE | DeleteOrderAction | isAuth,isAdmin


#### /api/uploads
Path | Method | Description | Middlewares
---|---|---|---
/ | POST | UploadImage | none




## Updates 23.10.20
- Added multer module and uploader route (TO DO)
- Added new routes /uploads and /api/uploads (TO DO)
- Added new review schema and route createReview