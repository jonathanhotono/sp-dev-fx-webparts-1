import {
  ITermStore,
  ITermSet,
  ITermGroup,
  ITerm
} from './taxonomy.entities';

import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';

import { IDataHelper } from '../../services/DataHelperBase';
import { DataHelpersFactory } from '../../services/DataHelpersFactory';

/**
 * Taxonomy Model
 */
export class Taxonomy {
  public selectedTerm: string;

  /**
   * data helper
   */
  private _dataHelper: IDataHelper;

  /**
   * ctor
   * @param context: web part context
   */
  constructor(context: IWebPartContext) {
    this._dataHelper = DataHelpersFactory.createDataHelper(context);
  }

  /**
   * API to get Term Stores
   */
  public getTermStores(): Promise<ITermStore[]> {
    return this._dataHelper.getTermStores();
  }

  /**
   * API to get Term Groups by Term Store
   */
  public getTermGroups(termStore: ITermStore): Promise<ITermGroup[]> {
    return this._dataHelper.getTermGroups(termStore.id);
  }

  /**
   * API to get Term Sets by Term Group
   */
  public getTermSets(termGroup: ITermGroup): Promise<ITermSet[]> {
    return this._dataHelper.getTermSets(termGroup);
  }

  /**
   * API to get Terms by Term Set
   */
  public getTerms(termSet: ITermSet): Promise<ITerm[]> {
    return this._dataHelper.getTerms(termSet);
  }

  /**
   * API to get Terms by Term
   */
  public getChildTerms(term: ITerm): Promise<ITerm[]> {
    return this._dataHelper.getChildTerms(term);
  }
}