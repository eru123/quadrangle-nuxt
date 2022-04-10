export const useAccountType = () => useState<string>('accountType', () => 'none');
export const useAppState = () => useState<string>('appState', () => 'loading');
export const useUserState = () => useState<string>('userState', () => null);