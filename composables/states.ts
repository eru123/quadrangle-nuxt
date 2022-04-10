export const useAccountType = () => useState<string>('accountType', () => 'none');
export const useAccountTypeList = () => useState<any>('AccountTypeList', () => [
  { title: 'quadmate', emoji: '👨‍🎓', description: 'Find Career mentors, subject tutors, and like-minded individuals' },
  { title: 'quadmaster', emoji: '👨‍🏫', description: 'Share your knowledge and expertise as a mentor' },
])
export const useAppState = () => useState<string>('appState', () => 'loading');
export const useUserState = () => useState<any>('userState', () => null);