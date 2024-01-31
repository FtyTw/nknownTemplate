import { nknownNetwork } from '@network';
import { store } from '@redux/index';
import { nknown } from '@redux/slices';
import { NknownData } from '@redux/types';

export const fetchNknownDataAction = async (data: NknownData) => {
  const response = await nknownNetwork.fetchNknownData(data);
  store.dispatch(nknown.actions.updateDefaultState(response?.data));
  // sometimes you need to have a response immediately
  return response;
};

export const fetchNknownPlanetsDataAction = async (data?: any) => {
  const response = await nknownNetwork.fetchNknownPlanetsData(data);
  store.dispatch(
    nknown.actions.updateDefaultStateItems(response?.data?.results),
  );
  // sometimes you need to have a response immediately
  return response;
};
