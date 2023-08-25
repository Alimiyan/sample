import { useMutation } from '@apollo/client';
import { 
    defaultMutationHookArgs,
    IMutationWithAwaitRefetch,
    isNonEmptyArray
} from '../../common';
import { LOGIN } from '../../../mutations/auth';


interface Token {
    accessToken: string
    refreshToken: string
}

interface Auth {
    token : Token
  }
  
  interface LoginInput {
    email: string;
    password: string;
  }


export const useLoginMutation: IMutationWithAwaitRefetch<
  {
    login: Auth;
  },
  LoginInput
> = (optionalArgs) => {
  const {
    onSuccess,
    onFail,
    updateCache,
    awaitRefetchQueries,
    refetchQueries
  } = {
    ...defaultMutationHookArgs,
    ...optionalArgs
  };

  const [login, { loading }] = useMutation<
    { login: Auth },
    LoginInput
  >(LOGIN, {
    onCompleted: onSuccess,
    onError: onFail,
    update: updateCache,
    awaitRefetchQueries: awaitRefetchQueries || false,
    refetchQueries: [
      ...(refetchQueries && isNonEmptyArray(refetchQueries)
        ? refetchQueries
        : [])
    ]
  });

  return [loading, login];
};