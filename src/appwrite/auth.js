// import conf from '../conf/conf.js';
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//     client = new Client();
//     account;

//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectID);
//         this.account = new Account(this.client);
//     }

//     async createAccount({ email, password, name }) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if (userAccount) {
//                 return this.login({ email, password });
//             }
//             return userAccount;
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({ email, password }) {
//         try {
//             return await this.account.createEmailPasswordSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             if (error.code === 401) {
//                 return null; // No active session
//             }
//             console.error("Appwrite service :: getCurrentUser :: error", error);
//             throw error;
//         }
//     }

//     async logout() {
//         try {
//             await this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite service :: logout :: error", error);
//         }
//     }
// }

// const authService = new AuthService();
// export default authService;
// AuthService.js
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    if (!conf.appwriteUrl || !conf.appwriteProjectID) {
      console.error("❌ Appwrite config is missing:", conf);
    }

    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      console.error("❌ createAccount error:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("❌ login error:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) return null; // No active session
      console.error("❌ getCurrentUser error:", error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("❌ logout error:", error);
    }
  }
}

const authService = new AuthService();
export default authService;
