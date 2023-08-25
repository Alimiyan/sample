import {
    ApolloError,
    FetchPolicy,
    FetchResult,
    MutationFunctionOptions,
    PureQueryOptions,
    QueryLazyOptions,
    QueryResult
  } from '@apollo/client';

  export enum NetworkFetchPolicy {
    CACHE_AND_NETWORK = 'cache-and-network',
    NO_CACHE = 'no-cache',
    NETWORK_ONLY = 'network-only',
    CACHE_FIRST = 'cache-first'
  }

  const defaultQueryPolicy = NetworkFetchPolicy.NO_CACHE;
  
export const defaultMutationHookArgs = {
    onSuccess: () => {},
    onFail: () => {},
    updateCache: () => {},
    awaitRefetchQueries: false,
    refetchQueries: []
  };
  
  export const defaultQueryHookArgs = {
    onSuccess: () => {},
    onFail: () => {},
    fetchPolicy: defaultQueryPolicy
  };
  
  const isObject = (obj: any) => Boolean(obj && typeof obj === 'object');
  
  const isArray = (obj: any) => Boolean(isObject(obj) && obj instanceof Array);
  
  export const isNonEmptyArray = (obj: any) =>
    Boolean(isArray(obj) && obj.length > 0);
  
  type QueryOnSuccess<Data> = ((data: Data) => void) | undefined;
  
  type QueryOnFail = MutationOnFail;

  type IQueryArgs<DataType> = {
    onSuccess?: QueryOnSuccess<DataType>;
    onFail?: QueryOnFail;
  };
  
  interface IQueryFetchPolicyArgs<DataType> extends IQueryArgs<DataType> {
    fetchPolicy?: FetchPolicy;
  }
  
  type QueryCallWithInput<DataTypeInput, DataType> = (
    options?: QueryLazyOptions<DataTypeInput> | undefined
  ) => Promise<QueryResult<DataType>>;
  
  export type IQueryFetchPolicyWithInput<DataType, DataTypeInput> = (
    optionalArgs?: IQueryFetchPolicyArgs<DataType>
  ) => [
    QueryCallWithInput<DataTypeInput, DataType>,
    boolean,
    DataType | undefined,
    ApolloError | undefined
  ];
  
  type MutationOnSuccess<Data> = ((data: Data) => void) | undefined;
  
  type MutationOnFail = ((error: ApolloError) => void) | undefined;
  
  type MutationUpdateCache = ((cache: any, { data }: any) => void) | undefined;
  
  export type MutationRefetchQueries = string[] | PureQueryOptions[];
  
  type MutationCallWithInput<DataType, InputDataType> = (
    options?: MutationFunctionOptions<DataType, InputDataType> | undefined
  ) => Promise<FetchResult<DataType, Record<string, any>, Record<string, any>>>;
  
  type MutationCallWithoutInput<DataType> = (
    options?: MutationFunctionOptions<DataType> | undefined
  ) => Promise<FetchResult<DataType, Record<string, any>, Record<string, any>>>;
  
  interface IMutationArgs<DataType> {
    onSuccess?: MutationOnSuccess<DataType>;
    onFail?: MutationOnFail;
  }
  
  interface IMutationWithAwaitRefetchArgs<DataType>
    extends IMutationArgs<DataType> {
    updateCache?: MutationUpdateCache;
    awaitRefetchQueries?: boolean;
    refetchQueries?: MutationRefetchQueries;
  }
  
  export type IMutationWithAwaitRefetch<DataType, InputDataType> = (
    optionalArgs?: IMutationWithAwaitRefetchArgs<DataType>
  ) => [boolean, MutationCallWithInput<DataType, InputDataType>];
  
  export type IMutationWithoutInputArgs<DataType> = (
    optionalArgs?: IMutationWithAwaitRefetchArgs<DataType>
  ) => [boolean, MutationCallWithoutInput<DataType>];
  