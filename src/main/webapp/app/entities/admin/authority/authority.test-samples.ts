import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'a68e581a-72d4-4768-92a3-e64b9fceae4d',
};

export const sampleWithPartialData: IAuthority = {
  name: '6f5a92a8-84fb-41af-8dd6-9a753b24c1d0',
};

export const sampleWithFullData: IAuthority = {
  name: '22ab99d9-bcd9-4ebb-a395-dfdecdce393f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
