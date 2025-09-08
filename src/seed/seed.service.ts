import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async executeSeed() {
    await this.insertNewProducts();
    return 'This action adds a new seed';
  }

  private async insertNewProducts() {
    await this.productsService.deleteAllProducts();
    return true;
  }
}
