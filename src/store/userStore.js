import { create } from 'zustand';

const useUserStore = create((set, get) => ({
  users: [],
  currentUser: null,
  addUser: (user) => {
    const { users } = get();
    // Check if a user with the same email already exists
    const existingUser = users.find(u => u.email === user.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    // If not, add the user to the store
    set((state) => ({
      users: [...state.users, user]
    }));
  },
  setCurrentUser: (user) => set({ currentUser: user }),
  findUser: (email, password) => {
    const { users } = get();
    return users.find(user => user.email === email && user.password === password);
  },
  logout: () => set({ currentUser: null }),
}));

export default useUserStore;
