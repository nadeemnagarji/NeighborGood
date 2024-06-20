# Neighbor Good

Neighbor Good is a web application that displays the latest news articles from various categories such as business, entertainment, science, sports, health, and technology. Users can navigate through different categories and read full articles from their sources.

## Features

- Display latest news articles by category
- Navigate through different news categories
- Read full articles by clicking on the news card
- Responsive design for better user experience on all devices

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Clone the Repository

```bash
git clone https://github.com/nadeemnagarji/neighborgood.git
cd neighborgood
npm install


### Setup Environment Variables

- Create a .env file in the root directory of the project.
- Add your newsapi.org API key to the .env file:
- VITE_API_KEY=your_newsapi_key_here

### Run the Application
 - npm run dev

## Technologies Used
- React
- Redux Toolkit
- Axios
-Tailwind CSS
- Vercel for deployment

## Note on API Usage

This application is hosted on Vercel:https://neighbor-good-rho.vercel.app/. However, since i am  using the free tier of the newsapi.org API, the API requests will not respond and will return a 426 error in production. To fully experience the application, you need to run it locally with your own API key from newsapi.org.
```
