import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(array: any[], pageSize: number | string, pageNumber: number): any[] {

    if (!array.length) {
      return [];
    }
    if (pageSize === 'all') {
      return array;
    }
    const localPageSize = pageSize ?? 5;
    const localPageNumber = (pageNumber ?? 1) - 1;

    // @ts-ignore
    return array.slice(localPageNumber * localPageSize, (localPageNumber + 1) * localPageSize);
  }

}
