### Back-end développé en NodeJS/Express qui permet une gestion de produits.

Le back-end gére les API REST suivantes :

| Resource        | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| --------------- | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**   | Create a new products | Retrieve all products          | X                                        | X   | X                |
| **/products/1** | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

Un produit a les caractéristiques suivantes :

```typescript
class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
}
```

### Comment lancer le projet

# Installer les packages

```shell
npm i
```

# Setup Prisma

```shell
npx prisma generate
npx prisma db push
```

# Setup les produits du json

```shell
npm run seed
```

# Start the app

```shell
npm run start
```
