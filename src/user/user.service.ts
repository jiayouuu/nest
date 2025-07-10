import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { R } from 'src/common/response';

@Injectable()
export class UserService {
  private list:Array<any>
  constructor() {
    this.list = []
  }
  add(name: string) {
    this.list.push({
      name,
      createTime: Date.now(),
      id: nanoid(),
    });
    return R.success();
  }
  get() {
    return R.success(this.list);
  }

  range(r: number) {
    const list = Array.from({ length: r }, (_, i) => (i + 1).toString());
    return R.success(list);
  }
}
