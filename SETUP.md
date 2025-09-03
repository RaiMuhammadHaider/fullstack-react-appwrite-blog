# App Setup Guide

## Environment Variables Setup

To run this application, you need to set up your Appwrite configuration. Create a `.env` file in the root of your project with the following variables:

```env
# Appwrite Configuration
VITE_APPWRITE_PROJECT_ID=your_project_id_here
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=your_database_id_here
VITE_APPWRITE_COLLECTION_ID=your_collection_id_here
VITE_APPWRITE_BUCKET_ID=your_bucket_id_here
```

## Getting Appwrite Credentials

1. Go to [Appwrite Console](https://console.appwrite.io/)
2. Create a new project or select an existing one
3. Go to Settings > API Keys
4. Create a new API key with the necessary permissions
5. Copy your Project ID and API Endpoint

## Running the Application

1. Install dependencies: `npm install`
2. Set up your `.env` file with the credentials above
3. Run the development server: `npm run dev`

## Current Status

The application will now run without crashing even if Appwrite credentials are missing. You'll see warning messages in the console, but the app will still load and display properly.

To enable full functionality, make sure to:
1. Set up your `.env` file with proper Appwrite credentials
2. Restart the development server after adding the environment variables 