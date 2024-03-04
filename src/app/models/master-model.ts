export class SignUp {
    fullName: string = '';
    email: string = '';
    phoneNumber: string = '';
    password: string = '';
    generatedPassword: string = '';
}

export class SignIn {
    userId: number = 0;
    fullName: string = '';
    email: string = '';
    phoneNumber: string = '';
    password: string = '';
    oldPassword: string = '';
    newPassword: string = '';
    confirmPassword: string = '';
}

export class Contacts {
    contactId: number = 0;
    firstName: string = '';
    lastName: string = '';
    phoneNumber: string = '';
    altPhoneNumber: string = ''; 
    email: string = ''; 
    birthdayDate: Date | null = null; 
    address: string = '';
    state: string = '';
    country: string = '';
    modifyDate: Date | null = null;
}