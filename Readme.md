# Ecommerce Website

A website where users can buy and sell any products.

# Features

- Includes: SignIn, SignOut and Reset Password Pages
- A product page to display store products
- A sell page to add product to store
- Orders page to display current user's order
- My cart page to display users cart items and payment options

# Tech

- [Next.js](https://nextjs.org/) - React Framework
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/)
- [Keystone.js](https://www.keystonejs.com/) - Headless CMS & GraphQL API for Node
- [Keystone Next](https://next.keystonejs.com/)
- [Stripe.js](https://stripe.com/docs/js) - For adding payment method to your website
- [Ethereal Email ](https://ethereal.email/) - Create fake emails for testing you website
- [Cloudinary](https://cloudinary.com/) - Very useful for adding images
- [Styled Component](https://styled-components.com/) - Powerful tool for styling Web Apps

# Mock Ups

| Products Page | 
| ------------- |
| <img src="https://github.com/Chris-Ejeh/Nextjs_graphQL_Website/blob/main/firstnextapp/pages/images/Products_Page.png" width="500" > | 
|Product page queries the data from the graphql server and displays the products on the website UI. Implemented pagination - Apollo graphQL makes pagination very easy. Users can search for an item and add any item to the cart|




| Order Page |
|------------|
|<img src="https://github.com/Chris-Ejeh/Nextjs_graphQL_Website/blob/main/firstnextapp/pages/images/Orders_Page.png" width="500" > |
| On this page users can view their previous orders  |

| Sell Page |
|------------|
|<img src="https://github.com/Chris-Ejeh/Nextjs_graphQL_Website/blob/main/firstnextapp/pages/images/Sell_Page.png" width="500" > |
| On the sell page, a user can add item/items to be sold. Users can upload images, product name, price, and description |

| Auth Page |
|------------|
|<img src="https://github.com/Chris-Ejeh/Nextjs_graphQL_Website/blob/main/firstnextapp/pages/images/SignUp_Page.png" width="500" > |
| In the auth page, a user can sign in, sign up and reset password |

| Cart |
|------------|
|<img src="https://github.com/Chris-Ejeh/Nextjs_graphQL_Website/blob/main/firstnextapp/pages/images/Cart.png" width="500" > |
| In the Cart, users can view cart item and checkout using a credit card |


### First, run the development server:

```
npm run dev
# or
yarn dev
```

### To initiate new project click [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
