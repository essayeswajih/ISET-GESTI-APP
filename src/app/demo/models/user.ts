export interface User {
    id: number;       // Integer ID field
    username: string; // Username of the user
    tel: string;      // Telephone number of the user
    cin: number;      // CIN (identification number) of the user
    adresse: string;  // Address of the user
    fax: string;      // Fax number of the user
    email: string;    // Email address of the user
    password: string; // Password of the user (consider hashing or encryption in real apps)
    role: string;     // Role of the user (e.g., 'admin', 'user', etc.)
  }
  