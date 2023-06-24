import { makeAutoObservable } from 'mobx'

export interface IUser {
  id: number
  username: string
  email: string
  role: {
    name: string
  }
}

class AppState {
  user: IUser | null = null
  isUserLoaded = false

  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: IUser | null) {
    this.user = user
  }

  setIsUserLoaded(isUserLoaded: boolean) {
    this.isUserLoaded = isUserLoaded
  }
}

export default new AppState()
