import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string, hero: any): string {
    if (!value) {
      return '';
    }
    value = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
    return value;
  }

}
