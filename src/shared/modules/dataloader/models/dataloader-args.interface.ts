export interface IDataloaderArgs {
  findAll: (keys: number[]) => Promise<any[]>;
  filterBy: string;
}
