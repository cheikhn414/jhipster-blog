import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 17638,
  login: 'FA0r+_@u2b\\+m\\EFAp\\%d6Pg\\dAj\\=nrmP',
};

export const sampleWithPartialData: IUser = {
  id: 19149,
  login: 'zz',
};

export const sampleWithFullData: IUser = {
  id: 17032,
  login: 'T}@eY',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
