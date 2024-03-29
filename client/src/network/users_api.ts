import { User } from '../models/user';

async function fetchData(input: RequestInfo, init?: RequestInit): Promise<Response> {
    const response = await fetch(input, init);
    if (response.ok) {
        return response;
    } else {
        const errorbody = await response.json();
        const errormessage = errorbody.message;
        throw Error(errormessage);
}
}

export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData("http://localhost:5000/api/users", { method: "GET"});
    return response.json();
}

export interface RegisterCredentials {
    username: string;
    email: string;
    passwordRaw: string;
}

export async function register(credentials: RegisterCredentials): Promise<User> {
    const response = await fetchData("http://localhost:5000/api/users/register", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    console.log(response);
    return response.json();
}

export interface LoginCredentials {
    username: string;
    passwordRaw: string;
}

export async function login(credentials: LoginCredentials): Promise<User> {
    const response = await fetchData("http://localhost:5000/api/users/login", 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    return response.json();
}

export async function logout(): Promise<void> {
    await fetchData("/api/users/logout", { method: "POST"});
}