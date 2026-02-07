import { Injectable, NotFoundException } from '@nestjs/common';

export type Product = {
  id: string;
  name: string;
  price: number;
  active: boolean;
};

@Injectable()
export class ProductsService {
    private products: Product[] = [
    { id: 'p1', name: 'Producto 1', price: 10000, active: true },
    { id: 'p2', name: 'Producto 2', price: 25000, active: true },
    { id: 'p3', name: 'Producto 3', price: 5000, active: false },
  ];

  findAll(){
    return this.products;
  }

  findById(id: string){
    const product = this.products.find(product => product.id === id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }
}
