# Angular Authentication Application

Welcome to the Angular Authentication Application repository! This application provides a comprehensive solution for user authentication, including sign-in, sign-up, authentication guards, and password recovery functionalities.
# **Demo 🎥**
![image](https://github.com/saurabhnalepatil/Auth-Dashboard-Frontend/assets/95145125/f5688bf2-0010-4273-ae43-d07cc2518a2b)

# View live preview [here](https://auth-dashboard-frontend.vercel.app).

## Features

- **Sign-in**: Allow users to authenticate themselves with their credentials.
- **Sign-up**: Enable new users to create accounts securely.
- **Authentication Guard**: Protect routes that require authentication to access.
- **Forgot Password**: Provide a mechanism for users to reset their passwords if forgotten.

## Technologies Used

- **Angular**: Front-end framework for building dynamic and interactive user interfaces.
- **Firebase**: Backend-as-a-Service platform for user authentication and database storage.
- **Angular Material**: UI component library for Angular applications, providing pre-built UI components for a consistent design.
- **RxJS**: Reactive Extensions for JavaScript, used for handling asynchronous operations and data streams.

## Getting Started

1. **Clone the repository to your local machine.**
2. **Install dependencies using `npm install`.**
3. **Set up Firebase Authentication**: 
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication method.
   - Set up Firebase configuration in the Angular environment files (`environment.ts` and `environment.prod.ts`).
4. **Run the development server using `ng serve`.**
5. **Access the application in your web browser at `http://localhost:4200`.**

## Project Structure

- **src/app/components**: Contains Angular components for the login, sign-up, and password reset forms.
- **src/app/services**: Contains Angular services for user authentication, HTTP requests, and Firebase integration.
- **src/app/guards**: Contains Angular guards for route protection based on user authentication status.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your feature or bug fix.**
3. **Make your changes and commit them with descriptive messages.**
4. **Push your changes to your fork.**
5. **Submit a pull request to the main repository.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
