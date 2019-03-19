export class Auth {
  private token: string | null;

  constructor() {
    this.token = null;
    try {
      const data = localStorage.getItem('auth');
      if (data) {
        const { token } = JSON.parse(data);
        this.token = token;
      }
    } catch (e) {
      localStorage.removeItem('auth');
    }
  }

  public save({ token }: { token: string }) {
    this.token = token;
    const data = JSON.stringify({ token });
    localStorage.setItem('auth', data);
  }

  public remove() {
    this.token = null;
    localStorage.removeItem('auth');
  }

  public access() {
    return {
      token: this.token,
    };
  }
}

export const auth = new Auth();
