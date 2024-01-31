import { useSelector } from 'react-redux';

/*** types ***/
import { RootState } from '@redux/index.ts';
import { NknownData } from '@redux/types';

/*** hooks ***/
import { useAsyncAction } from './useAsyncAction';

/*** redux ***/
import {
  fetchNknownDataAction,
  fetchNknownPlanetsDataAction,
} from '@redux/actions';
import {
  selectNknownSwPerson,
  selectNknownSwPersonByName,
} from '@redux/selectors';

export const useNknown = () => {
  const swPerson = useSelector(selectNknownSwPerson);
  const swPersonByName = useSelector((state: RootState) =>
    selectNknownSwPersonByName(state, 'Tatooine'),
  );
  const { asyncAction, loading, responseError } = useAsyncAction(true);

  const fetchNknownData = async (data: NknownData) => {
    return await asyncAction(fetchNknownDataAction, data);
  };
  const fetchNknownPlanets = async () => {
    return await asyncAction(fetchNknownPlanetsDataAction);
  };
  return {
    loading,
    responseError,
    fetchNknownData,
    fetchNknownPlanets,
    swPerson,
    swPersonByName,
  };
};
